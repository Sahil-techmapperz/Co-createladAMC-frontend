import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../CSS/Navbar.css";

const Navbar = ({ Navtext }) => {
    return (
        <nav className='navbar bg-white'>

            <div className='navbar-left'>
                <p className='flex justify-center items-center font-bold '>{Navtext}</p>
                <input placeholder='Search Here' />
            </div>

            <div className='navbar-right'>
                <i className="fa-solid fa-gear"></i>
                <i className="fa-solid fa-bell  bg-blue-500"></i>
                <i className="fa-solid fa-right-from-bracket"></i>
            </div>
        </nav>
    )
}

export default Navbar;
