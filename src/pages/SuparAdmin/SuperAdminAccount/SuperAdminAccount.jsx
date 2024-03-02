import React from 'react'
import './superAdminAccount.css';
import Icon1 from '../../../assets/Icon (1).png';
import Icon2 from '../../../assets/Icon (2).png';
import Icon3 from '../../../assets/Icon (3).png';
import Icon4 from '../../../assets/Icon (4).png';
import Icon5 from '../../../assets/Icon (5).png';
import Icon6 from '../../../assets/Icon (6).png';
import Icon7 from '../../../assets/Icon (7).png';
import Icon8 from '../../../assets/Icon.png';
// import MobileNav from '../../components/Mobile/MobileNav.jsx';
import { Link } from 'react-router-dom';
import SuperAdminSide from '../SuperAdminSide/SuperAdminSide';
import SuperAdminNavbar from '../SuperAdminNav/SuperAdminNav';

const gridItems = [
    { icon: Icon8, heading: 'Personal info', description: 'Provide personal details and how we can reach you', link: "/PersonalInfo" },
    { icon: Icon1, heading: 'Login & security', description: 'Update your password and secure your account', link: "/LoginSecurity" },
    { icon: Icon2, heading: 'Payments & payouts', description: 'Review payments, payouts, coupons, and gift cards', link: "/mywithdrawls" },
    { icon: Icon3, heading: 'Notifications', description: 'Choose notification preferences and how you want to be contacted', link: "/NoticeBoard" },
    // { icon: Icon4, heading: 'Privacy & sharing', description: 'Manage your personal data, connected services, and data sharing settings', link: "/PrivacySharing" },
    { icon: Icon5, heading: 'Skills', description: 'Get professional tools if you manage several properties on Airbnb', link: "/Skills" },
    // { icon: Icon6, heading: 'Services To Provide', description: 'Set your default language, currency, and timezone', link: "/ServicesProvide" },
    { icon: Icon7, heading: 'Delete Account', description: 'Add a work email for business trip benefits', link: "/DeleteAccount" }
];


const SuperAdminAccount = () => {
    return (
        <div className='flex gap-[30px] bg-gray-100 h-[100vh] overflow-hidden bg-gray-100'>
            <div className="max-sm:hidden ">
                <SuperAdminSide liname={"My Account"} />
            </div>
            <div className='myAccount_body mr-[12px] '>
                <SuperAdminNavbar Navtext={"My Account"} />
                <p className='font-bold mt-[10px]'>My Account</p>
                {/* <div className='m-[20px] text-[18px] font-[600]'>
                    <Link to={"/"}>Dashboard</Link> &gt; My Account
                </div> */}
                <div className='myAccount_main h-[75vh] p-[8px] my-[20px] grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-6 overflow-x-auto'> {/* Adjust grid layout here */}
                    {gridItems.map((item, index) => (
                        <div key={index} className='p-4 h-[200px]'>
                            <Link to={item.link}>
                                <img src={item.icon} alt={item.heading} className={`mt-[15px] text-sm`} />
                                <p className={`my_account_main_heading mt-[15px] text-sm ${item.heading == "Delete Account" && 'text-red-600 '}`} >{item.heading}</p>
                                <p className='mt-[20px] text-sm text-gray-600'>{item.description}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SuperAdminAccount
