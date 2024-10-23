import React from "react";
import notification from '../IMAGE/notifications_none.png';
import darkmode from '../IMAGE/moon-solid 1.png';
import about from '../IMAGE/info_outline.png';
import Doctor from '../IMAGE/dr.png';

const Header = () => {
  return (
    <header className="flex w-full ">
      <div className="w-full flex justify-between items-center">
      <div className="w-1/8">
      </div>
      <div>

      </div>
      <h1 className="text-xl font-bold max-w-7xl "> 
            Welcome, <span className="text-orange-600">Dr. Robert Harry</span>
          </h1>


<div className="w-9/10 flex justify-between items-center p-4">
  
          
          {/* OPD and IPD section */}
          <ul className="flex justify-center items-center space-x-4">
            <li className="pl-5 pr-5 p-3 hover:bg-green-500 cursor-pointer rounded-full bg-gray-300 text-sm">
              OPD
            </li>
            <li className="pl-5 pr-5 p-3 hover:bg-green-500 cursor-pointer rounded-full  bg-green-200 text-sm">
              IPD
            </li>
          </ul>
        </div>

        {/* Right section: Search bar and icons */}
        <nav className="flex items-center space-x-6">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-200 rounded-full px-3 py-1 outline-none text-lg hidden md:block"
          />
          <img src={notification} alt="Notification Bell" className="w-6 h-6 cursor-pointer" />
          <img src={darkmode} alt="Dark Mode Toggle" className="w-6 h-6 cursor-pointer" />
          <img src={about} alt="Information" className="w-6 h-6 cursor-pointer" />

          {/* Doctor Avatar */}
          <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
            <img src={Doctor} alt="Doctor Avatar" className="rounded-full w-8 h-8" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
