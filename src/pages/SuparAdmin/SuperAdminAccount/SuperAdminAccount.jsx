import React from 'react'
// import './clientMyAcc.css';

import Icon1 from '../../../assets/Icon (1).png';
import Icon2 from '../../../assets/Icon (2).png';
import Icon3 from '../../../assets/Icon (3).png';
import Icon4 from '../../../assets/Icon (4).png';
import Icon5 from '../../../assets/Icon (5).png';
import Icon6 from '../../../assets/Icon (6).png';
import Icon7 from '../../../assets/Icon (7).png';
import Icon8 from '../../../assets/Icon.png';
import SuperAdminSide from '../SuperAdminSide/SuperAdminSide.jsx';
import SuperAdminNavbar from '../SuperAdminNav/SuperAdminNav.jsx';
import MobileNav from '../../../components/Mobile/MobileNav.jsx';

const SuperAdminAccount = () => {
    return (
        <div className='flex gap-[30px] h-[100vh] md:overflow-y-hidden'>

            <div className="max-sm:hidden ">
                <SuperAdminSide />
            </div>
            <div className='w-[100%] mr-[12px] max-sm:ml-[0] max-sm:w-[100%]'>

                {/* <div className="sm:hidden  ml-[10px]">  <MobileNav /> </div> */}

                <div className="" >
                    <SuperAdminNavbar Navtext={"My Account"} />
                </div>
                <p className='text-lg pt-[12px] pb-[12px] pr-[12px] pl-[0px] font-bold max-sm:p-[10px]'> Account Settings</p>
                <div className='grid-cols-3 clientMainbody gap-[5%] p-[0px] mt-[20px] max-sm:p-[10px]'>

                    <div className='h-[190px]'>
                        <img src={Icon8} />
                        <p className='my_account_main_heading mt-[15px] text-sm'>Personal info</p>
                        <p className='mt-[20px] text-sm'>Provide personal details and how we can reach you</p>
                    </div>

                    <div className='h-[190px]'>
                        <img src={Icon1} />
                        <p className='my_account_main_heading mt-[15px] text-sm'>Login & security</p>
                        <p className='mt-[20px] text-sm'>Update your password and secure your account</p>
                    </div>

                    <div className='h-[190px]'>
                        <img src={Icon2} />
                        <p className='my_account_main_heading mt-[15px] text-sm'>Payments & payouts</p>
                        <p className='mt-[20px] text-sm'>Review payments, payouts, coupons, and gift cards</p>
                    </div>

                    <div className='h-[190px] mt-[30px]'>
                        <img src={Icon3} />
                        <p className='my_account_main_heading mt-[15px] text-sm'>Notifications</p>
                        <p className='mt-[20px] text-sm'>Choose notification preferences and how you want to be contacted</p>
                    </div>

                    <div className='h-[190px] mt-[30px]'>
                        <img src={Icon4} />
                        <p className='my_account_main_heading mt-[15px] text-sm'>Privacy & sharing</p>
                        <p className='mt-[20px] text-sm'>Manage your personal data, connected services, and data sharing settings</p>
                    </div>

                    <div className='h-[190px] mt-[30px]'>
                        <img src={Icon7} />
                        <p className='Delete_account mt-[15px] text-sm'>Delete Account</p>
                        <p className='mt-[20px] text-sm'>Add a work email for business trip benefits</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuperAdminAccount;
