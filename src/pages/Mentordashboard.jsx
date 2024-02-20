import React from "react";
import "../CSS/mentor_dashboard.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Sidebar.jsx';



import contact from "../assets/account-circle.png";
import contact1 from "../assets/contact2.png";
import store from "../assets/store.png";
import graph1 from "../assets/Group 1000002280.png";
import graph2 from "../assets/Group 1000002281.png";
import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar.jsx";
import MobileNav from "../components/Mobile/MobileNav.jsx";




const Mentordashboard = () => {
    return (
        <div className='mentor_dashboard_main_section'>
            <div className="max-sm:hidden ">
                <Sidebar />
            </div>
            <div className='mentor_main_body '>

                <div className="sm:hidden  ml-[10px]">  <MobileNav /> </div>


                <div className="ml-[30px] mentorsec">

                    <div className="max-sm:hidden" >


                        <Navbar Navtext={"Dashboard"} />
                        {/* <nav>

                            <div className='Navbarleft'>

                                <p className='navHeader flex justify-center items-center'>Dashboard</p>
                                <input className='myAccountSearch' placeholder='Search Here' />
                            </div>
                            <div className='Navbarright'>
                                <i className="fa-solid fa-gear"></i>
                                <i className="fa-solid fa-bell"></i>
                                <i className="fa-solid fa-right-from-bracket"></i>
                            </div>
                        </nav> */}
                    </div>

                        <div className='mentor_admin_body_session1 w-[100%]'>
                            <div className='mentor_admin_body_sub ' >
                                <div className='schedule_session'>
                                    <img className="bg-amber-300" src={contact} />

                                    <div className='schedule_session1'>
                                        <p>Schedule Sessions</p>
                                        <p className='schedule_session_sub_two'>281</p>
                                    </div>
                                </div>
                                <div className='schedule_session_sub'>
                                    <p className='schedule_session_sub_one'>+55%</p>
                                    <p>than last weak</p>
                                </div>
                            </div>
                            <div className='mentor_admin_body_sub'>
                                <div className='schedule_session'>
                                    <img className="bg-sky-500" src={contact1} />

                                    <div className='schedule_session1'>
                                        <p>Schedule Sessions</p>
                                        <p className='schedule_session_sub_two'>281</p>
                                    </div>
                                </div>
                                <div className='schedule_session_sub'>
                                    <p className='schedule_session_sub_one'>+55%</p>
                                    <p>than last weak</p>
                                </div>
                            </div>
                            <div className='mentor_admin_body_sub'>
                                <div className='schedule_session'>
                                    <img className="bg-sky-500" src={store} />

                                    <div className='schedule_session1'>
                                        <p>Schedule Sessions</p>
                                        <p className='schedule_session_sub_two'>281</p>
                                    </div>
                                </div>
                                <div className='schedule_session_sub'>
                                    <p className='schedule_session_sub_one'>+55%</p>
                                    <p>than last weak</p>
                                </div>
                            </div>
                        </div>



                    <div className='graph_chart'>

                        <div>
                            <img src={graph1} />

                            <p>Overall Completed</p>
                            <p>Last Campaign Performance</p>
                            <p>just updated</p>
                        </div>
                        <div>
                            <img src={graph2} />
                            <p>Booking Daily Classes</p>
                            <p>(+15%) increase in today sales.</p>
                            <p>updated 4 min ago</p>
                        </div>

                    </div>


                    <div className='table_container'>
                        <p className="mentor_header">New Users/ Students Joinning</p>

                        <table className="dashboard_table">
                            <thead>
                                <tr>
                                    {/* <th><input type="checkbox" /></th> */}
                                    <th>PAYMENT</th>
                                    <th>STATUS</th>
                                    <th>AMOUNT</th>
                                    <th>WITH METHOD</th>
                                    <th>CREATION DATE</th>
                                    {/* <th></th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {/* <!-- Add your table data here --> */}
                                <tr>
                                    {/* <td><input type="checkbox" /></td> */}
                                    <td>Payment 1</td>
                                    <td>Success</td>
                                    <td>$100.00</td>
                                    <td>Credit Card</td>
                                    <td>2023-12-12</td>
                                    {/* <td><RiArrowDropDownLine /></td> */}
                                </tr>
                                <tr>
                                    {/* <td><input type="checkbox" /></td> */}
                                    <td>Payment 2</td>
                                    <td>Pending</td>
                                    <td>$50.00</td>
                                    <td>PayPal</td>
                                    <td>2023-12-13</td>
                                    {/* <td><RiArrowDropDownLine /></td> */}
                                </tr>
                                <tr>
                                    {/* <td><input type="checkbox" /></td> */}
                                    <td>Payment 3</td>
                                    <td>Pending</td>
                                    <td>$50.00</td>
                                    <td>PayPal</td>
                                    <td>2023-12-13</td>
                                    {/* <td><RiArrowDropDownLine /></td> */}
                                </tr>
                                <tr>
                                    {/* <td><input type="checkbox" /></td> */}
                                    <td>Payment 4</td>
                                    <td>Pending</td>
                                    <td>$50.00</td>
                                    <td>PayPal</td>
                                    <td>2023-12-13</td>
                                    {/* <td><RiArrowDropDownLine /></td> */}
                                </tr>
                                <tr>
                                    {/* <td><input type="checkbox" /></td> */}
                                    <td>Payment 4</td>
                                    <td>Pending</td>
                                    <td>$50.00</td>
                                    <td>PayPal</td>
                                    <td>2023-12-13</td>
                                    {/* <td><RiArrowDropDownLine /></td> */}
                                </tr>
                                {/* <!-- Add more rows as needed --> */}
                            </tbody>

                        </table>

                    </div>


                </div>

            </div>


        </div>
    )
}

export default Mentordashboard;
