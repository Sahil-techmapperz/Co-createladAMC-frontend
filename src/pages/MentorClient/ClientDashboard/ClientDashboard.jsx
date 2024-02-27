import React from 'react'
import { FaStar } from "react-icons/fa";
import Sidebar from '../../../components/Sidebar'
import ClientNavbar from '../ClientNavbar/ClientNavbar'
import { IoLocation } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
// import Photo1 from '../Assets/Rectangle 6.png'
import Photo1 from '../MentorAssets/Rectangle 6.png'
import './clientDashboard.css'
import MobileNav from '../../../components/Mobile/MobileNav';
import ClientSidebar from '../ClientSidebar/ClientSidebar';
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';

const ClientDashboard = () => {



    const responsive = {
        superLargeDesktop: {
            // the number of visible items
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }
    const mentors = [
        {
            id: 1,
            name: 'Lincoln Siphron',
            subject: 'Computer Programming',
            rating: 4.9,
            price: 'CCL400',
            originalPrice: 'CCL480',
            location: 'Paris, France',
            students: 412,
        },
        {
            id: 1,
            name: 'Lincoln Siphron',
            subject: 'Computer Programming',
            rating: 4.9,
            price: 'CCL400',
            originalPrice: 'CCL480',
            location: 'Paris, France',
            students: 412,
        },
        {
            id: 1,
            name: 'Lincoln Siphron',
            subject: 'Computer Programming',
            rating: 4.9,
            price: 'CCL400',
            originalPrice: 'CCL480',
            location: 'Paris, France',
            students: 412,
        },
        {
            id: 1,
            name: 'Lincoln Siphron',
            subject: 'Computer Programming',
            rating: 4.9,
            price: 'CCL400',
            originalPrice: 'CCL480',
            location: 'Paris, France',
            students: 412,
        },
        {
            id: 1,
            name: 'Lincoln Siphron',
            subject: 'Computer Programming',
            rating: 4.9,
            price: 'CCL400',
            originalPrice: 'CCL480',
            location: 'Paris, France',
            students: 412,
        },
        {
            id: 1,
            name: 'Lincoln Siphron',
            subject: 'Computer Programming',
            rating: 4.9,
            price: 'CCL400',
            originalPrice: 'CCL480',
            location: 'Paris, France',
            students: 412,
        },
        {
            id: 1,
            name: 'Lincoln Siphron',
            subject: 'Computer Programming',
            rating: 4.9,
            price: 'CCL400',
            originalPrice: 'CCL480',
            location: 'Paris, France',
            students: 412,
        },


    ];
    return (
        <>
            <div className='flex gap-[30px] h-[100vh] md:overflow-y-hidden'>
                <div className="max-sm:hidden ">
                    <ClientSidebar />
                </div>
                <div className='w-[100%]    max-sm:ml-[0px] max-sm:w-[100%]'>
                    <ClientNavbar Navtext={"Dashboard"} className='w-[98%]' />



                    <div className='max-md:m-[15px] '>

                        <div className='flex justify-between mt-[6px] pt-[20px]  pr-[20px] pb-[2px] pl-[0px]'>
                            <h1 className='text-xl  font-bold'>Top Mentor</h1>
                            <h1 className=' text-blue-500 font-bold flex justify-center items-center'><u>View All</u></h1>
                        </div>

                        {/* <div className="grid grid-cols-1 items-center md:grid-cols-3 gap-4 pt-[10px] pr-[10px] pb-[10px] pl-[0px] topMentor md:h-[85vh] md:overflow-y-auto max-sm:h-[85hv] max-sm:overflow-y-auto"> */}
                            <Carousel responsive={responsive} infinite={true} draggable={false}>
                                {mentors.map((mentor) => (
                                    <div key={mentor.id} className="border-black shadow rounded-xl topMentorTc">
                                        <div className="flex justify-center items-center">
                                            <img className='w-[95%] object-contain' src={Photo1} alt={mentor.name} />
                                        </div>
                                        <div className="p-[10px]">
                                            <h1 className="text-lg font-bold">{mentor.name}</h1>
                                            <p className="text-xs text-gray-500">{mentor.subject}</p>
                                            <ul className="flex justify-between gap-[18px]">
                                                <li className="flex justify-center items-center iconmenu1">
                                                    {Array.from({ length: 5 }, (_, i) => (
                                                        <FaStar key={i} />
                                                    )).slice(0, mentor.rating)}
                                                </li>
                                                <li className="text-xs text-gray-500">{mentor.rating} Rating</li>
                                                <li className="text-xs font-bold text-blue-500">{mentor.price}</li>
                                                <li className="text-xs font-bold text-gray-500">
                                                    <del>{mentor.originalPrice}</del>
                                                </li>
                                            </ul>
                                            <div className="flex justify-between mt-[10px]">
                                                <ul className="flex gap-[5px]">
                                                    <li className="flex justify-center items-center">
                                                        <IoLocation />
                                                    </li>
                                                    <li className="text-xs text-gray-500">{mentor.location}</li>
                                                </ul>
                                                <ul className="flex gap-[5px]">
                                                    <li className="flex justify-center text-[17px] items-center">
                                                        <IoMdContact />
                                                    </li>
                                                    <li className="text-xs text-gray-500">{mentor.students} Student</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <button className="text-center text-base font-bold text-white fo flex justify-center items-center bg-00c875 h-[60px] knowMore">
                                            <u>Know More</u>
                                        </button>
                                    </div>
                                ))}
                            </Carousel>
                        {/* </div> */}

                    </div>
                </div>
            </div>


        </>
    )
}

export default ClientDashboard
