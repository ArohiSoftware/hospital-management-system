import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import notification from "../../assets/images/notifications_none.png";
import darkmode from "../../assets/images/moon-solid_1.png";
import lightmode from "../../assets/images/sun-solid.png";
import about from "../../assets/images/info_outline.png";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getprofile } from "../../redux/actions/StaffProfileAction";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedSection, setSelectedSection] = useState(null);

  // State for dark mode
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage for theme preference or fallback to system preference
    return (
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  // Apply theme on initial load
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const pathSegments = location.pathname.split('/').filter(Boolean);

    const keywords = ["IPD", "OPD", "DASHBOARD"];
    const matchedKeyword = keywords.find(keyword =>
      pathSegments.some(segment => segment.toLowerCase() === keyword.toLowerCase())
    );
    setSelectedSection(matchedKeyword || null);
  }, [location.pathname]);

  const handleClick = (section) => {
    setSelectedSection(section);
    navigate(`/${section.toLowerCase()}`);
  };

  return (
    <header className="flex justify-between items-center py-2 px-10 mx-2 w-full rounded-t-lg">
      <h1 className="text-xl font-bold mx-8 dark:text-white">
        Welcome, <span className="text-red-500">Dr. Robert Harry</span>
      </h1>

      {/* OPD and IPD Section */}
      <div className="flex items-center space-x-2 mx-1">
        <button
          className={`px-5 py-2 font-semibold text-sm rounded-full transition-all duration-200 ${
            selectedSection === "OPD"
              ? "bg-green-400 text-white"
              : "bg-white hover:bg-green-400 hover:text-white dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-green-400 dark:hover:text-white"
          }`}
          onClick={() => handleClick("OPD")}
        >
          OPD
        </button>
        <button
          className={`px-5 py-2 font-semibold text-sm rounded-full transition-all duration-200 ${
            selectedSection === "IPD"
              ? "bg-green-400 text-white"
              : "bg-white hover:bg-green-400 hover:text-white dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-green-400 dark:hover:text-white"
          }`}
          onClick={() => handleClick("IPD")}
        >
          IPD
        </button>
        <button
          className={`px-5 py-2 font-semibold text-sm rounded-full transition-all duration-200 ${
            selectedSection === "DASHBOARD"
              ? "bg-green-400 text-white"
              : "bg-white hover:bg-green-400 hover:text-white dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-green-400 dark:hover:text-white"
          }`}
          onClick={() => handleClick("DASHBOARD")}
        >
          DASHBOARD
        </button>
      </div>

      {/* Search and Icons */}
      <div className="flex items-center space-x-4 bg-white p-2 rounded-full dark:bg-gray-800">
        <input
          type="text"
          placeholder="Search"
          className="px-3 py-2 bg-gray-200 rounded-full hidden md:block dark:bg-gray-600 dark:text-white"
        />
        <img
          src={notification}
          alt="Notification Bell"
          className="w-6 h-6 cursor-pointer"
        />
        {/* Dark Mode Toggle */}
        <img
          src={isDarkMode ? lightmode : darkmode}
          alt="Dark Mode Toggle"
          className="w-5 h-5 cursor-pointer"
          onClick={toggleDarkMode}
        />
        <img src={about} alt="Information" className="w-6 h-6 cursor-pointer" />



        <div className="w-10 h-10 px-[10px] py-2 font-bold text-white rounded-full  bg-red-600 overflow-hidden">
         <Link to='/dashboard/Myprofile'>
         {user ? (
              <h1 className=" mx-auto rounded-full ">
                {Userprofile ? `${Userprofile[0].toUpperCase()}${firstCharAfterSpace}` : "?"}
              </h1>
            ) : (
              <div className="w-6 h-6 rounded-full"></div>
            )}
          {/* <img src={Doctor} alt="Doctor Avatar" className="w-full h-full" /> */}
         </Link>
        </div>


      </div>
    </header>
  );
};

export default Navbar;