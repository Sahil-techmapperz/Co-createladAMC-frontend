import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import Logo from "../../../assets/Logo1.png"
import Setting from "../../../assets/settings.png";
import "./superAdminSide.css";


import PersonalInfo from "../../../pages/PersonalInfo.jsx";
import "../../../pages/Mentordashboard.jsx";
import "../../../pages/MessageChat.jsx";
import "../../../pages/MyAccount.jsx";
import "../../../pages/MyWallet.jsx";
import "../../../pages/MyWithdrawls.jsx";
import "../../../pages/NoticeBoard.jsx";
import "../../../pages/Session.jsx";
import "../../../pages/SessionCalander.jsx";
import "../../../pages/SignUp.jsx";

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

const SuperAdminSide = () => {
    return (

        <div className='admin_side_part_one'>

            <img className='websiteLogo' src={Logo} />



            <div className='admin_side_para'>

                {/* <div className='admin_side_part_two'> */}

                <div className='admin_profile'>
                    <img src={Profile} />
                    <a href='/PersonalInfo'><p>Jhon Das</p></a>
                    <i className="dropdownIcon  fa-solid fa-caret-down"></i>

                </div>
                <div className='Profile_devider'></div>



                <ul className='sideBar_main'>
                    <li>
                        {/* <div className="admin_dashboard1"> */}
                        <img src={dashboardImg} />
                        <a href='/suparAdmin'><p>Dashboard</p></a>

                        {/* </div> */}
                    </li>


                    <li>
                        {/* <div className='session'> */}
                        <img src={openBook} />
                        <a href='/SuperAdminUserTable'><p>Manage Users </p></a>

                        {/* </div> */}
                    </li>


                    <li>
                        {/* <div className='session_Calander'> */}
                        <img src={planning} />
                        <a href=''><p>Issue Reported</p></a>

                        {/* </div> */}
                    </li>

                    {/* <li> */}
                    {/* <div className='group_Session'> */}
                    {/* <img src={groupSession} />
                        <a href=''><p>Group Session</p></a> */}

                    {/* </div> */}
                    {/* </li> */}
                    {/*  */}

                    {/* <li> */}
                    {/* <div className='noticeBoard'> */}
                    {/* <img src={NoticeImage} />
                        <a href='/NoticeBoard'><p>Notice Board</p></a> */}

                    {/* </div> */}
                    {/* </li> */}

                    {/* <div className='message'> */}
                    <li>
                        <img src={messageImg} />
                        <a href='/chatMessage'><p>Messages</p></a>
                        {/* </div> */}
                    </li>
                    <li>
                        <img src={contact} />
                        <a href='/Myaccounts'><p>My Account</p></a>
                        {/* </div> */}
                    </li>



                    {/* <div className='admin_side_para_divider1'>

            </div> */}
                    <li>
                        {/* <div className='my_wallet'> */}
                        <img src={walletImg} />
                        <a href='/MyWallet'><p>Notice Board</p></a>

                        {/* </div> */}
                    </li>

                    {/* <li> */}
                    {/* <div className='myWithdrals'> */}
                    {/* <img src={withdrallImg} />
                        <a href='/mywithdrawls'><p>My Withdrawals</p></a> */}

                    {/* </div> */}
                    {/* </li> */}



                </ul >

                {/* </div> */}

            </div>


        </div>
    )
}

export default SuperAdminSide
