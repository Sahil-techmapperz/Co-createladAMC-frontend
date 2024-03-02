import React from 'react';
import Sidebar from '../../components/Sidebar.jsx';
import Navbar from '../../components/Navbar.jsx';
import Port1 from './../../assets/svg.png';
import Port2 from './../../assets/svg (1).png';
import Port3 from './../../assets/svg (2).png';
import PersonalEdit from '../../components/PersonalEdit.jsx';
import { Link } from 'react-router-dom';

const PersonalInfo = () => {
    return (
        <div className='flex gap-2'>
            <div className="hidden sm:block">
                <Sidebar liname={"My Account"}/>
            </div>
            <div className='flex flex-col w-full h-[100vh] overflow-y-auto py-[15px]'>
                <Navbar Navtext={"My Account"} />
                <div className='m-[20px] text-[18px] font-[600]'>
                  <Link to={"/"}>Dashboard</Link> &gt; <Link to={"/Myaccounts"}>My Account</Link> &gt; Personal Info
                </div>
                <div className='p-4 h-[80vh] overflow-y-auto'>
                    <div className='flex max-md:flex-col  gap-5'>
                        <div className='w-full'>
                            <PersonalEdit title="Legal name" content="Peter Griffin" actionText="Edit" />
                            <PersonalEdit title="Email address" content="h***o@designdrops.op" actionText="Edit" />
                            <PersonalEdit title="Phone numbers" content="Add a number so confirmed guests and can get in touch. You can add other numbers and choose how they’re used." actionText="Add" />
                            <PersonalEdit title="ID" content="Not provided" actionText="Add" />
                            <PersonalEdit title="Address" content="Not provided" actionText="Add" />
                            <PersonalEdit title="Emergency contact" content="Not provided" actionText="Add" />
                        </div>
                        <div className='md:w-1/3 w-full   bg-gray-100 p-4 rounded-lg'>
                            <div className='my-4'>
                                <img src={Port1} alt="Info Security" />
                                <p className='text-lg font-bold my-2'>Why isn’t my info shown here?</p>
                                <p>We’re hiding some account details to protect your identity.</p>
                            </div>
                            <div className='my-4'>
                                <img src={Port2} alt="Editable Details" />
                                <p className='text-lg font-bold my-2'>Which details can be edited?</p>
                                <p>Details used to verify your identity can’t be changed. Contact info and some personal details can be edited, but we may ask you to verify your identity the next time you book or create a listing.</p>
                            </div>
                            <div className='my-4'>
                                <img src={Port3} alt="Shared Info" />
                                <p className='text-lg font-bold my-2'>What info is shared with others?</p>
                                <p>Only releases contact information for Hosts and guests after a reservation is confirmed.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonalInfo;
