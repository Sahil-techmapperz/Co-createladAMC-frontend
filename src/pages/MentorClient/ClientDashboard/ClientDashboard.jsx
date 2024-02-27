import React from 'react'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
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
            name: "Sahil laskar",
            specialization: "Computer Programming",
            rating: 4,
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

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
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
    };


    const CustomLeftArrow = ({ onClick }) => (
        <button onClick={onClick} className="absolute left-0 z-10 cursor-pointer bg-black text-white">
            {/* You can use an icon or text inside the button */}
            Left
        </button>
    );

    const CustomRightArrow = ({ onClick }) => (
        <button onClick={onClick} className="absolute right-0 z-10 cursor-pointer bg-black text-white">
            {/* You can use an icon or text inside the button */}
            Right
        </button>
    );




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
                            <div className='pt-[10px] pr-[10px] pb-[10px] pl-[0px] topMentor '>
                                <Carousel
                                    responsive={responsive}
                                    swipeable={true}
                                    draggable={false}
                                    showDots={true}
                                    infinite={true}
                                    autoPlay={true}
                                    autoPlaySpeed={3000}
                                    keyBoardControl={true}
                                    customTransition="all .5"
                                    transitionDuration={500}
                                    containerClass="carousel-container"
                                    removeArrowOnDeviceType={["tablet", "mobile"]}
                                    dotListClass="custom-dot-list-style "
                                    itemClass="mx-2"
                                >
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
                                                        <span className="text-blue-500">
                                                            {mentor.price.current}
                                                        </span>
                                                        <span className="text-gray-600"><del>{mentor.price.original}</del></span>
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
                                                        <span className="text-gray-600">{mentor.studentCount} Students</span>
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
                                </Carousel>
                            </div>
                        </div>

                        <div className='max-md:m-[15px]'>
                            <div className='flex justify-between mt-[6px] pt-[20px]  pr-[20px] pb-[2px] pl-[0px]'>
                                <h1 className='text-xl  font-bold'>Recommended Mentor</h1>
                                <h1 className=' text-blue-500 font-bold flex justify-center items-center'><u>View All</u></h1>
                            </div>

                            <div className='pt-[10px] pr-[10px] pb-[10px] pl-[0px] topMentor '>
                                <Carousel
                                    responsive={responsive}
                                    swipeable={true}
                                    draggable={false}
                                    showDots={true}
                                    infinite={true}
                                    autoPlay={true}
                                    autoPlaySpeed={3000}
                                    keyBoardControl={true}
                                    customTransition="all .5"
                                    transitionDuration={500}
                                    containerClass="carousel-container"
                                    removeArrowOnDeviceType={["tablet", "mobile"]}
                                    dotListClass="custom-dot-list-style"
                                    itemClass="mx-2"
                                >
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
                                                        <span className="text-blue-500">
                                                            {mentor.price.current}
                                                        </span>
                                                        <span className="text-gray-600"><del>{mentor.price.original}</del></span>
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
                                                        <span className="text-gray-600">{mentor.studentCount} Students</span>
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
                                </Carousel>
                            </div>
                        </div>

                        <div className='max-md:m-[15px]'>
                            <div className='flex justify-between mt-[6px] pt-[20px]  pr-[20px] pb-[2px] pl-[0px]'>
                                <h1 className='text-xl  font-bold'>Most Viewed Mentor</h1>
                                <h1 className=' text-blue-500 font-bold flex justify-center items-center'><u>View All</u></h1>
                            </div>

                            <div className='pt-[10px] pr-[10px] pb-[10px] pl-[0px] topMentor '>
                                <Carousel
                                    responsive={responsive}
                                    swipeable={true}
                                    draggable={false}
                                    showDots={true}
                                    infinite={true}
                                    autoPlay={true}
                                    autoPlaySpeed={3000}
                                    keyBoardControl={true}
                                    customTransition="all .5"
                                    transitionDuration={500}
                                    containerClass="carousel-container"
                                    removeArrowOnDeviceType={["tablet", "mobile"]}
                                    dotListClass="custom-dot-list-style"
                                    itemClass="mx-2"
                                >
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
                                                        <span className="text-blue-500">
                                                            {mentor.price.current}
                                                        </span>
                                                        <span className="text-gray-600"><del>{mentor.price.original}</del></span>
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
                                                        <span className="text-gray-600">{mentor.studentCount} Students</span>
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
                                </Carousel>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default ClientDashboard
