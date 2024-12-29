import React from "react";
import Sidebar from "../components/SideBar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";



const Ipd = () => {
  const menuItems = [
    { icon: 'fa-solid fa-user', label: 'Registration' ,path:''},
    { icon: 'fa-solid fa-clipboard', label: 'Appointment Request',path:'Appointment' },
    { icon: 'fa-solid fa-chart-simple', label: 'Treatment',path:'' },
    { icon: 'fa-brands fa-slack', label: 'Billing',path:'' },
    { icon: 'fa-solid fa-user', label: 'All Appointment' ,path:''},
    { icon: 'fa-solid fa-home', label: 'Dashboard' ,path:'/dashboard'},
    { icon: 'fa-solid fa-lock', label: 'Logout',path:'/' },
  ];
  return (
    <div className="max-h-screen min-h-screen bg-custom-gradient flex">
    {/* Sidebar */}
    <div className="bg-[#f8f7f78f] bg-opacity-70 shadow-lg rounded-xl border border-gray-200 w-full  max-w-full max-h-screen flex flex-row justify-start items-start mx-5 my-5 px-2 py-2">
    <Sidebar menuItems={menuItems}/>
    <div className="flex-1 flex flex-col max-h-full max-w-full  p-5">
      <Navbar/>

              <div className="flex-1 overflow-y-auto ">
          <Outlet />
        </div>
    </div>
    </div>
  </div>
  );
};

export default Ipd;
