import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import "../CSS/NoticeBoard.css";
import '../components/Sidebar.jsx';


import Blog1 from '../assets/Rectangle 5 (1).png';
import Blog2 from '../assets/Rectangle 6 (1).png';
import Sidebar from '../components/Sidebar.jsx';
import MobileNav from '../components/Mobile/MobileNav.jsx';
import Navbar from '../components/Navbar.jsx';




function NoticeBoard() {
    return (

        <div className='notice_board_body'>



            <div className="max-sm:hidden  ">
                <Sidebar />
            </div>
            <div className='notice_board_body_main  ml-[30px]' >

                <div className="sm:hidden  ml-[10px]">  <MobileNav /> </div>
                <div className="max-sm:hidden mt-0">
                    <Navbar Board Navtext={"Notice Board"} />
                </div>

                <div className='notice_board_main_container '>

                    <div className='notice_board_left_part'>
                        <p className='text-lg font-bold mt-3'>Latest Notice</p>
                        <div className='flex-col justify-center rounded-lg items-center '>
                            <div className='notice_board_blog1'>
                                <div>
                                    <img src={Blog1} />
                                </div>
                                <div className='notice_board_header_part'>
                                    <div className='notice_board_blogHeader'>
                                        <h5 className='font-bold'>Hay When You Need It</h5>
                                        <FontAwesomeIcon icon={faBookmark} />
                                    </div>

                                    <p className='notice_board_blog_cotesion'>it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,</p>

                                    <p className='noticeBoardName'>George Washington</p>
                                    <p className='noticeBoardDate'>Thurday 09 2022</p>
                                </div>
                            </div>

                        </div>


                    </div>

                </div>
                <div className='notice_board_main_container rounded-lg'>

                    <div className='notice_board_left_part rounded-lg'>
                        <p className='text-lg font-bold mt-3'>Latest Notice</p>
                        <div className='flex-col justify-center rounded-lg items-center '>
                            <div className='notice_board_blog1'>
                                <div>
                                    <img src={Blog1} />
                                </div>
                                <div className='notice_board_header_part'>
                                    <div className='notice_board_blogHeader'>
                                        <h5 className='font-bold'>Hay When You Need It</h5>
                                        <FontAwesomeIcon icon={faBookmark} />
                                    </div>

                                    <p className='notice_board_blog_cotesion'>it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,</p>

                                    <p className='noticeBoardName'>George Washington</p>
                                    <p className='noticeBoardDate'>Thurday 09 2022</p>
                                </div>
                            </div>

                        </div>


                    </div>

                </div>

            </div>
        </div>
    )
}

export default NoticeBoard
