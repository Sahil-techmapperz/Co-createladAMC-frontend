import React, { useState } from 'react';
import { FaBell } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import { RiMenu2Line } from "react-icons/ri";
import { FaFilter } from "react-icons/fa";
import { BiMenuAltLeft } from "react-icons/bi";
import Logo from "../../../assets/Logo1.png"; // Ensure this path is correct
import dashboardImg from "../../../assets/dashboard.png";
import openBook from "../../../assets/open-book 1 (1).png";
import planning from "../../../assets/planning 1.png";
import NoticeImage from "../../../assets/clipboard-outline.png";
import messageImg from "../../../assets/chat 1 (1).png";
import contact from "../../../assets/account-circle.png";
import walletImg from "../../../assets/text-box.png";
import { Link } from 'react-router-dom';
const Navbar = ({ Navtext }) => {
    const [showNotifications, setShowNotifications] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle for notifications panel
    const toggleNotifications = () => {
        setShowNotifications(!showNotifications);
    };

    // Toggle for mobile menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    // Define menu items in an array for easier management
    const menuItems = [
        { name: "Dashboard", path: "/clientDashboard", imgSrc: dashboardImg, altText: "Dashboard" },
        { name: "Session", path: "/clientIntroSession", imgSrc: openBook, altText: "Session" },
        { name: "Calendar", path: "/clientSnCalender", imgSrc: planning, altText: "Calender" }, // Corrected spelling
        { name: "Notice Board", path: "/clientNotice", imgSrc: NoticeImage, altText: "Notice Board" },
        { name: "Messages", path: "/chatMessage", imgSrc: messageImg, altText: "chatMessage" },
        { name: "My Account", path: "/clientMyAccount", imgSrc: contact, altText: "My Account" },
        { name: "My Wallet", path: "/clientMyWallet", imgSrc: contact, altText: "My Wallet" },
        // { name: "My Withdrawal", path: "/mywithdrawls", imgSrc: contact, altText: "My Account" },
    ];

    const liactivestyle = {
        backgroundColor: "#0078C5",
        border: "1px solid"
    };

    // Function to render each menu item
    const MenuItem = ({ item, liname, liactivestyle }) => (
        <li className={`pl-[5px] py-2 hover:bg-[#0078C5] hover:border-[1px] ${liname === item.altText ? 'active-class' : ''}`} style={liname === item.altText ? liactivestyle : {}}>
            <Link to={item.path} className='flex items-center gap-2'>
                <img className='w-5 h-5' src={item.imgSrc} alt={item.altText} />
                <span className='w-[max-content]'>{item.name}</span>
            </Link>
        </li>
    );





    return (
        <nav className='w-[98%] flex justify-between items-center bg-white py-4 px-6 shadow-md z-10 '>

            <div className='flex gap-5'>

                <div className='flex items-center gap-5'>
                <RiMenu2Line className='md:hidden text-blue-500 text-2xl cursor-pointer' onClick={toggleMenu} />
                    <img src={Logo} alt='logo' className='w-40 h-auto md:hidden' />
                    <h1 className='hidden md:block font-bold text-xl'>{Navtext}</h1>
                    <input
                        type="text"
                        placeholder='Search Here'
                        className='hidden md:block border-2 border-gray-300 py-1 px-2 rounded-md focus:outline-none focus:border-blue-500'
                    />
                </div>

                <div className='flex gap-5 max-sm:hidden'>
                    <div className='flex items-center justify-center gap-[5px]'>
                        <div className='text-blue-500'><FaFilter /></div>
                        <p className='flex items-center justify-center max-sm:hidden'>Advanced Search</p>
                    </div>
                    <div className='flex items-center justify-center gap-[5px] max-sm:hidden '>
                        <div className='text-blue-500 '>< BiMenuAltLeft className=' text-2xl' /></div>
                        <div className='flex gap-[5px]'>
                            <p>Sorting-</p>
                            <select>
                                <option value="option1">Top Mentor</option>
                                <option value="option2">Mentor 1</option>
                                <option value="option3">Mentor 2</option>
                                {/* <!-- Add more options as needed --> */}
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex items-center gap-4'>
                <IoMdSettings className='hidden md:block text-blue-500 text-2xl cursor-pointer' />

                <div className='relative'>
                    <div onClick={toggleNotifications} className='cursor-pointer'>
                        <FaBell className='text-blue-500 text-2xl' />
                        <div className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5'>
                            3
                        </div>
                    </div>
                    {showNotifications && (
                        <div className='absolute z-20 top-full mt-2 right-0 bg-white shadow-lg rounded-lg w-48 py-2'>
                            <p className='text-gray-700 text-sm px-4'>Your notifications go here.</p>
                        </div>
                    )}
                </div>

                <IoLogOutOutline className='text-red-500 text-2xl cursor-pointer' />
            </div>

            {isMenuOpen && (
                <div className='md:hidden z-30 flex flex-col absolute top-0 left-0 w-[50vw] h-[100vh] bg-white shadow-md py-2'>
                    <span onClick={toggleMenu} class="close-button cursor-pointer text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-xl p-1.5 ml-auto inline-flex items-center" >&times;</span>
                    <ul className='flex flex-col gap-2'>
                        {menuItems.map(item => (
                            <MenuItem key={item.name} item={item} liname={Navtext} liactivestyle={liactivestyle} />
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;