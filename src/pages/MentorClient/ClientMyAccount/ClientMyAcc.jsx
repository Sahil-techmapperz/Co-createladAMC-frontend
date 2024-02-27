import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './clientMyAcc.css';
import Icon1 from '../../../assets/Icon (1).png';
import Icon2 from '../../../assets/Icon (2).png';
import Icon3 from '../../../assets/Icon (3).png';
// Ensure these icons are either imported or not used
// import Icon4 from '../../../assets/Icon (4).png';
import Icon5 from '../../../assets/Icon (5).png';
// import Icon6 from '../../../assets/Icon (6).png';
import Icon7 from '../../../assets/Icon (7).png';
import ClientSidebar from '../ClientSidebar/ClientSidebar.jsx'; // This is the imported ClientSidebar
import ClientNavbar from '../ClientNavbar/ClientNavbar.jsx';

const gridItems = [
    { icon: Icon1, heading: 'Personal info', description: 'Provide personal details and how we can reach you', link: "/PersonalInfo" },
    { icon: Icon1, heading: 'Login & security', description: 'Update your password and secure your account', link: "/LoginSecurity" },
    { icon: Icon2, heading: 'Payments & payouts', description: 'Review payments, payouts, coupons, and gift cards', link: "/mywithdrawls" },
    { icon: Icon3, heading: 'Notifications', description: 'Choose notification preferences and how you want to be contacted', link: "/NoticeBoard" },
    // Ensure references to Icon4 and Icon6 are valid if used
    { icon: Icon5, heading: 'Skills', description: 'Get professional tools if you manage several properties on Airbnb', link: "/Skills" },
    { icon: Icon7, heading: 'Delete Account', description: 'Add a work email for business trip benefits', link: "/DeleteAccount" }
];

const ClientMyAccount = () => { // Renamed to avoid conflict
    return (
        <div className='flex gap-2 h-[100vh] overflow-hidden'>
            <div className="max-sm:hidden">
                <ClientSidebar liname={"clientMyAccount"}/> {/* Ensure this is correct usage */}
            </div>
            <div className='myAccount_body py-[15px]'>
                <ClientNavbar Navtext={"My Account"} />
                <div className='m-[20px] text-[18px] font-[600]'>
                    <Link to={"/"}>Dashboard</Link> &gt; My Account
                </div>
                <div className='myAccount_main h-[75vh] p-[15px] my-[20px] grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-6 overflow-x-auto'>
                    {gridItems.map((item, index) => (
                        <div key={index} className='p-4'>
                            <Link to={item.link}>
                                <img src={item.icon} alt={item.heading} />
                                <p className={`my_account_main_heading ${item.heading === "Delete Account" ? 'text-red-600' : ''}`}>{item.heading}</p>
                                <p>{item.description}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClientMyAccount; // Export the newly named component
