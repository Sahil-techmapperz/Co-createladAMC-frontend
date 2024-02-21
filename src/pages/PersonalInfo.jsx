import React from 'react'
import Sidebar from '../components/Sidebar.jsx';
import '../CSS/PersonalInfo.css'
import { FaGreaterThan } from "react-icons/fa";
import Port1 from '../assets/svg.png';
import Port2 from '../assets/svg (1).png';
import Port3 from '../assets/svg (2).png'
import MobileNav from '../components/Mobile/MobileNav.jsx';
import Navbar from '../components/Navbar.jsx';

const PersonalInfo = () => {
    return (
        <div className='PersonalInfoBody'>
            <div className="max-sm:hidden  ml-[30px]">
                <Sidebar />
            </div>
            <div className='PersonalInfoMain'>
                <div className="sm:hidden  ml-[10px]">  <MobileNav /> </div>


                <div className="max-sm:hidden" >

                <Navbar Navtext={"Personal Info"} />

                    {/* <nav>

                        <div className='Navbarleft'>

                            <p className='navHeader'>Dashboard</p>
                            <input className='myAccountSearch' placeholder='Search Here' />
                        </div>
                        <div className='Navbarright'>
                            <i className="fa-solid fa-gear"></i>
                            <i className="fa-solid fa-bell"></i>
                            <i className="fa-solid fa-right-from-bracket"></i>
                        </div>
                    </nav> */}
                </div>
                <div className='PersonalInfoMainBody'>
                    <div className='PersonalBreadCramp'>
                        <p><b>My Account /</b></p>
                        {/* <FaGreaterThan /> */}

                        <p><b>Personal Info</b></p>
                    </div>
                    <p className='PersonalHeader'>Personal Info</p>


                    <div className='PersonalBody'>

                        <div className='PersonalBodyLeft'>
                            <div className='PersonalBodyLeft1'>
                                <div className='PersonalEdit'>
                                    <div className='PersonalEdit1'>
                                        <p><b>Legal name</b></p>
                                        <p className='breckPara'>Peter Griffin</p>
                                    </div>
                                    <div classname='personalAdd'><b>Edit</b></div>
                                </div>
                                <div className='PersonalDivider'></div>
                                <div className='PersonalEdit'>
                                    <div>
                                        <p><b>Email address</b></p>
                                        <p className='breckPara'>h***o@designdrops.op</p>
                                    </div>
                                    <div classname='personalAdd'><b>Edit</b></div>
                                </div>

                                <div className='PersonalDivider'></div>
                                <div className='PersonalEdit'>
                                    <div>
                                        <p><b>Phone numbers</b></p>
                                        <p className='breckPara'>Add a number so confirmed guests and can get in touch. You can add other numbers and choose how they’re used.</p>
                                    </div>
                                    <div classname='personalAdd'><b>Add</b></div>
                                </div>
                                <div className='PersonalDivider'></div>
                                <div className='PersonalEdit'>
                                    <div>
                                        <p><b>ID</b></p>
                                        <p className='breckPara'>Not provided</p>
                                    </div>
                                    <div classname='personalAdd'><b>Add</b></div>
                                </div>

                                <div className='PersonalDivider'></div>
                                <div className='PersonalEdit'>
                                    <div>
                                        <p><b>Address</b></p>
                                        <p className='breckPara'>Not provided</p>
                                    </div>
                                    <div classname='personalAdd'><b>Add</b></div>
                                </div>

                                <div className='PersonalDivider'></div>
                                <div className='PersonalEdit'>
                                    <div>
                                        <p><b>Emergency contact</b></p>
                                        <p className='breckPara'>Not provided</p>
                                    </div>
                                    <div classname='personalAdd'><b>Add</b></div>
                                </div>


                            </div>
                        </div>

                        <div className='PersonalBodyRight'>
                            <div className='PersonalBodyRight1'>
                                <img src={Port1} />
                                <p className='bodyRightHeader'>Why isn’t my info shown here?</p>
                                <p>We’re hiding some account details to protect your identity.</p>
                            </div>
                            <div className='PersonalBodyRight1'>
                                <img src={Port2} />
                                <p className='bodyRightHeader'>Which details can be edited?</p>
                                <p>Details uses to verify your identity can’t be changed. Contact info and some personal details can be edited, but we may ask you verify your identity the next time you book or create a listing.</p>
                            </div>
                            <div className='PersonalBodyRight1'>
                                <img src={Port3} />
                                <p className='bodyRightHeader'>What info is shared with others?</p>
                                <p>only releases contact information for Hosts and guests after a reservation is confirmed.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default PersonalInfo
