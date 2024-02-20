import React from 'react'
import './cli';

import Icon1 from '../../../assets/Icon (1).png';
import Icon2 from '../../../assets/Icon (2).png';
import Icon3 from '../../../assets/Icon (3).png';
import Icon4 from '../../../assets/Icon (4).png';
import Icon5 from '../../../assets/Icon (5).png';
import Icon6 from '../../../assets/Icon (6).png';
import Icon7 from '../../../assets/Icon (7).png';
import Icon8 from '../../../assets/Icon.png';

import ClientSidebar from '../ClientSidebar/ClientSidebar.jsx';
import ClientNavbar from '../ClientNavbar/ClientNavbar.jsx';
import MobileNav from '../../../components/Mobile/MobileNav.jsx';

const MyAccount = () => {
    return (
        <div className='myAccount_main_body'>

            <div className="max-sm:hidden ">
                <ClientSidebar />
            </div>
            <div className='myAccount_body  ml-[30px]'>

                <div className="sm:hidden  ml-[10px]">  <MobileNav /> </div>

                <div className="max-sm:hidden" >
                <ClientNavbar Navtext={"My Account"} />
                </div>

                <div className='myAccount_main mt-[40px]'>
                    {/* <p>Dashboard > Account Settings</p> */}
                    <div>
                        <img src={Icon8} />
                        <p className='my_account_main_heading'>Personal info</p>
                        <p>Provide personal details and how we can reach you</p>
                    </div>

                    <div>
                        <img src={Icon1} />
                        <p className='my_account_main_heading'>Login & security</p>
                        <p>Update your password and secure your account</p>
                    </div>

                    <div>
                        <img src={Icon2} />
                        <p className='my_account_main_heading'>Payments & payouts</p>
                        <p>Review payments, payouts, coupons, and gift cards</p>
                    </div>

                    <div>
                        <img src={Icon3} />
                        <p className='my_account_main_heading'>Notifications</p>
                        <p>Choose notification preferences and how you want to be contacted</p>
                    </div>

                    <div>
                        <img src={Icon4} />
                        <p className='my_account_main_heading'>Privacy & sharing</p>
                        <p>Manage your personal data, connected services, and data sharing settings</p>
                    </div>

                    <div>
                        <img src={Icon5} />
                        <p className='my_account_main_heading'>Skills</p>
                        <p>Get professional tools if you manage several properties on Airbnb</p>
                    </div>

                    <div>
                        <img src={Icon6} />
                        <p className='my_account_main_heading'>Services To Provide</p>
                        <p>Set your default language, currency, and timezone</p>
                    </div>

                    <div>
                        <img src={Icon7} />
                        <p className='Delete_account'>Delete Account</p>
                        <p>Add a work email for business trip benefits</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyAccount
