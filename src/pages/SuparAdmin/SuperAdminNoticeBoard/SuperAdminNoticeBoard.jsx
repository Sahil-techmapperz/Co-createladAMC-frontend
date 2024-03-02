import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import "./superAdminNoticeBoard.css";
// import '../../components/Sidebar.jsx';
import Blog1 from '../../../assets/Rectangle 5 (1).png';
import Blog2 from '../../../assets/Rectangle 6 (1).png';

import { Link } from 'react-router-dom';
import SuperAdminSide from '../SuperAdminSide/SuperAdminSide';
import SuperAdminNavbar from '../SuperAdminNav/SuperAdminNav';


const articles = [
    {
        id: 1,
        classes: 'flex-col justify-center rounded-lg items-center p-2',
        imageSrc: Blog1,
        title: 'Hay When You Need It',
        icon: faBookmark,
        description: "it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,",
        author: 'George Washington',
        date: 'Thurday 09 2022',
    },
    {
        id: 2,
        classes: 'flex-col justify-center rounded-lg items-center p-2',
        imageSrc: Blog2,
        title: 'Hay When You Need It',
        icon: faBookmark,
        description: "it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,",
        author: 'George Washington',
        date: 'Thurday 09 2022',
    },
    {
        id: 3,
        classes: 'flex-col justify-center rounded-lg items-center p-2',
        imageSrc: Blog1,
        title: 'Hay When You Need It',
        icon: faBookmark,
        description: "it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,",
        author: 'George Washington',
        date: 'Thurday 09 2022',
    },
    {
        id: 4,
        classes: 'flex-col justify-center rounded-lg items-center p-2',
        imageSrc: Blog1,
        title: 'Hay When You Need It',
        icon: faBookmark,
        description: "it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,",
        author: 'George Washington',
        date: 'Thurday 09 2022',
    }
];

function SuperAdminNoticeBoard() {
    return (

        <div className='flex gap-[30px] bg-gray-100'>
            <div className="max-sm:hidden  ">
                <SuperAdminSide liname={"Notice Board"} />
            </div>
            <div className='notice_board_body_main mr-[12px] h-[100vh] overflow-y-hidden' >

                <SuperAdminNavbar Board Navtext={"Notice Board"} />
                {/* <div className='m-[20px] text-[18px] font-[600]'>
                    <Link to={"/"}>Dashboard</Link> &gt; Notice Board
                </div> */}
                <div className=' mt-[5px] flex justify-between  items-center '>
                    <p className='text-lg font-bold'>All Notice</p>
                    <button className='w-[130px] h-[50px] text-white p-[5px] border rounded-lg bg-blue-500'>Add New Notice</button>
                </div>
                <div className='notice_board_main_container w-full'>
                    <div className='overflow-x-auto md:h-[75vh]'>

                        {articles.map((article) => (
                            <div key={article.id} className={`${article.classes}`}>
                                <div className='notice_board_blog1 '>

                                    {/* Ensure imageSrc is correctly handled. If it's a path string, use it directly. If it's a variable representing an imported image, make sure it's imported at the top. */}
                                    <img src={article.imageSrc} alt={article.title} className='ml-[10px] max-sm:w-[100px] max-sm:h-[100px] max-sm:flex max-sm:justifi-center max-sm:items-center' />

                                    <div className='notice_board_header_part'>
                                        <div className='notice_board_blogHeader'>
                                            <h5 className='font-bold'>{article.title}</h5>
                                            {/* Ensure the icon prop is correctly used. If `article.icon` is a variable, it should reference an imported icon object. */}
                                            {/* <FontAwesomeIcon icon={article.icon} /> */}
                                        </div>

                                        <p className='notice_board_blog_cotesion text-gray-600 text-[14px] mt-[25px] p-0'>{article.description}</p>
                                        <div className='flex justify-between mt-[30px]'>
                                            <p className='noticeBoardName text-[14px]'>{article.author}</p>
                                            <p className='noticeBoardDate text-[14px] mt-[0]'>{article.date}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </div>
    )
}

export default SuperAdminNoticeBoard
