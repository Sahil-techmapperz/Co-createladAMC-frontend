import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiChevronDown, BiMenu } from "react-icons/bi"; // Import BiMenu for the toggle button

import Logo from "../../../assets/Logo1.png";
import Profile from "../../../assets/web.png";
import dashboardImg from "../../../assets/dashboard.png";
import openBook from "../../../assets/open-book 1 (1).png";
import planning from "../../../assets/planning 1.png";
import NoticeImage from "../../../assets/clipboard-outline.png";
import messageImg from "../../../assets/chat 1 (1).png";
import contact from "../../../assets/account-circle.png";
import walletImg from "../../../assets/text-box.png";
import { BiSupport } from "react-icons/bi";
import { AiOutlineMessage } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";
import { FaRegCalendarDays } from "react-icons/fa6";
import { IoMdClipboard } from "react-icons/io";
import { HiUserGroup } from "react-icons/hi2";
import { TbFileReport } from "react-icons/tb";

const SuperAdminSide = ({ liname }) => {
    const [showWalletDropdown, setShowWalletDropdown] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility on mobile

    const toggleWalletDropdown = () => {
        setShowWalletDropdown(!showWalletDropdown);
    };

    const toggleSidebar = () => { // Function to toggle sidebar visibility
        setIsSidebarOpen(!isSidebarOpen);
    };

    const liactivestyle = {
        backgroundColor: "#0078C5",
        border: "1px solid"
    };

    return (
        <>
            {/* Mobile view menu button */}
            <div className="text-white fixed top-0 right-0 p-4 z-50 lg:hidden">
                <BiMenu className="w-6 h-6" onClick={toggleSidebar} />
            </div>

            {/* Sidebar */}
            <div className={`min-h-screen overflow-y-auto ${isSidebarOpen ? 'w-[13rem]' : 'w-0'} lg:w-[13rem] text-white flex flex-col justify-between transition-width duration-300`}>

                {/* Sidebar content */}
                <div className={`${isSidebarOpen ? 'block' : 'hidden'} lg:block`}>
                    <div>
                        <Link to={"/superAdminDashboard"}>
                            <img className='md:min-h-[10vh] w-full mx-auto object-contain' src={Logo} alt="Website Logo" />
                        </Link>
                    </div>

                    <div className='min-h-[90vh] rounded-[8px] relative' style={{ background: 'linear-gradient(176.83deg, #52E7CF 0.29%, #0096F6 3.41%, #1DB3E8 57.31%, #52E7CF 85.81%)' }}>
                        {/* Profile and dropdown */}
                        <div className='flex justify-center items-center  gap-2 py-2'>
                            <Link to={"/PersonalInfo"}>
                                <img className='w-10 h-10  rounded-full object-cover' src={Profile} alt="Profile" />
                            </Link>
                            <div>
                                <select
                                    className="bg-transparent w-[150px] text-white cursor-pointer text-sm font-medium "
                                    defaultValue="Jhon Das"
                                >
                                    <option className='text-[black]' value="/Jhon Das" >Jhon Das</option>
                                    <option className='text-[black]' value="/PersonalInfo">Profile</option>
                                    <option className='text-[black]' value="/settings">Settings</option>
                                    <option className='text-[black]' value="/logout">Logout</option>
                                </select>
                            </div>
                        </div>

                        <hr className="bg-[#FFFFFF] mb-3"></hr>

                        {/* Navigation */}
                        <ul className='flex flex-col gap-2'>
                            <li style={liname == "Super Amin Dashboard" ? liactivestyle : {}} className='px-4 py-2 hover:bg-[#0078C5] hover:border-[1px]'>
                                <Link to='/superAdminDashboard' className='flex items-center gap-2'>
                                    <img className='w-5 h-5' src={dashboardImg} alt="Dashboard" />
                                    <span className='w-[max-content]'>Dashboard</span>
                                </Link>
                            </li>
                            <li style={liname == "Super Admin Table" ? liactivestyle : {}} className='px-4 py-2 hover:bg-[#0078C5] hover:border-[1px]'>
                                <Link to='/superAdminUserTable' className='flex items-center gap-2'>
                                    {/* <img className='w-5 h-5' src={openBook} alt="Session" /> */}
                                    <HiUserGroup />
                                    <span className='w-[max-content]'>Manage Users</span>
                                </Link>
                            </li>
                            <li style={liname == "Issue Reported" ? liactivestyle : {}} className='px-4 py-2 hover:bg-[#0078C5] hover:border-[1px]'>
                                <Link to='/superAdminIssueReport' className='flex items-center gap-2'>
                                <TbFileReport />
                                    {/* <img className='w-5 h-5' src={planning} alt="Session Calender" /> */}
                                    <span className='w-[max-content]'>Issue Reported</span>
                                </Link>
                            </li>

                            <li style={liname == "Messages" ? liactivestyle : {}} className='px-4 py-2 hover:bg-[#0078C5] hover:border-[1px]'>
                                <Link to='' className='flex items-center gap-2'>
                                    {/* <img className='w-5 h-5' src={messageImg} alt="Messages" /> */}
                                    <AiOutlineMessage />
                                    <span className='w-[max-content]'>Messages</span>
                                </Link>
                            </li>

                            <li style={liname == "My Account" ? liactivestyle : {}} className='px-4 py-2 hover:bg-[#0078C5] hover:border-[1px]'>
                                <Link to='/superAdminAccount' className='flex items-center gap-2'>
                                    {/* <img className='w-5 h-5' src={contact} alt="My Account" /> */}
                                    <IoMdContact />
                                    <span className='w-[max-content]'>My Account</span>
                                </Link>
                            </li>
                            <li style={liname == "Notice Board" ? liactivestyle : {}} className='px-4 py-2 hover:bg-[#0078C5] hover:border-[1px]'>
                                <Link to='/superAdminNoticeBoard' className='flex items-center gap-2'>
                                    {/* <img className='w-5 h-5' src={NoticeImage} alt="Notice Board" /> */}
                                    <IoMdClipboard />
                                    <span className='w-[max-content]'>Notice Board</span>
                                </Link>
                            </li>
                        </ul>

                        {/* Help & Support */}
                        <div className='absolute bottom-3 pl-4 py-4 text-[#0078C5] font-[600]'>
                            <Link to="/" className='flex items-center gap-2'>
                                <BiSupport />
                                <span className='w-[max-content]'>Help & Support</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SuperAdminSide;
