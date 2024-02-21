import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BiMenuAltLeft } from "react-icons/bi";
import { FaFilter } from "react-icons/fa";
import './superAdminNav.css'


const SuperAdminNav = ({ Navtext }) => {
    return (
        <>
            <nav className='navbar mt-[12px] bg-white  shadow rounded-md w-[81%]'>

                <div className='navbar-left gap-[35px]'>
                    <p className=' flex justify-center items-center font-bold '>{Navtext}</p>
                    <input className='border rounded-md pr-[5px] border-slate-500' placeholder='Search Here' />
                </div>

                <div className='flex gap-[30px]'>
                    <div className='flex  gap-[5px]'>
                        <div className='flex items-center iconmenu justify-center '><FaFilter /></div>
                        <p className='flex items-center justify-center'>Advanced Search</p>
                    </div>
                    <div className='flex gap-[5px]'>
                        <div className='flex items-center iconmenu justify-center text-2xl'><BiMenuAltLeft /></div>
                        <p>Sorting-</p>


                        {/* <div class="dropdown">
                            <a href="#">Mentor</a>
                            <div class="dropdown-content">
                                <a href="#">Top Mentor 1</a>
                                <a href="#">Top Mentor 2</a>
                                <a href="#">Top Mentor 3</a>
                            </div>
                        </div> */}
                    </div>

                </div>

                <div className='navbar-right iconmenu gap-[20px]'>
                    <i className="fa-solid fa-gear to-blue-500"></i>
                    <i className="fa-solid fa-bell"></i>
                    <i className="fa-solid fa-right-from-bracket"></i>
                </div>
            </nav>
        </>
    )
}

export default SuperAdminNav
