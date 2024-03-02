import React, { useState } from 'react';
import Sidebar from './../../components/Sidebar';
import Navbar from './../../components/Navbar';
import PasswordChangeForm from '../../components/PasswordChangeForm';
import { Link } from 'react-router-dom';
const SecurityPage = () => {
    const [show, setShow] = useState(false);

    const handleShowPassword = () => {
        setShow(!show);
    };
    return (
        <div className='flex gap-[30px]  bg-gray-50'>
            <div className="hidden sm:block max-w-xs">
                <Sidebar liname={"My Account"} />
            </div>
            <div className=' overflow-hidden md:mr-[12px] w-full'>
                <Navbar Navtext={"Security"} />
                <div className='w-[100%] h-[90vh]  overflow-y-auto p-4 sm:p-6'>
                    <div className='m-[5px] text-[18px] font-[600]'>
                        <Link to={"/"}>Dashboard</Link> &gt; <Link to={"/Myaccounts"}>My Account</Link> &gt;  Security 
                    </div>
                    <div className='w-[100%] flex justify-end'>
                        <button onClick={handleShowPassword} className="px-4 py-2 bg-blue-500 text-white rounded-md w-[fit-content]">
                            Change Password
                        </button>
                    </div>
                    {show && <PasswordChangeForm onClose={() => setShow(false)} />}
                    <h1 className='text-2xl font-bold text-gray-900 mb-4'>Our Commitment to Security</h1>
                    <p className='mb-4'>
                        We understand the importance of keeping your data secure and are committed to ensuring the safety and protection of our users' information. Below are some of the key security measures we have in place.
                    </p>
                    <h2 className='text-xl font-semibold text-gray-800 mt-8 mb-2'>Data Encryption</h2>
                    <p className='mb-4'>
                        All data transmitted between your device and our servers is encrypted using industry-standard encryption protocols. This includes personal information, payment details, and any other sensitive data.
                    </p>
                    <h2 className='text-xl font-semibold text-gray-800 mt-8 mb-2'>Regular Security Audits</h2>
                    <p className='mb-4'>
                        Our team conducts regular security audits to identify and remedy any potential vulnerabilities in our system to prevent security breaches.
                    </p>
                    <h2 className='text-xl font-semibold text-gray-800 mt-8 mb-2'>Access Control</h2>
                    <p>
                        We enforce strict access controls to ensure that only authorized personnel can access user data for legitimate purposes, such as customer support and system maintenance.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SecurityPage;
