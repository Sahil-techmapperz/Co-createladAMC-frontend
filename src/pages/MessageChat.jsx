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

const MessageChat = () => {
    return (
        <div className='MessageChat_body'>
            <div className='max-sm:hidden'><Sidebar /></div>
            <div className='MessageChat_main ml-[30px]'>
                <div >

                    <div className="sm:hidden  ml-[10px]"> <MobileNav /> </div>
                    <nav className='max-sm:hidden'>

                        <Navbar Navtext={"Session"} />
                    </nav>


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


                    <div className='' >
                        <div >

                            <div className='messageChartSession mt-[10px]'>

                                <button className='w-[120px] shadow-md rounded-sm'> All Sessions</button>
                                <button className='w-[120px]'> Scheduled</button>
                                <button className='w-[120px]'> Unscheduled</button>
                                <button className='w-[120px]'> Complete</button>
                                <button className='w-[120px]'> Cancel</button>

                            </div>
                        </div>
                    </div>



                    <div className='messageBody'>
                        <div className='allSession'>
                            <div className='messageChartAllSession'>
                                <p>All Sessions</p>
                                <p className='text-blue-600'>+ Add New Sessions</p>
                            </div>


                            
                            <div className='messageChartAllSes h-[125px] mt-[10px] p-[10px]'>
                                <ul >
                                    <p><b>Session with XYZ</b> </p>
                                    <li className='messageChartAllSes1'>
                                        <p>Class Time :</p>
                                        <p><b>06:45 - 07:15</b></p>
                                    </li >
                                    <li className='messageChartAllSes1'>
                                        <p>Class Day :</p>
                                        <p><b>Wednesday, 25 Oct</b></p>
                                    </li>
                                    <li className='messageChartAllSes1'>
                                        <p>Scheduled Time : </p>
                                        <p><b>04:23:12:23</b></p>
                                    </li>

                                </ul>


                                <div>
                                    <p><b>Member </b></p>
                                    <li className='messageChartAllSes1'>
                                        <img className='MemberImg' src={Profile1} />
                                        <p>Kaiya Workman</p>
                                    </li>
                                </div>
                                <div className='messageChartAllSes12'>
                                    <p className='isDelete'>
                                        <MdDelete />
                                    </p>

                                    <p><b>DELETE</b></p>
                                </div>
                                <div className='messageChartAllSes13'>

                                    <p className='isDelete'><MdEdit /></p>
                                    <p>Reschedule</p>

                                </div>
                            </div>
                            <div className='messageChartAllSes h-[125px] mt-[10px] p-[10 px]'>
                                <ul >
                                    <p><b>Session with XYZ</b> </p>
                                    <li className='messageChartAllSes1'>
                                        <p>Class Time :</p>
                                        <p><b>06:45 - 07:15</b></p>
                                    </li >
                                    <li className='messageChartAllSes1'>
                                        <p>Class Day :</p>
                                        <p><b>Wednesday, 25 Oct</b></p>
                                    </li>
                                    <li className='messageChartAllSes1'>
                                        <p>Scheduled Time : </p>
                                        <p><b>04:23:12:23</b></p>
                                    </li>

                                </ul>


                                <div>
                                    <p><b>Member </b></p>
                                    <li className='messageChartAllSes1'>
                                        <img className='MemberImg' src={Profile1} />
                                        <p>Kaiya Workman</p>
                                    </li>
                                </div>
                                <div className='messageChartAllSes12'>
                                    <p className='isDelete'>
                                        <MdDelete />
                                    </p>

                                    <p><b>DELETE</b></p>
                                </div>
                                <div className='messageChartAllSes13'>

                                    <p className='isDelete'><MdEdit /></p>
                                    <p>Reschedule</p>

                                </div>
                            </div>
                            <div className='messageChartAllSes h-[125px] mt-[10px] p-[10 px]'>
                                <ul >
                                    <p><b>Session with XYZ</b> </p>
                                    <li className='messageChartAllSes1'>
                                        <p>Class Time :</p>
                                        <p><b>06:45 - 07:15</b></p>
                                    </li >
                                    <li className='messageChartAllSes1'>
                                        <p>Class Day :</p>
                                        <p><b>Wednesday, 25 Oct</b></p>
                                    </li>
                                    <li className='messageChartAllSes1'>
                                        <p>Scheduled Time : </p>
                                        <p><b>04:23:12:23</b></p>
                                    </li>

                                </ul>


                                <div>
                                    <p><b>Member </b></p>
                                    <li className='messageChartAllSes1'>
                                        <img className='MemberImg' src={Profile1} />
                                        <p>Kaiya Workman</p>
                                    </li>
                                </div>
                                <div className='messageChartAllSes12'>
                                    <p className='isDelete'>
                                        <MdDelete />
                                    </p>

                                    <p><b>DELETE</b></p>
                                </div>
                                <div className='messageChartAllSes13'>

                                    <p className='isDelete'><MdEdit /></p>
                                    <p>Reschedule</p>

                                </div>
                            </div>


                        </div>


                        <div className='lastWeekSection'>
                            <div className='lastWeekSection1'>
                                <p>Last Week Sessions</p>
                                <div>
                                    <p>23 - 30 March 2020</p>
                                </div>

                            </div>
                            {/* <div className='lastWeekSection1'>
                                <p>Last Week Sessions</p>
                                <div>
                                    <p>23 - 30 March 2020</p>
                                </div>

                            </div> */}
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
                                <p>YESTERDAY</p>
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
                                            <div className=' border-2 border-emerald-600 classEdit'><RiArrowDropDownLine /></div>
                                            <div>
                                                <p><b>Biology</b></p>
                                                <p >27 March 2020, at 12:30 PM</p>
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
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default MessageChat
