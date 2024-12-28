// PaymentModal.jsx
import React, { useEffect, useState } from "react";
import back from "../../assets/images/back.jpg";
import tick from "../../assets/images/tick.png";
import axiosInstanceWeb from "../../axiosConfig";
import arohilogo from "./ArohiLogo.png"
import { useDispatch, useSelector } from 'react-redux';
import { createPaymentMethod, verifyPayment } from "../../redux/actions/PaymentAction";

const PaymentModal = ({ isOpen, closeModal, OnSuccess }) => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleMonthlyClick = () => setIsMonthly(true);
  const handleYearlyClick = () => setIsMonthly(false);

  const dispatch = useDispatch()
  const { loading, order, paymentVerificationStatus, error } = useSelector(state => state.payment);
  console.log("Loading state:", loading); // Check the value of loading

  const [allplans, setallplans] = useState([])

  const getallplans = async () => {
    const response = await axiosInstanceWeb.get(`/subplans/getall`)

    console.log("getall plans", response)
    setallplans(response.data)
  }

  useEffect(() => {
    getallplans()
  }, [isOpen])


  const pricingPlans = isMonthly
    ? [
      { name: "Basic", price: "$19", period: "/month", features: ["Consequet ex provident", "Desement sit cupidatat", "Aumert id ers et visi exillum"] },
      { name: "Essential", price: "$59", period: "/month", features: ["Consequet ex provident", "Desement sit cupidatat", "Additional feature 1", "Additional feature 2"], popular: true },
      { name: "Premium", price: "$119", period: "/month", features: ["Desement sit cupidatat", "Additional feature 1", "Additional feature 2", "Additional feature 3"] },
    ]
    : [
      { name: "Basic", price: "$119", period: "/year", features: ["Consequet ex provident", "Desement sit cupidatat", "Aumert id ers et visi exillum"] },
      { name: "Essential", price: "$159", period: "/year", features: ["Consequet ex provident", "Desement sit cupidatat", "Additional feature 1", "Additional feature 2"], popular: true },
      { name: "Premium", price: "$1119", period: "/year", features: ["Desement sit cupidatat", "Additional feature 1", "Additional feature 2", "Additional feature 3"] },
    ];


  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };


  const handlePayment = async (plan) => {
    const res = await loadRazorpayScript();

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    try {
      const paymentdata = {
        // amount: ,
        amount: plan.price,
        currency: "INR",
        // planId: planId,
      }

      dispatch(createPaymentMethod(paymentdata))

      console.log("orderdata", order)

      const options = {
        key: "rzp_test_41ZFhXfBCmUM1o",
        image: arohilogo, // company logo
        amount: order.amount,
        currency: order.currency,
        order_id: order.id,
        name: "HMS",
        description: "Checkout",
        handler: async function (response) {

          console.log("handler response", response)

          try {
            const verificationData = {
              order_id: response.razorpay_order_id,
              payment_id: response.razorpay_payment_id,
              signature: response.razorpay_signature,
              plan_id: plan.id,
            };

            // Verify the payment
            dispatch(verifyPayment(verificationData))

            console.log("paymentVerificationStatus", paymentVerificationStatus)

            alert("Payment verified successfully");

            // Prepare order data

            const token = localStorage.getItem('token');
            console.log("token", token)
            if (!token) {
              throw new Error('No token found');
            }

            const data = { PaymentMethodId: paymentVerificationStatus.paymentMethod.id, 
              subscriptionPlanId:paymentVerificationStatus.paymentMethod.plan_id,paymentStatus:paymentVerificationStatus.paymentstatus,
              duration:plan.duration
            }

            const createclientsub = await axiosInstanceWeb.post(`/marketing/clientsub`, data, {
              headers: {
                "Authorization": `Bearer ${token}`
              }

            });

            // create client subscription
            console.log("createclientsub", createclientsub)


            // navigate("/");
          } catch (error) {
            console.log("Failed to place order:", error);
            alert("Failed to place order");
          }
        },

        theme: {
          color: "#FFAC1C",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();

    } catch (error) {
      console.log("Error creating order:", error);
      // alert("Error creating order. Please try again.");
    }
  };

  return (
    <>
      {
        !isOpen ? null : <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="relative w-[95%] sm:w-[90%] md:w-[75%] lg:w-[60%] xl:w-[50%] mx-auto border-2 p-4 md:p-6 bg-white rounded-xl shadow-lg">
            {/* Close Button */}
            <button className="absolute top-2 right-2 text-gray-500" onClick={closeModal}>
              &times;
            </button>

            <h2 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-semi-bold mb-4 font-poppins leading-tight">
              We offer great <span className="text-green-400">price</span> plans for the
              <br className="pt-2 py-3" /> application
            </h2>

            {/* Toggle Button */}
            <div className="flex justify-center items-center mb-10">
              <div className="flex px-2  bg-white w-45 h-7 p-1 shadow-lg rounded-full">
                <button
                  className={`rounded-full flex items-center justify-center w-20 py-1 h-5 text-xs sm:text-sm transition-colors duration-300 ${isMonthly ? "bg-green-600 text-white" : "bg-gray-200 text-black"}`}
                  onClick={handleMonthlyClick}
                >
                  Monthly
                </button>
                <button
                  className={`rounded-full flex items-center justify-center w-20 h-5 py-1 text-xs sm:text-sm transition-colors duration-300 ${!isMonthly ? "bg-green-600 text-white" : "bg-gray-200 text-black"}`}
                  onClick={handleYearlyClick}
                >
                  Yearly
                </button>
              </div>
              <span className="ml-2 text-purple-600 text-[10px] ">Save up to 30%</span>
            </div>

            {/* Pricing Plans */}
            <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-3">
              {allplans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white shadow-md rounded-lg p-3 sm:p-4 lg:p-6 text-center transition-transform duration-300 hover:border-blue-700 hover:border-4 hover:scale-110`}
                >
                  {plan && <p className="text-xs text-yellow-600 font-semibold mb-2">Most Popular</p>}
                  <h3 className="text-md sm:text-lg md:text-xl font-semibold mb-2">{plan.name}</h3>
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                    {plan.price}
                    <span className="text-xs sm:text-sm md:text-base">{plan.duration}</span>
                  </p>
                  <ul className="mb-4 bg-gray-100 p-2 rounded-lg text-xs sm:text-sm">

                    <li className="mb-1 flex items-center">
                      <img src={tick} alt="Tick" className="w-4 h-4 mr-2" />
                      {plan.features}
                    </li>

                  </ul>
                  <button className="border-2 bg-blue-100 border-blue-500 text-blue-500 py-1 px-2 sm:py-2 sm:px-3 md:py-2 md:px-4 rounded hover:bg-blue-500 hover:text-white w-full transition-colors duration-300 text-xs sm:text-sm" onClick={() => {
                    console.log("Plan clicked:", plan);  // Check if the plan data is correct
                    handlePayment(plan);  // Pass the plan to handlePayment
                  }}
                  >
                    Get started
                  </button>
                  {/* <button className="border-2 bg-blue-100 border-blue-500 text-blue-500 py-1 px-2 sm:py-2 sm:px-3 md:py-2 md:px-4 rounded hover:bg-blue-500 hover:text-white w-full transition-colors duration-300 text-xs sm:text-sm" onClick={handlePayment}>
                    buy 100
                  </button> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      }</>


  );
};

export default PaymentModal;
