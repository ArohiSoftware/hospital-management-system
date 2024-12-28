// src/CustomNavbar.jsx
import React, { useState } from "react";
import Logo from "../../assets/images/AarohiLogo.png";
import CreateAccount from "../Registation/CreateAccount";
import Login from "../Registation/Login";
import PaymentModal from "../Registation/PaymentPage";
import PayOption from "../Payment/PayOption";

const CustomNavbar = () => {
  const [registration, setRegistration] = useState(false); // Renamed state
  const [login, setLogin] = useState(false); // Renamed state
  const [IsPay, setPay] = useState(false);

  const openLogin = () => {
    setLogin(true);
  };

  const closeLogin = () => {
    setLogin(false);
    reset();
  };

  const openRegistration = () => {
    setRegistration(true);
  };
  const closeRegistration = () => {
    setRegistration(false);
    reset();
  };

  const openPay = () => {
    setRegistration(false);
    setLogin(false);
    setPay(true);
  };

  const closePay = () => {
    setPay(false);
  };

  return (
    <>
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="flex items-center">
          <img src={Logo} alt="Hospital Logo" className="h-20 w-20" />
        </a>

        {/* Toggle Button for Mobile */}
        <button
          className="block lg:hidden text-gray-800 focus:outline-none"
          aria-label="Toggle Menu"
          onClick={() =>
            document.getElementById("menu").classList.toggle("hidden")
          }
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Menu Items */}
        <div className="hidden lg:flex lg:items-center lg:space-x-10" id="menu">
          <a
            href="#home"
            className="text-green-600 hover:text-green-700 no-underline text-xl font-bold"
          >
            Home
          </a>
          <br />
          <div className="relative group">
            <button className="text-gray-700 hover:text-gray-900 flex items-center mt-6 font-bold text-xl">
              Services
              <svg
                className="ml-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.292 7.292a1 1 0 011.415 0L10 10.586l3.293-3.294a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Dropdown */}
            <br />
            <ul className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded">
              <li>
                <a
                  href="#service1"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 no-underline w-40  font-bold"
                >
                  Service 1
                </a>
              </li>
              <li>
                <a
                  href="#service2"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 no-underline font-bold"
                >
                  Service 2
                </a>
              </li>
              <li>
                <a
                  href="#service3"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 no-underline font-bold"
                >
                  Service 3
                </a>
              </li>
            </ul>
          </div>
          <a
            href="#doctors"
            className="text-gray-700 hover:text-gray-900 no-underline font-bold text-xl"
          >
            Doctors
          </a>
          <br />
          <br />
          <a
            href="#about"
            className="text-gray-700 hover:text-gray-900 no-underline font-bold text-xl"
          >
            About us
          </a>
          <br />
          <br />
          <a
            href="#contact"
            className="text-gray-700 hover:text-gray-900 no-underline font-bold text-xl"
          >
            Contact us
          </a>
          <br />
          <br />
        </div>

        {/* Sign in - Sign Up Buttons */}
        <div className="hidden lg:flex lg:items-center lg:space-x-2">
          <button
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-200 text-xl"
            onClick={openLogin}
          >
            Sign in
          </button>
          <button
            className="border border-green-900 text-green-600 px-6 py-2 rounded-md hover:bg-green-700 text-xl"
            onClick={openRegistration}
          >
            Sign up
          </button>
        </div>
      </div>
      <CreateAccount
        isOpen={registration}
        close={closeRegistration}
        onSuccess={openPay}
      />
     {  login && <Login isOpen={login} close={closeLogin} onSuccess={openPay} />}
      <PaymentModal closeModal={closePay} isOpen={IsPay} />
      {/* <PayOption /> */}
    </>
  );
};

export default CustomNavbar;
