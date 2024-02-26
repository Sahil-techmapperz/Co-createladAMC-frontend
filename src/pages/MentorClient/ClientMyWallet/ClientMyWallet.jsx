import React from 'react'
import Sidebar from '../../../components/Sidebar'
import MobileNav from '../../../components/Mobile/MobileNav'
import ClientNavbar from '../ClientNavbar/ClientNavbar'
import BasicImage from '../MentorAssets/basicbutton.png'
import { FaPlus } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import ClientSidebar from '../ClientSidebar/ClientSidebar'


const ClientMyWallet = () => {
    return (
        <>
            <div className='flex'>
                <div className="max-sm:hidden ">
                    <ClientSidebar />
                </div>

                <div className='w-[80%] ml-[30px] max-sm:ml-[0px] max-sm:w-[100%]'>
                    {/* <div className="sm:hidden  ml-[10px]">  <MobileNav /> </div> */}
                    <div className=''>  <ClientNavbar Navtext={"My Wallet"} /></div>

                    <div className='flex justify-between mt-[10px] pt-[20px] pb-[20px] pr-[20px] pl-[0px] max-sm:mt-[0px] max-sm:pl-[20px]'>
                        <h1 className='text-lg font-medium'>My Wallet</h1>
                    </div>

                    <div className='flex gap-[20px] max-sm:flex-col  max-sm:ml-[15px]'>
                        <div className='w-[350px] pt-[10px] rounded-lg h-[480px]  shadow-lg max-sm:w-[250px]'>
                            <div className='flex justify-center items-center'><img src={BasicImage} /></div>
                            <div className='text-center'>
                                <p className='text-xl font-bold'>Team</p>
                                <p className='font-bold text-4xl '>350 CCL=$15</p>
                                <p className='text-base'>/month</p>
                                <div className='flex justify-center items-center mt-[10px]'>
                                    <TiTick />
                                    <p className='text-base '>1 User Per Account</p>
                                </div>
                                <div className='flex justify-center items-center mt-[10px]'>
                                    <TiTick />
                                    <p className='text-base'>Them Customizetion</p>
                                </div>
                                <div className='flex justify-center items-center mt-[10px]'>
                                    <TiTick />
                                    <p className='text-base'>Ecomerce Thems</p>
                                </div>
                                <div className='flex justify-center items-center mt-[10px]'>
                                    <TiTick />
                                    <p className='text-base'>Wordpress Thems</p>
                                </div>
                                <div className='flex justify-center items-center mt-[10px]'>
                                    <TiTick />
                                    <p className='text-base'>Email Announcment</p>
                                </div>
                            </div>
                            <div className='flex justify-center items-center'><button className='mt-[10px] rounded-lg flex justify-center items-center w-[300px] text-white font-bold text-base bg-sky-500 h-[50px] max-sm:w-[200px]'>My Current Plan</button></div>
                        </div>

                        <div className='max-sm:hidden  flex justify-center items-center '>
                            <div className='bg-sky-500 w-[200px] h-[200px] flex justify-center items-center gap-[10px] rounded-lg'>
                                <div className='text-2xl bg-white p-[5px] rounded-full text-sky-500 flex items-center justify-center'><FaPlus /></div> <br />

                                <p className=' text-xl text-white font-bold text-center flex justify-center items-center'>Add More</p>
                            </div>
                        </div>

                        <div className='sm:hidden ml-[85%] text-4xl text-white p-[5px] rounded-full w-[50px] h-[50px] bg-sky-500 flex items-center justify-center'><FaPlus /></div> <br />
                    </div>
                </div>


            </div>
        </>
    )
}

export default ClientMyWallet
