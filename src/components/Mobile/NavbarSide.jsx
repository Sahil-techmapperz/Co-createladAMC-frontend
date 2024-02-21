import React from "react";
import "./mobileNav.css"; // Ensure your CSS is set up to style these new elements
import { Link } from "react-router-dom";

const NavSidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={isOpen ? "sidebar open" : "sidebar"}>
      <button onClick={toggleSidebar}>Close</button>
      <ul className="grid-cols-2 ml-[20%]">

        <li className="font-bold text-base md:text-lg"><Link type='button' onClick={() => handleLinkClick()} to="/">Home</Link></li>
        <li className="font-bold text-base md:text-lg"><Link type='button' onClick={() => handleLinkClick()} to="">About</Link></li>


        <li className="relative group">
          <span className="font-bold text-base md:text-lg cursor-pointer">
            Offering
          </span>
          <ul className="absolute hidden bg-white p-4 space-y-2 border rounded-md group-hover:block w-[40vw] left-0">
            <li className="text-base">
              <Link type='button' onClick={() => handleLinkClick()} to="" className="block px-4 py-2 hover:bg-gray-400">Mentor Connect</Link>
            </li>
            <li className="text-base">
              <Link type='button' onClick={() => handleLinkClick()} to="" className="block px-4 py-2 hover:bg-gray-400">Investor Connect</Link>
            </li>
            <li className="text-base">
              <Link type='button' onClick={() => handleLinkClick()} to="" className="block px-4 py-2 hover:bg-gray-400">Grant Connect</Link>
            </li>
          </ul>
        </li>
        <li className="font-bold text-base md:text-lg"><Link type='button' onClick={() => handleLinkClick()} to="/grwothservice">Services</Link></li>
        <li className="font-bold text-base md:text-lg"><Link type='button' onClick={() => handleLinkClick()} to="/contact">Contact</Link></li>

        <li> <button className="border-2 font-bold border-black rounded-full w-[80px]">
          <Link type='button' onClick={() => handleLinkClick()} to="">Join Now</Link>
        </button>
        </li>
      </ul>
    </div>
  );
};

export default NavSidebar;