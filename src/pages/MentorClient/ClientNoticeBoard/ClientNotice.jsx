import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import "./clientNotice.css";



import Blog1 from '../../../assets/Rectangle 5 (1).png';

import Blog2 from '../../../assets/Rectangle 6 (1).png';



import ClientSidebar from '../ClientSidebar/ClientSidebar.jsx';
import MobileNav from '../ClientMobileNav/ClientMobileNav.jsx';
import ClientNavbar from '../ClientNavbar/ClientNavbar.jsx';




function ClientNotice() {
    return (

        <div className='notice_board_body flex gap-1'>



            <div className="max-sm:hidden  ">
                <ClientSidebar />
            </div>
            <div className='w-[80%] notice_board_body_main  ml-[30px] max-sm:w-[100%] max-sm:ml-[0px]' >

                {/* <div className="sm:hidden  ml-[10px]">  <MobileNav /> </div> */}
                <div className="">
                    <ClientNavbar Board Navtext={"Notice Board"} />
                </div>

                <div className=' w-[100%]'>

                    <div className='notice_board_left_part max-sm:p-[10px]'>
                        <p className='text-lg font-bold mt-3'>Latest Notice</p>

                        <div className=' md:h-[85vh] md:overflow-y-auto'>
                            <div className='flex-col justify-center rounded-lg items-center  '>
                                <div className='notice_board_blog1'>
                                    <img className='ml-[10px] max-sm:w-[100px] max-sm:h-[100px] max-sm:flex max-sm:justifi-center max-sm:items-center' src={Blog1} />
                                    <div className='notice_board_header_part'>
                                        <div className='notice_board_blogHeader'>
                                            <h5 className='font-medium mt-[15px] text-[20px]'>Hay When You Need It</h5>
                                            {/* <FontAwesomeIcon icon={faBookmark} /> */}
                                        </div>

                                        <p className='notice_board_blog_cotesion text-[14px] mt-[20px] p-0'>it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,</p>
                                        <div className='flex justify-between'>
                                            <p className='noticeBoardName text-[14px]'>George Washington</p>
                                            <p className='noticeBoardDate text-[14px] mt-[0]'>Thurday 09 2022</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                         
                           


                        </div>



                    </div>
                </div>


            </div>
        </div>
    )
}

export default ClientNotice
