import React, { useState } from 'react';
import Navbar from '../ClientNavbar/ClientNavbar';
import { Link } from 'react-router-dom';
import ClientSidebar from '../ClientSidebar/ClientSidebar';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Importing icons

const ClientHelpSupportPage = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className='flex gap-[30px]'>
            <div className="hidden sm:block">
                <ClientSidebar liname={"Help & Support"} />
            </div>
            <div className='flex flex-col w-full h-[100vh] overflow-y-hidden py-[15px]'>
                <Navbar Navtext={"Help & Support"} />
                <div className='m-[10px] text-[18px] font-[600]'>
                    <Link to={"/clientDashboard"}>Dashboard</Link> &gt; Help & Support
                </div>
                <div className='p-4 h-[80vh] overflow-x-auto'>
                    <div className=" bg-gray-100">
                        <div className="mx-auto">
                            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                                <div className="px-4 py-5 sm:px-6">
                                    <h2 className="text-lg leading-6 font-medium text-gray-900">How can we help you?</h2>
                                </div>
                                <div className="border-t border-gray-200">
                                    <dl>
                                        {[...Array(4)].map((_, index) => (
                                            <div key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} px-4 py-6 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6`}>
                                                <dt className="text-sm font-medium text-gray-500 cursor-pointer flex justify-between items-center" onClick={() => toggleFaq(index)}>
                                                    <span>Question {index + 1}</span>
                                                    {openFaq === index ? <FaChevronUp /> : <FaChevronDown />}
                                                </dt>
                                                {/* Adjusted answer layout */}
                                                <dd className={`mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-3 ${openFaq === index ? 'block' : 'hidden'}`}>
                                                    <p><strong>Ans:</strong> Here is the answer to question {index + 1}. You can customize this part.</p>
                                                </dd>
                                            </div>
                                        ))}
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientHelpSupportPage;
