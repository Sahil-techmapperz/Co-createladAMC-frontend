import React from 'react'
import { FaStar } from "react-icons/fa";
import Sidebar from '../../../components/Sidebar'
import ClientNavbar from '../ClientNavbar/ClientNavbar'
import { IoLocation } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
// import Photo1 from '../Assets/Rectangle 6.png'
import Photo1 from '../MentorAssets/Rectangle 6.png'
import './clientDashboard.css'
import MobileNav from '../../../components/Mobile/MobileNav';
import ClientSidebar from '../ClientSidebar/ClientSidebar';

const ClientDashboard = () => {
    return (
        <>
            <div className='flex'>
                <div className="max-sm:hidden ">
                    <ClientSidebar />
                </div>
                <div className='w-[100%] ml-[30px]'>
                    <div className="sm:hidden  ml-[10px]">  <MobileNav /> </div>
                    <div className='max-sm:hidden'>
                        <ClientNavbar Navtext={"Dashboard"} />
                    </div>

                    <div className='flex justify-between mt-[60px] p-[20px]'>
                        <h1 className='text-xl  font-bold'>Top Mentor</h1>
                        <h1 className=' text-blue-500 font-bold'>View Menu</h1>
                    </div>

                    <div >
                        <div className='grid grid-cols-4 gap-[15px] p-[10px] topMentor' >
                            <div className='border-black  shadow rounded-md topMentorTc'>
                                <div className='flex justify-center items-center mt-[10px]  '><img src={Photo1} /></div>
                                <div className='p-[10px]'>
                                    <h1 className='text-base font-bold'>Lincoln Siphron</h1>
                                    <p className='text-xs'>Computer Programming</p>

                                    <div className='flex justify-between'>
                                        <ul className='flex gap-[18px]'>
                                            <li className='flex justify-center items-center'>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </li>
                                            <li className='text-xs'>4.9 Rating</li>

                                            <li className='text-xs font-bold text-blue-500'>CCL400</li>
                                            <li className='text-xs font-bold'>CC<del>L480</del></li>
                                        </ul>
                                    </div>
                                    <div className='flex justify-between mt-[10px]'>
                                        <ul className='flex gap-[10px]'>
                                            <li className='flex justify-center items-center'><IoLocation /></li>
                                            <li className='text-xs'>Paris,France</li>
                                        </ul>
                                        <ul className='flex gap-[5px]'>
                                            <li className='flex justify-center items-center'><IoMdContact /></li>
                                            <li className='text-xs'>412 Student </li>
                                        </ul>
                                    </div>

                                </div>
                                <button className='text-center text-white fo flex justify-center items-center bg-00c875  h-[60px] knowMore '><u >Know More</u></button>

                            </div>

                            <div className='border-black  shadow rounded-md topMentorTc'>
                                <div className='flex justify-center items-center mt-[10px]  '><img src={Photo1} /></div>
                                <div className='p-[10px]'>
                                    <h1 className='text-base font-bold'>Lincoln Siphron</h1>
                                    <p className='text-xs'>Computer Programming</p>

                                    <div className='flex justify-between'>
                                        <ul className='flex gap-[18px]'>
                                            <li className='flex justify-center items-center'>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </li>
                                            <li className='text-xs'>4.9 Rating</li>

                                            <li className='text-xs font-bold text-blue-500'>CCL400</li>
                                            <li className='text-xs font-bold'>CC<del>L480</del></li>
                                        </ul>
                                    </div>
                                    <div className='flex justify-between mt-[10px]'>
                                        <ul className='flex gap-[10px]'>
                                            <li className='flex justify-center items-center'><IoLocation /></li>
                                            <li className='text-xs'>Paris,France</li>
                                        </ul>
                                        <ul className='flex gap-[5px]'>
                                            <li className='flex justify-center items-center'><IoMdContact /></li>
                                            <li className='text-xs'>412 Student </li>
                                        </ul>
                                    </div>

                                </div>
                                <button className='text-center text-white fo flex justify-center items-center bg-00c875  h-[60px] knowMore '><u >Know More</u></button>

                            </div>

                            <div className='border-black  shadow rounded-md topMentorTc'>
                                <div className='flex justify-center items-center mt-[10px]  '><img src={Photo1} /></div>
                                <div className='p-[10px]'>
                                    <h1 className='text-base font-bold'>Lincoln Siphron</h1>
                                    <p className='text-xs'>Computer Programming</p>

                                    <div className='flex justify-between'>
                                        <ul className='flex gap-[18px]'>
                                            <li className='flex justify-center items-center'>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </li>
                                            <li className='text-xs'>4.9 Rating</li>

                                            <li className='text-xs font-bold text-blue-500'>CCL400</li>
                                            <li className='text-xs font-bold'>CC<del>L480</del></li>
                                        </ul>
                                    </div>
                                    <div className='flex justify-between mt-[10px]'>
                                        <ul className='flex gap-[10px]'>
                                            <li className='flex justify-center items-center'><IoLocation /></li>
                                            <li className='text-xs'>Paris,France</li>
                                        </ul>
                                        <ul className='flex gap-[5px]'>
                                            <li className='flex justify-center items-center'><IoMdContact /></li>
                                            <li className='text-xs'>412 Student </li>
                                        </ul>
                                    </div>

                                </div>
                                <button className='text-center text-white fo flex justify-center items-center bg-00c875  h-[60px] knowMore '><u >Know More</u></button>

                            </div>

                            <div className='border-black  shadow rounded-md topMentorTc'>
                                <div className='flex justify-center items-center mt-[10px]  '><img src={Photo1} /></div>
                                <div className='p-[10px]'>
                                    <h1 className='text-base font-bold'>Lincoln Siphron</h1>
                                    <p className='text-xs'>Computer Programming</p>

                                    <div className='flex justify-between'>
                                        <ul className='flex gap-[18px]'>
                                            <li className='flex justify-center items-center'>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </li>
                                            <li className='text-xs'>4.9 Rating</li>

                                            <li className='text-xs font-bold text-blue-500'>CCL400</li>
                                            <li className='text-xs font-bold'>CC<del>L480</del></li>
                                        </ul>
                                    </div>
                                    <div className='flex justify-between mt-[10px]'>
                                        <ul className='flex gap-[10px]'>
                                            <li className='flex justify-center items-center'><IoLocation /></li>
                                            <li className='text-xs'>Paris,France</li>
                                        </ul>
                                        <ul className='flex gap-[5px]'>
                                            <li className='flex justify-center items-center'><IoMdContact /></li>
                                            <li className='text-xs'>412 Student </li>
                                        </ul>
                                    </div>

                                </div>
                                <button className='text-center text-white fo flex justify-center items-center bg-00c875  h-[60px] knowMore '><u >Know More</u></button>

                            </div>


                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default ClientDashboard
