import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const HelpSupportPage = () => {
    return (
        <div className='flex gap-[30px]'>
            <div className="hidden sm:block">
                <Sidebar liname={"Help & Support"} />
            </div>
            <div className='flex flex-col w-full h-[100vh] overflow-y-hidden py-[15px]'>
                <Navbar Navtext={"Help & Support"} />
                <div className='m-[10px] text-[18px] font-[600]'>
                    <Link to={"/"}>Dashboard</Link> &gt; Help & Support
                </div>
                <div className='p-4 h-[80vh] overflow-x-auto'>
                    <div className="min-h-screen bg-gray-100">
                        <div className=" mx-auto">
                            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                                <div className="px-4 py-5 sm:px-6">
                                    <h2 className="text-lg leading-6 font-medium text-gray-900">How can we help you?</h2>
                                </div>
                                <div className="border-t border-gray-200">
                                    <dl>
                                        {/* FAQ Item 1 */}
                                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">Question 1</dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                Here is the answer to question 1.
                                            </dd>
                                        </div>
                                        {/* FAQ Item 2 */}
                                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">Question 2</dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                Here is the answer to question 2.
                                            </dd>
                                        </div>
                                        {/* FAQ Item 3 */}
                                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">Question 3</dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                Detailed answer to question 3 goes here. You can add as much text as needed, including links to other resources or contact information for direct support.
                                            </dd>
                                        </div>
                                        {/* FAQ Item 4 */}
                                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">Question 4</dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                Answer to question 4. This could be a common issue or question that many users have, providing them with immediate assistance.
                                            </dd>
                                        </div>
                                        {/* Add more FAQ items as needed */}
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

export default HelpSupportPage;
