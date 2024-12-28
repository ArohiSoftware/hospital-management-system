import React, { useState, useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import PayOption from "../Payment/PayOption"
import Dr from '../../assets/images/Aarohilogo.png';
import video from '../../assets/images/Videologo.png';
import { useNavigate } from 'react-router-dom';
import { fetchAdvertisement } from "../../redux/actions/adActions";
import PaymentModal from "../Registation/PaymentPage";
import CreateAccount from "../Registation/CreateAccount";
const HealthCareSection = ({section0 , advertisements}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [registration, setRegistration] = useState(false); // Renamed state
  const [IsPay, setPay] = useState(false); 

  // const {loading , ad , error} =useSelector((state)=>state.advertisement);


console.log(advertisements)
  // useEffect(()=>{
  //   dispatch(fetchAdvertisement(1));
  // },[dispatch]);


  const openRegistration = () => {
    setRegistration(true);
    // Removed console.log here
  };

  const closeRegistration = () => {
    setRegistration(false);
    reset();
    
  };
  const openPay = () => {
    setRegistration(false);
    setPay(true);

    // Removed console.log here
  };

  const closePay = () => {
    setPay(false);
    // Removed console.log here
  };
  // Optional: Log when registration state changes
  useEffect(() => {
    console.log("Registration Modal is now:", registration ? "Open" : "Closed");
  }, [registration]);

  return (
    <>  
      {/* {loading ? (
            <p>Loading advertisement...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : ( */}
      <div className="h-auto w-11/12 flex flex-col justify-center font-poppins py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-screen-2xl mx-auto px-8 pt-0 pb-16">
          
          {/* ----------------------- Left Section ------------------*/}
          <div className="w-full lg:text-left pr-5">
            <div className="font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
              <h1 className="w-1/2">
                {/* <span className="text-green-600">We care</span> <br />
                about your health */}
                {advertisements[0]?.title}
              </h1>
            </div>
            <p className="text-gray-500 text-base md:text-lg lg:text-xl mb-8 w-2/3">
              {/* Good health is the state of mental, physical, and social<br />
              well-being and it does not just mean the absence of diseases. */}
              {advertisements[0]?.description}
            </p>

            {/* ------------------------- Sign-in/up Buttons --------------------- */}
            <div className="flex flex-col md:flex-row justify-center lg:justify-start gap-6">
              <button 
                className="bg-red-400 px-4 h-[53px] rounded-lg text-white mt-3 font-bold text-lg" 
                onClick={openRegistration}
              >
                Book an appointment →
              </button>
              <button className="flex items-center justify-center px-6 py-3 rounded-lg text-lg lg:text-xl">
                <span className="mr-3 border rounded-full border-gray-400">
                  <img src={video} alt="Watch Videos" className="h-9 w-auto m-[6px] hover:transf"/>
                </span> 
                <span className="font-semibold">Watch videos</span>
              </button>
            </div>

            {/* -------------------------- Sign-up Text --------------------------*/}
            <p className="font-semibold mt-8 text-lg lg:text-xl">
              Become a member of our hospital community?{" "}
              <span 
                className="text-green-500 font-bold cursor-pointer" 
                onClick={openRegistration} // Make "Sign up" clickable
              >
                Sign up
              </span>
            </p>
          </div>

          {/* ----------------Right Section - Doctors ------------*/}
          <div className=" p-5 mt-16 relative flex justify-center items-center bg-red-100 rounded-full">
            <div className=" p-5 relative flex justify-center items-center bg-red-50 rounded-full">
              <div className="w-full lg:w-72 relative flex justify-center items-center bg-red-200 rounded-full">
                <img
                  src={advertisements[0]?.imageUrl} // Main Dr Img 
                  alt="Doctors"
                  className="lg:w-72 lg:h-72"
                />
                <div className="absolute lg:top-10 lg:-left-40 -top-16 -left-20 bg-white p-2 rounded-2xl shadow-lg flex items-center space-x-2">
                  <span role="img" aria-label="doctor" className="text-yellow-500">🔍</span>
                  <div>
                    <p className="font-semibold">Well Qualified Doctors</p>
                    <p className="text-xs text-gray-500">Treat with care</p>
                  </div>
                </div>
                <div className="absolute lg:bottom-10 lg:-left-40 -bottom-7 -left-28 bg-white px-6 p-2 rounded-2xl shadow-lg flex items-center space-x-2">
                  <span role="img" aria-label="email" className="text-yellow-500">📧</span>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-xs text-gray-500">www.arohisoftwares.com</p>
                  </div>
                </div> 
                <div className="absolute lg:bottom-6 lg:-right-16 -bottom-2 -right-28 bg-white p-2 rounded-2xl shadow-lg flex items-center space-x-2">
                  <div>
                    <p className="font-semibold text-black">Contact No</p>
                    <p className="text-xs text-black">+91 8149191332</p>
                  </div>
                  <span role="img" aria-label="phone" className="text-yellow-500">📞</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* )} */}
      <CreateAccount isOpen={registration} close={closeRegistration} onSuccess={openPay}  />
      <PaymentModal closeModal={closePay} isOpen={IsPay}/>
      {/* <PayOption/> */}
    </>
  );
};

export default HealthCareSection;