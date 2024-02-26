import React from 'react'
import Sidebar from '../../components/Sidebar'
import { FaStar } from "react-icons/fa";
import ClientNavbar from '../MentorClient/ClientNavbar/ClientNavbar'
import SessionImg from '../../assets/GroupSession.png'
import "./clientIntroSession.css"
import MobileNav from '../../components/Mobile/MobileNav';
import ClientSidebar from '../MentorClient/ClientSidebar/ClientSidebar';

const ClientIntroSession = () => {
    return (
        <>

            <div className='flex gap-1'>
                <div className="max-sm:hidden ">
                    <ClientSidebar />
                </div>


                <div className='w-[80%] ml-[30px] max-sm:ml-[0px]  max-sm:w-[100%]'>
                    {/* <div className="sm:hidden  ml-[10px]">  <MobileNav /> </div> */}
                    <div className=''>  <ClientNavbar Navtext={"Session"} /></div>
                    <div className='mt-[15px] pt-[10px]  pb-[10px] pl-[0px] max-sm:mt-[0px] max-sm:p-[15px] overflow-x-auto'>
                        <div>
                            <h1 className='text-xl  font-bold'>Introduction Sessions</h1>

                        </div>
                        <div className=' md:h-[84vh] md:overflow-y-auto '>

                            <img className='mt-[10px] h-[500px]  w-[100%] max-sm:w-[350px]  max-sm:h-[250px]' src={SessionImg} />
                            <div className='flex gap-[10px] mt-[10px]'>
                                <p className='text-[18px]'>Session Taken by</p>
                                <p className='font-bold text-[18px]'>Lincoln Siphron</p>
                            </div>


                            <div className='flex justify-between mt-[8px] w-[100%]'>
                                <ul className='flex gap-[20px]'>
                                    <li className='flex justify-center text-yellow-500 items-center text-[24px]'>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </li>
                                    <li className='flex font-bold text-[18px] justify-center items-center'>4.9 Rating</li>
                                </ul>
                                <ul className='flex  gap-[20px]'>
                                    <li className='text-[18px] font-bold text-blue-500 flex justify-center items-center'>Resources</li>


                                    <button className='text-white font-bold bg-blue-500 h-[40px] w-[150px] flex justify-center items-center rounded-lg max-sm:hidden ' >Book a session</button>
                                </ul>

                            </div>
                            <ul><button className='text-white bg-blue-500 h-[40px] w-[300px] flex justify-center max-sm:mt-[35px] items-center rounded-lg sm:hidden'>Book a session</button></ul>
                            <div className='flex mt-[8px]'>
                                <p className='text-gray-600'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many
                                    web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ClientIntroSession
