import React from 'react'
import Graph1 from '../assets/OverallCourseRating.png';
import Graph2 from '../assets/CourseOverview.png';
import Graph3 from '../assets/EarningView.png';
import Graph4 from '../assets/ProfileView.png';
import '../components/Sidebar.jsx';

import "../CSS/MyWallet.css";
import Sidebar from '../components/Sidebar.jsx';
import MobileNav from '../components/Mobile/MobileNav.jsx';
import Navbar from '../components/Navbar.jsx';



function MyWallet() {
    return (

        <div className='MyWallet_body'>

            <div className='max-sm:hidden'><Sidebar /></div>



            <div className='myWalletMain'>

                <div className="sm:hidden  ml-[10px]">  <MobileNav /> </div>



                <nav className='max-sm:hidden'>
                <Navbar Navtext={"My Wallet"} />
                </nav>
                <div className='MyWallet_mainContainer'>


                    {/* <div className='MyWalletFirstSection' > */}
                    <img src={Graph1} />
                    <img src={Graph2} />
                    {/* </div> */}

                    {/* <div className='MyWalletSecondSection'> */}

                    <img src={Graph4} />
                    <img src={Graph3} />
                    {/* </div> */}

                </div>

            </div>

        </div>
    )
}

export default MyWallet;
