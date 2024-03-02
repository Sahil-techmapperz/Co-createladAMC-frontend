import React from 'react'
import { FaStar } from "react-icons/fa";
import Profile from "../../../assets/web.png";
import ClientNavbar from '../ClientNavbar/ClientNavbar'
import SessionImg from '../../../assets/GroupSession.png'
import "./clientIntroSession.css"
import ClientSidebar from '../ClientSidebar/ClientSidebar';

const ClientIntroSession = () => {
    return (
        <>

            <div className='flex gap-[30px] h-[100vh] md:overflow-y-hidden'>
                <div className="max-sm:hidden ">
                    <ClientSidebar />
                </div>


                <div className='w-[100%] relative max-sm:ml-[0px]   max-sm:w-[100%]'>
                    {/* <div className="sm:hidden  ml-[10px]">  <MobileNav /> </div> */}
                    <div className=''>  <ClientNavbar Navtext={"Session"} className='w-[98%]' /></div>
                    <div className='mt-[15px] pt-[10px] pr-[15px]  pb-[10px] pl-[0px] max-sm:mt-[0px] max-sm:p-[15px] overflow-x-auto'>
                        <div>
                            <h1 className='text-xl  font-bold'>Introduction Sessions</h1>

                        </div>
                        <div className=' md:h-[90vh] md:overflow-y-auto  pb-[10px]'>

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
                                <p className='text-gray-600 text-sm'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many
                                    web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                            </div>



                            <div className='absolute border rounded-md flex items-center justify-center h-[70px] bottom-0 w-[98%] bg-slate-900 bg-opacity-50 left-0' >
                                <p className='text-sm text-white font-bold'>Thursday 09, 2022</p>
                            </div>



                            <div>
                                <div className='ml-[12px] mt-[12px] mr-[12px] mb-10'>
                                    <p className='text-sm font-bold'>Students Comments </p>
                                    <div className='flex gap-[20px] justify-between items-center mt-[10px]'>
                                        <div className='flex  gap-[20px] '>
                                            <img className='w-10 h-10  rounded-full object-cover' src={Profile} alt="Profile" />
                                            <p className='text-sm flex justify-center items-center font-bold'>Philip Gouse</p>
                                            <p className='text-sm flex justify-center items-center'> Iste quibusdam blanditiis praesentium suscipit tempore fugit vitae, sapiente minus iusto eligendi!</p>

                                        </div>
                                        <p className='text-sm flex justify-center items-center font-bold'>Thurday 09 2022</p>

                                    </div>
                                    <div className='flex gap-[20px] justify-between items-center mt-[10px]'>
                                        <div className='flex  gap-[20px] '>
                                            <img className='w-10 h-10  rounded-full object-cover' src={Profile} alt="Profile" />
                                            <p className='text-sm flex justify-center items-center font-bold'>Philip Gouse</p>
                                            <p className='text-sm flex justify-center items-center'> Iste quibusdam blanditiis praesentium suscipit tempore fugit vitae, sapiente minus iusto eligendi!</p>

                                        </div>
                                        <p className='text-sm flex justify-center items-center font-bold'>Thurday 09 2022</p>

                                    </div>
                                    <div className='flex gap-[20px] justify-between items-center mt-[10px]'>
                                        <div className='flex  gap-[20px] '>
                                            <img className='w-10 h-10  rounded-full object-cover' src={Profile} alt="Profile" />
                                            <p className='text-sm  flex justify-center items-center font-bold'>Philip Gouse</p>
                                            <p className='text-sm  flex justify-center items-center'> Iste quibusdam blanditiis praesentium suscipit tempore fugit vitae, sapiente minus iusto eligendi!</p>

                                        </div>
                                        <p className='text-sm  flex justify-center items-center font-bold'>Thurday 09 2022</p>

                                    </div>
                                </div>
                            </div>

                        </div>




                    </div>



                </div>
            </div>
        </>
    )
}

export default ClientIntroSession
