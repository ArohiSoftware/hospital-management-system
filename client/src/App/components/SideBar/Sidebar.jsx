import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../../assets/images/Aarohilogo.png";
import { useDispatch } from "react-redux";

const Menu = ({ menuItems }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  // Initialize activeIndex from localStorage or default to 0
  const [activeIndex, setActiveIndex] = useState(null);
  useEffect(() => {
    const pathSegments = location.pathname.split('/').filter(Boolean); // Remove any empty strings
    
    const currentIndex = menuItems.findIndex(item =>
      pathSegments.some(segment => item.path.includes(segment))
    );
    
    setActiveIndex(currentIndex !== -1 ? currentIndex : 0);
  }, [location.pathname, menuItems]);

  const handleClick = (index, path) => {
    setActiveIndex(index);
   if(menuItems[index].label==='Logout')
   {
    
   }
    navigate(path);
  };
  return (
    <ul className="space-y-2">
      {menuItems?.map((item, index) => (
        <li
          key={index}
          className={`flex items-center p-4 cursor-pointer text-sm text-gray-800 dark:text-gray-300 rounded-lg transition-colors duration-300
            ${activeIndex === index ? 'bg-orange-500 text-white dark:text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-500'}
          `}  
          onClick={() => handleClick(index, item.path)}
        >
          <i className={`${item.icon} mr-3 ${activeIndex === index ? 'text-white' : 'text-gray-500 dark:text-gray-300'}`}></i>
          {item.label}
        </li>
      ))}
    </ul>
  );
};

const Sidebar = ({ menuItems }) => {
  return (
    <div className="w-64 bg-white h-full shadow-lg flex flex-col p-6 rounded-lg dark:bg-gray-700">
      <div className="flex justify-center mb-6">  
        <img src={Logo} alt="Hospital Logo" className="h-20 w-20" />
      </div>
      <Menu menuItems={menuItems} />
    </div>
  );
};

export default Sidebar;
