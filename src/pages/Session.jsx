import React from 'react'
import '../CSS/MessageChat.css';
import '../components/Sidebar.jsx';
import Sidebar from '../components/Sidebar.jsx';
import Video1 from '../assets/Video.png';
import { PiBookOpen } from "react-icons/pi";
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile1 from '../assets/web.png';
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import MobileNav from '../components/Mobile/MobileNav.jsx';
import Navbar from '../components/Navbar.jsx';
import { Link } from 'react-router-dom';

const Session = () => {
    return (
        <div className=' flex gap-2 overflow-hidden'>
            <div className='max-sm:hidden'><Sidebar /></div>
            <div className='w-full md:w-3/4 lg:w-4/5 xl:w-5/6'>
                <div className=''>
                    <Navbar Navtext={"Session"} />
                    <div className='m-[20px] text-[18px] font-[600]'>
                        <Link to={"/"}>Dashboard</Link> &gt; Session
                    </div>
                    <div className='messageChartVideo'>
                        <div className='messageChartVideo1'>
                            <img src={Video1} />
                            <p>Next Sessions: 2023-10-23 At 07:00 With</p>
                        </div>
                        <div className='messageChartVideo2'>
                            <p>Time Left :  07:00</p>
                            <div className='messageChartVideo3'>
                                <div className='bookOpen'>
                                    <PiBookOpen />
                                </div>
                                <p>Enter Sessions</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex  max-md:flex-col gap-6 my-2'>
                        <div className='md:w-[50vw] w-full shadow-md md:h-[60VH] overflow-y-auto p-4 rounded-md bg-gray-50'>
                            <div className='flex my-4 overflow-x-auto'>
                                <div className='flex space-x-4 min-w-max'>
                                    <button className='w-[120px] h-10 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-200 ease-in-out'>All Sessions</button>
                                    <button className='w-[120px] h-10 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-200 ease-in-out'>Scheduled</button>
                                    <button className='w-[120px] h-10 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-200 ease-in-out'>Rescheduled</button>
                                    <button className='w-[120px] h-10 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-200 ease-in-out'>Complete</button>
                                    <button className='w-[120px] h-10 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-200 ease-in-out'>Cancel</button>
                                </div>
                            </div>


                            <div className='messageChartAllSession'>
                                <p className='font-bold text-lg'>All Sessions</p>
                                <p className='text-blue-600 cursor-pointer hover:underline'>+ Add New Sessions</p>
                            </div>

                            <div className='flex flex-col gap-4'>
                                {Array(3).fill().map((_, index) => (
                                    <div key={index} className='rounded-md flex max-md:flex-col justify-around bg-white shadow p-4'>
                                        <div>
                                            <p className='font-bold'>Session with XYZ</p>
                                            <ul className='list-disc pl-5'>
                                                <li><p>Class Time: <b>06:45 - 07:15</b></p></li>
                                                <li><p>Class Day: <b>Wednesday, 25 Oct</b></p></li>
                                                <li><p>Scheduled Time: <b>04:23:12:23</b></p></li>
                                            </ul>
                                        </div>

                                        <div>
                                            <p className='font-bold'>Member</p>
                                            <div className='flex items-center gap-2 mt-[10px]'>
                                                <img className='w-10 h-10 rounded-full' src={Profile1} alt='Member Profile' />
                                                <p>Kaiya Workman</p>
                                            </div>
                                        </div>
                                        <div className='flex gap-4 mt-2 justify-center items-center'>
                                            <div className='flex gap-1 justify-center items-center cursor-pointer text-red-600'>
                                                <MdDelete />
                                                <p>DELETE</p>
                                            </div>
                                            <div className='flex gap-1 justify-center items-center cursor-pointer hover:text-green-600'>
                                                <MdEdit />
                                                <p>Reschedule</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>



                        <div className='md:w-[30vw] w-full shadow-md md:h-[60vh] overflow-y-auto p-4 rounded-md'>
                            <div className='lastWeekSection1'>
                                <p>Last Week Sessions</p>
                                <div>
                                    <p>23 - 30 March 2020</p>
                                </div>
                            </div>
                            <div>
                                <div className='lastWeekNews mt-[10px]'>
                                    <div>
                                        <p>NEWEST</p>
                                        <div className='classNews'>
                                            <div className='classEdit border-2 border-red-600'><RiArrowDropDownLine /></div>
                                            <div>
                                                <p><b>Biology</b></p>
                                                <p>27 March 2020, at 12:30 PM</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <p>Earning</p>
                                        <div className='text-green-500'>
                                            2,350
                                        </div>
                                    </div>
                                </div>
                                <div className='lastWeekNews mt-[10px]'>
                                    <div>
                                        {/* <p>NEWEST</p> */}
                                        <div className='classNews'>
                                            <div className='border-2 border-emerald-600 classEdit'><RiArrowDropDownLine /></div>
                                            <div>
                                                <p><b>Biology</b></p>
                                                <p>27 March 2020, at 12:30 PM</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        {/* <p>Earning</p> */}
                                        <div className='text-green-500'>
                                            2,350
                                        </div>
                                    </div>
                                </div>
                                <div className='lastWeekNews mt-[10px]'>
                                    <div>
                                        {/* <p>NEWEST</p> */}
                                        <div className='classNews'>
                                            <div className='border-2 border-emerald-600 classEdit'><RiArrowDropDownLine /></div>
                                            <div>
                                                <p><b>Biology</b></p>
                                                <p>27 March 2020, at 12:30 PM</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        {/* <p>Earning</p> */}
                                        <div className='text-green-500'>
                                            2,350
                                        </div>
                                    </div>
                                </div>
                                <div className='lastWeekNews mt-[10px]'>
                                    <div>
                                        {/* <p>NEWEST</p> */}
                                        <div className='classNews'>
                                            <div className='classEdit border-2 border-red-600'><RiArrowDropDownLine /></div>
                                            <div>
                                                <p><b>Biology</b></p>
                                                <p>27 March 2020, at 12:30 PM</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        {/* <p>Earning</p> */}
                                        <div className='text-green-500'>
                                            2,350
                                        </div>
                                    </div>
                                </div>
                                <div className='lastWeekNews mt-[10px]'>
                                    <div>
                                        {/* <p>NEWEST</p> */}
                                        <div className='classNews'>
                                            <div className='border-2 border-emerald-600 classEdit'><RiArrowDropDownLine /></div>
                                            <div>
                                                <p><b>Biology</b></p>
                                                <p>27 March 2020, at 12:30 PM</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        {/* <p>Earning</p> */}
                                        <div className='text-green-500'>
                                            2,350
                                        </div>
                                    </div>
                                </div>
                                <div className='lastWeekNews mt-[10px]'>
                                    <div>

                                        <div className='classNews'>
                                            <div className='border-2 border-emerald-600 classEdit'><RiArrowDropDownLine /></div>
                                            <div>
                                                <p><b>Biology</b></p>
                                                <p>27 March 2020, at 12:30 PM</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>

                                        <div className='text-green-500'>
                                            2,350
                                        </div>
                                    </div>
                                </div>
                                <p>YESTERDAY</p>
                                <div className='lastWeekNews mt-[10px]'>
                                    <div>

                                        <div className='classNews'>
                                            <div className=' border-2 border-emerald-600 classEdit'><RiArrowDropDownLine /></div>
                                            <div>
                                                <p><b>Biology</b></p>
                                                <p >27 March 2020, at 12:30 PM</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>

                                        <div className='text-green-500'>
                                            2,350
                                        </div>
                                    </div>
                                </div>
                                <div className='lastWeekNews mt-[10px]'>
                                    <div>

                                        <div className='classNews'>
                                            <div className='classEdit border-2 border-red-600'><RiArrowDropDownLine /></div>
                                            <div>
                                                <p><b>Biology</b></p>
                                                <p>27 March 2020, at 12:30 PM</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>

                                        <div className='text-green-500'>
                                            2,350
                                        </div>
                                    </div>
                                </div>
                                <div className='lastWeekNews mt-[10px]'>
                                    <div>
                                        {/* <p>NEWEST</p> */}
                                        <div className='classNews'>
                                            <div className=' border-2 border-emerald-600 classEdit'><RiArrowDropDownLine /></div>
                                            <div>
                                                <p><b>Biology</b></p>
                                                <p >27 March 2020, at 12:30 PM</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className='text-green-500'>
                                            2,350
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Session;
