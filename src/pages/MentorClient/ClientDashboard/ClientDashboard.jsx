import React from 'react'
import { FaStar, FaStarHalfAlt,FaCoins } from "react-icons/fa";
import ClientNavbar from '../ClientNavbar/ClientNavbar'
import { IoLocation } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
// import Photo1 from '../Assets/Rectangle 6.png'
import Photo1 from '../MentorAssets/Rectangle 6.png'
import './clientDashboard.css'
import MobileNav from '../../../components/Mobile/MobileNav';
import ClientSidebar from '../ClientSidebar/ClientSidebar';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const ClientDashboard = () => {

    const mentors = [
        
        {
            name: "Lincoln Siphron",
            specialization: "Web Development",
            rating: 4.9,
            price: {
                current: "450",
                original: "500"
            },
            location: "Berlin, Germany",
            studentCount: 389,
            photo: "https://as2.ftcdn.net/v2/jpg/03/33/85/93/1000_F_333859358_gZclF8xXURJXUtaIxRJPnDt3BzKMzeFW.jpg", // Replace with the actual path
            stars: 5,
        },
        {
            name: "Mia Wong",
            specialization: "Data Science",
            rating: 4.7,
            price: {
                current: "500",
                original: "550"
            },
            location: "San Francisco, USA",
            studentCount: 305,
            photo: "https://t4.ftcdn.net/jpg/04/36/52/69/360_F_436526998_I7I3xTi6tjLs1AEHAUWOR0zlmZz4zEV8.jpg", // Replace with the actual path
            stars: 5,
        },
        // Adding a new mentor with unique details
        {
            name: "Alex Johnson",
            specialization: "UI/UX Design",
            rating: 4.8,
            price: {
                current: "420",
                original: "470"
            },
            location: "London, UK",
            studentCount: 256,
            photo: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg", // Replace with the actual path
            stars: 5,
        }
    ];




    return (
        <>
            <div className='flex gap-2'>
                <div className="max-sm:hidden ">
                    <ClientSidebar liname={"clientDashboard"} />
                </div>
                <div className='w-[100%] max-sm:ml-[0px]  h-[100vh] overflow-y-hidden'>
                    <ClientNavbar Navtext={"Dashboard"} />
                    <div className='w-[100%] h-[90vh] overflow-y-auto'>
                        <div className='max-md:m-[15px]'>
                            <div className='flex justify-between mt-[6px] pt-[20px]  pr-[20px] pb-[2px] pl-[0px]'>
                                <h1 className='text-xl  font-bold'>Top Mentor</h1>
                                <h1 className=' text-blue-500 font-bold flex justify-center items-center'><u>View All</u></h1>
                            </div>
                            <div className='pt-[10px] pr-[10px] pb-[10px] pl-[0px] topMentor grid grid-cols-1 md:grid-cols-3 gap-2'>
                               
                                    {mentors.map((mentor, index) => (
                                        <div key={index} className="mt-3 max-w-sm rounded overflow-hidden shadow-lg bg-white mb-4" style={{ maxHeight: '350px' }}>
                                            <img className="w-full" src={mentor.photo} alt="" style={{ height: '150px', objectFit: 'cover' }} />
                                            <div className="px-4 py-2">
                                                <div className="font-bold text-xl mb-1">{mentor.name}</div>
                                                <p className="text-gray-700 text-base mb-1">
                                                    {mentor.specialization}
                                                </p>
                                                <div className="flex justify-between pt-2 pb-1">
                                                    <div className="flex items-center mb-1">
                                                        <span className="flex text-yellow-400">
                                                            {[...Array(mentor.stars - 1)].map((_, i) => <FaStar key={i} />)}
                                                            {mentor.rating % 1 !== 0 && <FaStarHalfAlt />}
                                                        </span>
                                                        <span className="ml-2 text-gray-600">{mentor.rating} Rating</span>
                                                    </div>
                                                    <div className="flex gap-2 items-center">
                                                        <span className="text-blue-500 flex gap-2 justify-center items-center">
                                                            <FaCoins/>
                                                            {mentor.price.current}
                                                        </span>
                                                       
                                                    </div>
                                                </div>
                                                <div className="flex justify-between pt-2 pb-1">
                                                    <div className="flex items-center mb-1">
                                                        <span className="flex text-gray-400">
                                                            <IoLocation />
                                                        </span>
                                                        <span className="ml-2 text-gray-600">{mentor.location}</span>
                                                    </div>
                                                    <div className="flex gap-2 items-center">
                                                        <span className="text-gray-600">
                                                            <IoMdContact />
                                                        </span>
                                                        <span className="text-gray-600">{mentor.studentCount} {" "}Mentees</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                    Know more
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                               
                            </div>
                        </div>

                        <div className='max-md:m-[15px]'>
                            <div className='flex justify-between mt-[6px] pt-[20px]  pr-[20px] pb-[2px] pl-[0px]'>
                                <h1 className='text-xl  font-bold'>Recommended Mentor</h1>
                                <h1 className=' text-blue-500 font-bold flex justify-center items-center'><u>View All</u></h1>
                            </div>

                            <div className='pt-[10px] pr-[10px] pb-[10px] pl-[0px] topMentor grid grid-cols-1 md:grid-cols-3 gap-2'>
                               
                                    {mentors.map((mentor, index) => (
                                        <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg bg-white mb-4" style={{ maxHeight: '350px' }}>
                                            <img className="w-full" src={mentor.photo} alt="" style={{ height: '150px', objectFit: 'cover' }} />
                                            <div className="px-4 py-2">
                                                <div className="font-bold text-xl mb-1">{mentor.name}</div>
                                                <p className="text-gray-700 text-base mb-1">
                                                    {mentor.specialization}
                                                </p>
                                                <div className="flex justify-between pt-2 pb-1">
                                                    <div className="flex items-center mb-1">
                                                        <span className="flex text-yellow-400">
                                                            {/* Here, dynamically render stars based on mentor.rating */}
                                                            {[...Array(mentor.stars)].map((_, i) => <FaStar key={i} />)}
                                                            {mentor.rating % 1 !== 0 && <FaStarHalfAlt />}
                                                        </span>
                                                        <span className="ml-2 text-gray-600">{mentor.rating} Rating</span>
                                                    </div>
                                                    <div className="flex gap-2 items-center">
                                                    <span className="text-blue-500 flex gap-2 justify-center items-center">
                                                            <FaCoins/>
                                                            {mentor.price.current}
                                                        </span>
                                                        
                                                    </div>
                                                </div>
                                                <div className="flex justify-between pt-2 pb-1">
                                                    <div className="flex items-center mb-1">
                                                        <span className="flex text-gray-400">
                                                            <IoLocation />
                                                        </span>
                                                        <span className="ml-2 text-gray-600">{mentor.location}</span>
                                                    </div>
                                                    <div className="flex gap-2 items-center">
                                                        <span className="text-gray-600">
                                                            <IoMdContact />
                                                        </span>
                                                        <span className="text-gray-600">{mentor.studentCount} {" "}Mentees</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                    Know more
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                              
                            </div>
                        </div>

                        <div className='max-md:m-[15px]'>
                            <div className='flex justify-between mt-[6px] pt-[20px]  pr-[20px] pb-[2px] pl-[0px]'>
                                <h1 className='text-xl  font-bold'>Most Viewed Mentor</h1>
                                <h1 className=' text-blue-500 font-bold flex justify-center items-center'><u>View All</u></h1>
                            </div>

                            <div className='pt-[10px] pr-[10px] pb-[10px] pl-[0px] topMentor grid grid-cols-1 md:grid-cols-3 gap-2'>
                                
                                    {mentors.map((mentor, index) => (
                                        <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg bg-white mb-4" style={{ maxHeight: '350px' }}>
                                            <img className="w-full" src={mentor.photo} alt="" style={{ height: '150px', objectFit: 'cover' }} />
                                            <div className="px-4 py-2">
                                                <div className="font-bold text-xl mb-1">{mentor.name}</div>
                                                <p className="text-gray-700 text-base mb-1">
                                                    {mentor.specialization}
                                                </p>
                                                <div className="flex justify-between pt-2 pb-1">
                                                    <div className="flex items-center mb-1">
                                                        <span className="flex text-yellow-400">
                                                            {/* Here, dynamically render stars based on mentor.rating */}
                                                            {[...Array(mentor.stars)].map((_, i) => <FaStar key={i} />)}
                                                            {mentor.rating % 1 !== 0 && <FaStarHalfAlt />}
                                                        </span>
                                                        <span className="ml-2 text-gray-600">{mentor.rating} Rating</span>
                                                    </div>
                                                    <div className="flex gap-2 items-center">
                                                    <span className="text-blue-500 flex gap-2 justify-center items-center">
                                                            <FaCoins/>
                                                            {mentor.price.current}
                                                        </span>
                                                       
                                                    </div>
                                                </div>
                                                <div className="flex justify-between pt-2 pb-1">
                                                    <div className="flex items-center mb-1">
                                                        <span className="flex text-gray-400">
                                                            <IoLocation />
                                                        </span>
                                                        <span className="ml-2 text-gray-600">{mentor.location}</span>
                                                    </div>
                                                    <div className="flex gap-2 items-center">
                                                        <span className="text-gray-600">
                                                            <IoMdContact />
                                                        </span>
                                                        <span className="text-gray-600">{mentor.studentCount} {" "}Mentees</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                    Know more
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                               
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default ClientDashboard
