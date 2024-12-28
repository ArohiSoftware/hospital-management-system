import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createClientSub = async (req, res) => {

  try {

    const { name, phone, email, password, address, dob, hospital, } = req.user

    // Ensure dob is in the correct format
    const formattedDob = new Date(dob).toISOString(); // Converts to ISO format

    console.log("req", req.user)


    let { PaymentMethodId, subscriptionPlanId, paymentStatus, duration } = req.body;

    console.log("req.body",req.body)



    // Validate that required fields are present in the request body
    if (!subscriptionPlanId || !PaymentMethodId) {
      return res.status(400).json({ error: "Subscription Plan ID, Payment Method ID, Start Date, and End Date are required." });
    }

    const client = await prisma.client.create({
      data: { name, phone, email, password, address, dob: formattedDob, hospital }, // Creating entry
    });

    console.log("client crated", client)

    const startDate = new Date();

    // Calculate the end date by adding 'duration' months to the current date
    const endDate = new Date(startDate); // Clone the start date
    endDate.setMonth(startDate.getMonth() + duration); // Add the number of months from 'duration'

    // Log for debugging
    console.log("startDate:", startDate);
    console.log("endDate:", endDate);

    const clientSubscription = await prisma.clientSubscription.create({
      data: {
        startDate: startDate,
        endDate: endDate,
        paymentStatus: paymentStatus,
        PaymentMethod: {
          connect: { id: PaymentMethodId }
        },
        SubscriptionPlan: {
          connect: { id: subscriptionPlanId }, // Connect the subscription plan
        },
        client: {
          connect: { id: client.id }, // Connect to the newly created client
        }
      },
    });

    console.log("clientSubscription created", clientSubscription)
    res.status(201).json(clientSubscription);
  } catch (err) {
    res.status(500).json({ error: 'Subscription creation failed', err });
    console.log(err)
  }
};