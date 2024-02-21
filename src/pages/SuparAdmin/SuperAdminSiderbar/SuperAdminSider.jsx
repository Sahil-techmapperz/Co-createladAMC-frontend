import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import Logo from "../../../assets/Logo1.png"
import Setting from "../../../assets/settings.png";
import "./superAdminSide.css";


// import PersonalInfo from "../pages/PersonalInfo.jsx";
// import "../pages/Mentordashboard.jsx";
// import "../../../";
// import "../pages/MessageChat.jsx";
// import "../pages/MyAccount.jsx";
// import "../pages/MyWallet.jsx";
// import "../pages/MyWithdrawls.jsx";
// import "../pages/NoticeBoard.jsx";
// import "../pages/Session.jsx";
// import "../pages/SessionCalander.jsx";
// import "../pages/SignUp.jsx";

import exitLogo from "../../../assets/material-symbols_logout (1).png";
import notification from "../../../assets/GroupNotification.png";
import Profile from "../../../assets/web.png";
import dropdownArrow from "../../../assets/pngfind-2@2x.png";
import dashboardImg from "../../../assets/dashboard.png";
import openBook from "../../../assets/open-book 1 (1).png";
import planning from "../../../assets/planning 1.png";
import groupSession from "../../../assets/group 1 (1).png";
import NoticeImage from "../../../assets/clipboard-outline.png";
import walletImg from "../../../assets/text-box.png";
import withdrallImg from "../../../assets/receipt-outline.png";
import messageImg from "../../../assets/chat 1 (1).png";
import contact from "../../../assets/account-circle.png";
import contact1 from "../../../assets/contact2.png";
import store from "../../../assets/store.png";
import graph1 from "../../../assets/Group 1000002280.png";
import graph2 from "../../../assets/Group 1000002281.png";
import { Link } from 'react-router-dom';

const SuperAdminSidebar = () => {
    return (



        <div className='admin_side_part_one mt-[20px]'>

            <img className='websiteLogo  ml-[17px] ' src={Logo} />



            <div className='admin_side_para'>

                {/* <div className='admin_side_part_two'> */}

                <div className='admin_profile'>
                    <img src={Profile} />
                    <Link to='/PersonalInfo'><p>Jhon Das</p></Link>
                    <i className="dropdownIcon  fa-solid fa-caret-down"></i>

                </div>
                <div className='Profile_devider'></div>



                <ul className='sideBar_main ml-[20px]'>
                    <li>
                        {/* <div className="admin_dashboard1"> */}
                        <img src={dashboardImg} />
                        <Link  to='/clientDashboard'><p className='text-lg'>Dashboard</p></Link>

                        {/* </div> */}
                    </li>


                    <li>
                        {/* <div className='session'> */}
                        <img src={openBook} />
                        <Link to='/clientIntroSession'><p>Session </p></Link>

                        {/* </div> */}
                    </li>


                    <li>
                        {/* <div className='session_Calander'> */}
                        <img src={planning} />
                        <Link to='/clientSnCalender'><p>Session Calender</p></Link>

                        {/* </div> */}
                    </li>

                  


                    <li>
                        {/* <div className='noticeBoard'> */}
                        <img src={NoticeImage} />
                        <Link to='/clientNotice'><p>Notice Board</p></Link>

                        {/* </div> */}
                    </li>

                    {/* <div className='message'> */}
                    <li>
                        <img src={messageImg} />
                        <Link to='/chatMessage'><p>Messages</p></Link>
                        {/* </div> */}
                    </li>
                    <li>
                        <img src={contact} />
                        <Link to='/clientMyAccount'><p>My Account</p></Link>
                        {/* </div> */}
                    </li>



                    {/* <div className='admin_side_para_divider1'>

            </div> */}
                    <li>
                        {/* <div className='my_wallet'> */}
                        <img src={walletImg} />
                        <Link to='/clientMyWallet'><p>My Wallet</p></Link>

                        {/* </div> */}
                    </li>

                   



                </ul >

                {/* </div> */}

            </div>


        </div>
    )
}

export default SuperAdminSidebar
