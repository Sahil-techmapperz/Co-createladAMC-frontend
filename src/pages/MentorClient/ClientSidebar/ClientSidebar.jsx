import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiChevronDown } from "react-icons/bi";
import Logo from "../../../assets/Logo1.png";
import Profile from "../../../assets/web.png";
import dashboardImg from "../../../assets/dashboard.png";
import openBook from "../../../assets/open-book 1 (1).png";
import planning from "../../../assets/planning 1.png";
import NoticeImage from "../../../assets/clipboard-outline.png";
import messageImg from "../../../assets/chat 1 (1).png";
import contact from "../../../assets/account-circle.png";
import walletImg from "../../../assets/text-box.png";
import withdrallImg from "../../../assets/receipt-outline.png";
import { BiSupport } from "react-icons/bi";

const ClientSidebar = () => {
    const [showWalletDropdown, setShowWalletDropdown] = useState(false);

    const toggleWalletDropdown = () => {
        setShowWalletDropdown(!showWalletDropdown);
    };

    return (
        <div className='min-h-screen  w-64  text-white flex flex-col justify-between'>
            <div className='py-[10px]'>
                <Link to={"/"}>
                    <img className=' w-full mx-auto' src={Logo} alt="Website Logo" />
                </Link>
            </div>

            <div className='h-[90vh] rounded-[8px]' style={{ background: 'linear-gradient(176.83deg, #52E7CF 0.29%, #0096F6 3.41%, #1DB3E8 57.31%, #52E7CF 85.81%)' }}>
                <div className='flex items-center pt-3 px-5 gap-2 mb-5'>
                    <Link to={"/PersonalInfo"}>
                        <img className='w-10 h-10 rounded-[50%]' src={Profile} alt="Profile" />
                    </Link>
                    <div>
                        <select
                            className="bg-transparent text-white cursor-pointer text-sm font-medium p-2 px-4 pl-[20px]" // Added padding with p-2
                            defaultValue="Jhon Das" // Control the initial selection with defaultValue
                        >
                            <option className='text-[black]' value="/Jhon Das" >Jhon Das</option>
                            <option className='text-[black]' value="/PersonalInfo">Profile</option>
                            <option className='text-[black]' value="/settings">Settings</option>
                            <option className='text-[black]' value="/logout">Logout</option>
                        </select>
                    </div>
                </div>

                <ul className='flex flex-col gap-4'>
                    <li className='px-5 py-2 hover:bg-gray-700'>
                        <Link to='/' className='flex items-center gap-2'>
                            <img className='w-5 h-5' src={dashboardImg} alt="Dashboard" />
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li className='px-5 py-2 hover:bg-gray-700'>
                        <Link to='/session' className='flex items-center gap-2'>
                            <img className='w-5 h-5' src={openBook} alt="Session" />
                            <span>Session</span>
                        </Link>
                    </li>
                    <li className='px-5 py-2 hover:bg-gray-700'>
                        <Link to='/calender' className='flex items-center gap-2'>
                            <img className='w-5 h-5' src={planning} alt="Session Calender" />
                            <span>Session Calender</span>
                        </Link>
                    </li>
                    <li className='px-5 py-2 hover:bg-gray-700'>
                        <Link to='/NoticeBoard' className='flex items-center gap-2'>
                            <img className='w-5 h-5' src={NoticeImage} alt="Notice Board" />
                            <span>Notice Board</span>
                        </Link>
                    </li>
                    <li className='px-5 py-2 hover:bg-gray-700'>
                        <Link to='/chatMessage' className='flex items-center gap-2'>
                            <img className='w-5 h-5' src={messageImg} alt="Messages" />
                            <span>Messages</span>
                        </Link>
                    </li>
                    <li className='px-5 py-2 hover:bg-gray-700'>
                        <Link to='/Myaccounts' className='flex items-center gap-2'>
                            <img className='w-5 h-5' src={contact} alt="My Account" />
                            <span>My Account</span>
                        </Link>
                    </li>
                    <li className='px-5 py-2 cursor-pointer'>
                        <span className='flex items-center gap-2 cursor-pointer' onClick={toggleWalletDropdown}>
                            <img className='w-5 h-5' src={walletImg} alt="My Wallet" />
                            <span>My Wallet</span>
                            <BiChevronDown className="w-5 h-5" />
                        </span>
                        {showWalletDropdown && (
                            <ul className='flex flex-col gap-2'>
                                <Link to={"/MyWallet"}>
                                    <li className='px-5 hover:bg-gray-700'>
                                        Wallet
                                    </li>
                                </Link>
                            </ul>
                        )}
                    </li>
                </ul>
                <div className='px-5 py-4 text-[#0078C5] font-[600]'>
                    <Link to="/" className='flex items-center gap-2'>
                        <BiSupport />
                        <span>Help & Support</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ClientSidebar;