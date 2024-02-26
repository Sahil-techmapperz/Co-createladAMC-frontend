import React from 'react'
import { FaStar } from "react-icons/fa";
import ClientNavbar from '../ClientNavbar/ClientNavbar'
import { IoLocation } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
// import Photo1 from '../Assets/Rectangle 6.png'
import Photo1 from '../MentorAssets/Rectangle 6.png'
import './clientDashboard.css'
import MobileNav from '../../../components/Mobile/MobileNav';
import ClientSidebar from '../ClientSidebar/ClientSidebar';


const ClientDashboard = () => {

    const mentors = [
        {
            name: "Lincoln Siphron",
            specialization: "Computer Programming",
            rating: 4.9,
            price: {
                current: "CCL400",
                original: "CCL480"
            },
            location: "Paris, France",
            studentCount: 412,
            photo: Photo1, // Update this path to the actual path of your image
            stars: 5, // Assuming 5 based on the HTML
        },
        {
            name: "Lincoln Siphron",
            specialization: "Computer Programming",
            rating: 4.9,
            price: {
                current: "CCL400",
                original: "CCL480"
            },
            location: "Paris, France",
            studentCount: 412,
            photo: Photo1, // Update this path to the actual path of your image
            stars: 5, // Assuming 5 based on the HTML
        },
        {
            name: "Lincoln Siphron",
            specialization: "Computer Programming",
            rating: 4.9,
            price: {
                current: "CCL400",
                original: "CCL480"
            },
            location: "Paris, France",
            studentCount: 412,
            photo: Photo1, // Update this path to the actual path of your image
            stars: 5, // Assuming 5 based on the HTML
        },
        {
            name: "Lincoln Siphron",
            specialization: "Computer Programming",
            rating: 4.9,
            price: {
                current: "CCL400",
                original: "CCL480"
            },
            location: "Paris, France",
            studentCount: 412,
            photo: Photo1, // Update this path to the actual path of your image
            stars: 5, // Assuming 5 based on the HTML
        },
        {
            name: "Lincoln Siphron",
            specialization: "Computer Programming",
            rating: 4.9,
            price: {
                current: "CCL400",
                original: "CCL480"
            },
            location: "Paris, France",
            studentCount: 412,
            photo: Photo1, // Update this path to the actual path of your image
            stars: 5, // Assuming 5 based on the HTML
        },
        {
            name: "Lincoln Siphron",
            specialization: "Computer Programming",
            rating: 4.9,
            price: {
                current: "CCL400",
                original: "CCL480"
            },
            location: "Paris, France",
            studentCount: 412,
            photo: Photo1, // Update this path to the actual path of your image
            stars: 5, // Assuming 5 based on the HTML
        },
        {
            name: "Lincoln Siphron",
            specialization: "Computer Programming",
            rating: 4.9,
            price: {
                current: "CCL400",
                original: "CCL480"
            },
            location: "Paris, France",
            studentCount: 412,
            photo: Photo1, // Update this path to the actual path of your image
            stars: 5, // Assuming 5 based on the HTML
        },
        {
            name: "Lincoln Siphron",
            specialization: "Computer Programming",
            rating: 4.9,
            price: {
                current: "CCL400",
                original: "CCL480"
            },
            location: "Paris, France",
            studentCount: 412,
            photo: Photo1, // Update this path to the actual path of your image
            stars: 5, // Assuming 5 based on the HTML
        },
        {
            name: "Lincoln Siphron",
            specialization: "Computer Programming",
            rating: 4.9,
            price: {
                current: "CCL400",
                original: "CCL480"
            },
            location: "Paris, France",
            studentCount: 412,
            photo: Photo1, // Update this path to the actual path of your image
            stars: 5, // Assuming 5 based on the HTML
        },
        {
            name: "Lincoln Siphron",
            specialization: "Computer Programming",
            rating: 4.9,
            price: {
                current: "CCL400",
                original: "CCL480"
            },
            location: "Paris, France",
            studentCount: 412,
            photo: Photo1, // Update this path to the actual path of your image
            stars: 5, // Assuming 5 based on the HTML
        },
        {
            name: "Lincoln Siphron",
            specialization: "Computer Programming",
            rating: 4.9,
            price: {
                current: "CCL400",
                original: "CCL480"
            },
            location: "Paris, France",
            studentCount: 412,
            photo: Photo1, // Update this path to the actual path of your image
            stars: 5, // Assuming 5 based on the HTML
        },
        {
            name: "Lincoln Siphron",
            specialization: "Computer Programming",
            rating: 4.9,
            price: {
                current: "CCL400",
                original: "CCL480"
            },
            location: "Paris, France",
            studentCount: 412,
            photo: Photo1, // Update this path to the actual path of your image
            stars: 5, // Assuming 5 based on the HTML
        },
        
    ];


    return (
        <>
            <div className='flex '>
                <div className="max-sm:hidden ">
                    <ClientSidebar />
                </div>
                <div className='w-[100%] ml-[30px] max-sm:ml-[0px]  h-[100vh] overflow-y-hidden'>
                    <ClientNavbar Navtext={"Dashboard"} />
                    <div className='max-md:m-[15px]'>

                        <div className='flex justify-between mt-[6px] pt-[20px]  pr-[20px] pb-[2px] pl-[0px]'>
                            <h1 className='text-xl  font-bold'>Top Mentor</h1>
                            <h1 className=' text-blue-500 font-bold flex justify-center items-center'><u>View All</u></h1>
                        </div>

                        <div className='grid grid-cols-1 items-center md:grid-cols-3 gap-2 pt-[10px] pr-[10px] pb-[10px] pl-[0px] topMentor md:h-[85vh] md:overflow-y-auto max-sm:h-[85vh] max-sm:overflow-y-auto'>
                            {mentors.map((mentor, index) => (
                                <div key={index} className='border-black shadow rounded-xl topMentorTc'>
                                    <div className='flex justify-center items-center mt-[15px]'>
                                        {/* Make sure the src path is correct */}
                                        <img className='w-[95%]'  src={mentor.photo} alt={mentor.name} />
                                    </div>
                                    <div className='p-[10px]'>
                                        <h1 className='text-lg font-bold'>{mentor.name}</h1>
                                        <p className='text-xs text-gray-500'>{mentor.specialization}</p>
                                        <div className='flex justify-between mt-[8px]'>
                                            <ul className='flex gap-[18px]'>
                                                <li className='flex justify-center items-center iconmenu1'>
                                                    {/* Dynamically render stars based on mentor's rating */}
                                                    {Array.from({ length: mentor.stars }, (_, i) => (
                                                        <FaStar key={i} />
                                                    ))}
                                                </li>
                                                <li className='text-xs text-gray-500'>{mentor.rating} Rating</li>
                                                <li className='text-xs font-bold text-blue-500'>{mentor.price.current}</li>
                                                <li className='text-xs font-bold text-gray-500'><del>{mentor.price.original}</del></li>
                                            </ul>
                                        </div>
                                        <div className='flex justify-between mt-[10px]'>
                                            <ul className='flex gap-[5px]'>
                                                <li className='flex justify-center items-center'><IoLocation /></li>
                                                <li className='text-xs text-gray-500'>{mentor.location}</li>
                                            </ul>
                                            <ul className='flex gap-[5px]'>
                                                <li className='flex justify-center text-[17px] items-center'><IoMdContact /></li>
                                                <li className='text-xs text-gray-500'>{mentor.studentCount} Student</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <button className='text-center text-base font-bold text-white flex justify-center items-center bg-00c875 h-[60px] knowMore'><u>Know More</u></button>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default ClientDashboard
