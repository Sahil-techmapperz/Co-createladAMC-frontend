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
                <div className='ml-[30px]'>
                    <div className="sm:hidden  ml-[10px]">  <MobileNav /> </div>
                    <div className='max-sm:hidden'>  <ClientNavbar  Navtext={"Session"}/></div>
                    <div className='mt-[60px] p-[10px] max-sm:mt-[0px]'>
                        <div>
                            <h1 className='text-xl  font-bold'>Introduction Sessions</h1>
                            <img className='mt-[10px]  w-full max-sm:w-[350px]' src={SessionImg} />
                        </div>

                        <div className='flex gap-[20px] mt-[10px]'>
                            <p>Session Taken by</p>
                            <p className='font-bold'>Lincoln Siphron</p>
                        </div>


                        <div className='flex justify-between mt-[20px] w-[100%]'>
                            <ul className='flex gap-[20px]'>
                                <li className='flex justify-center items-center'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </li>
                                <li className='flex justify-center items-center'>4.9 Rating</li>
                            </ul>
                            <ul className='flex  gap-[20px]'>
                                <li className='text-base font-bold text-blue-500 flex justify-center items-center'>Resources</li>


                                <button className='text-white bg-blue-500 h-[40px] w-[200px] flex justify-center items-center rounded-lg max-sm:hidden'>Book a session</button>
                            </ul>

                        </div>
                        <ul><button className='text-white bg-blue-500 h-[40px] w-[300px] flex justify-center items-center rounded-lg sm:hidden'>Book a session</button></ul>
                        <div className='flex mt-[20px]'>
                            <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many
                                web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ClientIntroSession
