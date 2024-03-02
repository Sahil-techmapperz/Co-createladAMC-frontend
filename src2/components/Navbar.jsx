import React, { useState } from 'react';
import { FaBell } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import { RiMenu2Line } from "react-icons/ri";
import Logo from "../assets/Logo1.png";
import { Link } from 'react-router-dom';
import "./../CSS/Navbar.css";
import Profile from "../assets/web.png";
import dashboardImg from "../assets/dashboard.png";
import openBook from "../assets/open-book 1 (1).png";
import planning from "../assets/planning 1.png";
import NoticeImage from "../assets/clipboard-outline.png";
import messageImg from "../assets/chat 1 (1).png";
import contact from "../assets/account-circle.png";
import walletImg from "../assets/text-box.png";

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




    // Function to open the logout modal
    function showLogoutModal() {
        var modal = document.getElementById('logoutModal');
        modal.style.display = "block";

        // Get the elements
        var closeButton = document.getElementsByClassName("close-button")[0];
        var logoutConfirm = document.getElementById("logoutConfirm");
        var logoutCancel = document.getElementById("logoutCancel");

        // When the user clicks on <span> (x), close the modal
        closeButton.onclick = function () {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        // Confirm logout
        logoutConfirm.onclick = function () {
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            window.location.href = '/login';
        }

        // Cancel logout
        logoutCancel.onclick = function () {
            modal.style.display = "none";
        }
    }

    // Define menu items in an array for easier management
    const menuItems = [
        { name: "Dashboard", path: "/", imgSrc: dashboardImg, altText: "Dashboard" },
        { name: "Session", path: "/session", imgSrc: openBook, altText: "Session" },
        { name: "Calendar", path: "/calender", imgSrc: planning, altText: "Session Calendar" }, // Corrected spelling
        { name: "Notice Board", path: "/NoticeBoard", imgSrc: NoticeImage, altText: "Notice Board" },
        { name: "Messages", path: "/chatMessage", imgSrc: messageImg, altText: "Messages" },
        { name: "My Account", path: "/Myaccounts", imgSrc: contact, altText: "My Account" },
        { name: "My Wallet", path: "/MyWallet", imgSrc: contact, altText: "My Account" },
        { name: "My Withdrawal", path: "/mywithdrawls", imgSrc: contact, altText: "My Account" },
    ];

    // Function to render each menu item
    const MenuItem = ({ item, liname, liactivestyle }) => (
        <li className={`pl-[5px] py-2 hover:bg-[#0078C5] hover:border-[1px] ${liname === item.name ? 'active-class' : ''}`} style={liname === item.name ? liactivestyle : {}}>
            <Link to={item.path} className='flex items-center gap-2'>
                <img className='w-5 h-5' src={item.imgSrc} alt={item.altText} />
                <span className='w-[max-content]'>{item.name}</span>
            </Link>
        </li>
    );


    const liactivestyle = {
        backgroundColor: "#0078C5",
        border: "1px solid"
    };


    // Call this function instead of directly calling logout
    // For instance, from a logout button: <button onclick="showLogoutModal()">Log Out</button>


    return (
        <nav className='w-full flex justify-between items-center bg-white py-4 px-6 shadow-md z-10 '>
            <div className='flex items-center'>
                <RiMenu2Line className='md:hidden text-blue-500 text-2xl cursor-pointer' onClick={toggleMenu} />
                <img src={Logo} alt='logo' className='w-40 h-auto md:hidden' />
                <h1 className='hidden md:block font-bold text-xl'>{Navtext}</h1>
                <input
                    type="text"
                    placeholder='Search Here'
                    className='hidden md:block border-2 border-gray-300 py-1 px-2 ml-4 rounded-md focus:outline-none focus:border-blue-500'
                />
            </div>

            <div className='flex items-center gap-4'>
                <Link to={"/Myaccounts"}> <IoMdSettings className='hidden md:block text-blue-500 text-2xl cursor-pointer' /></Link>

                <div className='relative'>
                    <div onClick={toggleNotifications} className='cursor-pointer'>
                        <FaBell className='text-blue-500 text-2xl' />
                        <div className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5'>
                            3
                        </div>
                    </div>
                    {showNotifications && (
                        <div className='z-50 absolute top-full mt-2 right-0 bg-white shadow-lg rounded-lg w-48 py-2'>
                            <p className='text-gray-700 text-sm px-4'>Your notifications go here.</p>
                        </div>
                    )}
                </div>

                <IoLogOutOutline type='button' onClick={showLogoutModal} className='text-red-500 text-2xl cursor-pointer' />
            </div>



            <div id="logoutModal" class="modal hidden fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
                <div class="modal-content relative top-[0px] mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                    <div class="flex justify-between items-center mb-4">
                        <h2 class="text-lg font-bold text-gray-900">Log Out</h2>
                        <span class="close-button cursor-pointer text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-xl p-1.5 ml-auto inline-flex items-center" >&times;</span>
                    </div>
                    <p class="text-gray-700">Are you sure you want to logout?</p>
                    <div class=" mt-5 flex justify-between space-x-2">
                        <button id="logoutCancel" class="text-gray-500 bg-transparent font-bold uppercase px-4 py-2 text-sm outline-none focus:outline-none transition-all duration-150 w-[fit-content]" type="button" >
                            Cancel
                        </button>
                        <button id="logoutConfirm" class="bg-red-500 text-white font-bold uppercase text-sm px-4 py-2 rounded shadow hover:bg-red-600 focus:outline-none transition-all duration-150 w-[fit-content]" type="button" >
                            Yes, Log Out
                        </button>
                    </div>
                </div>
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
