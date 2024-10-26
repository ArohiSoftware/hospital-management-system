import React, { useState } from "react";
import Logo from "../IMAGE/ArohiLogo.png";

const Menu = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const menuItems = [
    { icon: 'fa-solid fa-house', label: 'Dashboard' },
    { icon: 'fa-solid fa-clipboard', label: 'Appointment ' },
    { icon: 'fa-solid fa-chart-simple', label: 'Tables' },
    { icon: 'fa-brands fa-slack', label: 'Articles' },
    { icon: 'fa-solid fa-user', label: 'Profile' },
    { icon: 'fa-solid fa-lock', label: 'Logout' },
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <ul className="list-none flex flex-col items-start w-full"> 
      {menuItems.map((item, index) => (
        <li
          key={index}
          className={`flex items-center p-4 w-full cursor-pointer text-2xl transition-colors duration-300 hover:bg-orange-400 hover:text-white
          ${activeIndex === index ? 'bg-orange-500 text-white' : ''}`}
          onClick={() => handleClick(index)}
        >
          <i className={`${item.icon} mr-2 ${activeIndex === index ? 'text-white' : ''}`}></i>
          {item.label}
        </li>
      ))}
    </ul>
  );
};

const Sidebar = () => {
  return (
    <div className="fixed left-5 pr-10 bg-white top-3 w-85 bg-transparent h-[60vh] flex flex-col  items-start m-5 mt-7  shadow-md rounded-xl"> 
      <div className="pl-10 flex justify-center w-full pt-5">
        <img src={Logo} alt="Hospital Logo" className="h-20 w-20 " />
      </div>
      <div className="pl-20 pt-10">
        <Menu />
      </div>
    </div>
  );
};

export default Sidebar;
