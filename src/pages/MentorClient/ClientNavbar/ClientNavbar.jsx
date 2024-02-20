import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BiMenuAltLeft } from "react-icons/bi";
import { FaFilter } from "react-icons/fa";

const ClientNavbar = ({Navtext}) => {
    return (
        <>
            <nav className='navbar bg-white shadow w-[82%]'>

                <div className='navbar-left'>
                <p className=' flex justify-center items-center font-bold '>{Navtext}</p>
                    <input className='border rounded-md p-[5px] border-black ' placeholder='Search Here' />
                </div>

                <div className='flex gap-[30px]'>
                    <div className='flex items-center justify-center '><FaFilter /></div>
                    <p className='flex items-center justify-center'>Advanced Search</p>

                    <div className='flex'>
                        <div className='flex items-center justify-center'><BiMenuAltLeft /></div>
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

                <div className='navbar-right'>
                    <i className="fa-solid fa-gear"></i>
                    <i className="fa-solid fa-bell"></i>
                    <i className="fa-solid fa-right-from-bracket"></i>
                </div>
            </nav>
        </>
    )
}

export default ClientNavbar
