import { PrismaClient } from '@prisma/client';
import Razorpay from "razorpay"
import crypto from 'crypto';

const prisma = new PrismaClient();

import dotenv from "dotenv"
dotenv.config()
const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
})

// Function to generate unique receipt ID
const generateReceiptId = () => {
  const timestamp = Date.now();
  const randomStr = crypto.randomBytes(4).toString('hex');
  return `receipt_${timestamp}_${randomStr}`;
};

export const createPaymentMethod = async (req, res) => {
  const { methodName, paymentId, plan_id, amount } = req.body;

  console.log("req user", req.user)

  console.log("createPaymentMethod amount", amount)

  try {
    // Check if the subscription plan exists
    // const subscriptionPlan = await prisma.subscriptionPlan.findUnique({
    //     where: { id: plan_id },
    // });

    // if (!subscriptionPlan) {
    //     return res.status(404).json({ error: "Subscription Plan not found." });
    // }

    const amountinrupee = amount * 100 ;

    const options = {
      amount: amountinrupee, 
      currency: 'INR',
      receipt: generateReceiptId(), // Generate unique receipt ID
      payment_capture: 1, // Automatically capture payment
    };


    const order = await razorpayInstance.orders.create(options);

    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Verify Payment
export const verifyPayment = async (req, res) => {
  const { order_id, payment_id, signature, plan_id } = req.body;


  // Check if the subscription plan exists
    const subscriptionPlan = await prisma.subscriptionPlan.findUnique({
        where: { id: plan_id },
    });

    if (!subscriptionPlan) {
        return res.status(404).json({ error: "Subscription Plan not found." });
    }

  const generatedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(order_id + '|' + payment_id)
    .digest('hex');

  if (generatedSignature === signature) {

    // Create the payment method
    const paymentMethod = await prisma.paymentMethod.create({
      data: {
        methodName: "razorpay",
        paymentId: payment_id,
        subscriptionPlan: {
          connect: { id: plan_id },
        }
      }
    });

    res.status(200).json({ paymentstatus: "paid", paymentMethod: paymentMethod });
  } else {
    res.status(400).json({ success: false, message: 'Invalid signature' });
  }
};