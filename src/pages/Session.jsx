import React, { useState } from 'react'
import '../CSS/MessageChat.css';
import '../components/Sidebar.jsx';
import Sidebar from '../components/Sidebar.jsx';
import Video1 from '../assets/Video.png';
import { PiBookOpen } from "react-icons/pi";
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile1 from '../assets/web.png';
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import MobileNav from '../components/Mobile/MobileNav.jsx';
import Navbar from '../components/Navbar.jsx';
import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa6";
import AddSessionModal from '../components/AddSessionModal.jsx';

const categories = {
    'all Sessions': [
        {
            title: "Session with XYZ",
            details: {
                classTime: "06:45 - 07:15",
                classDay: "Wednesday, 25 Oct",
                scheduledTime: "04:23:12:23",
            },
            member: {
                name: "Kaiya Workman",
                profileImage: "Profile1", // Placeholder for actual image path
            },
        },
        {
            title: "Session with ABC",
            details: {
                classTime: "09:00 - 09:30",
                classDay: "Monday, 22 Oct",
                scheduledTime: "03:12:45:67",
            },
            member: {
                name: "Jordan Lee",
                profileImage: "Profile2", // Placeholder for actual image path
            },
        },
    ],
    scheduled: [
        {
            title: "Scheduled Session with LMN",
            details: {
                classTime: "11:00 - 11:45",
                classDay: "Friday, 27 Oct",
                scheduledTime: "05:16:20:30",
            },
            member: {
                name: "Alex Smith",
                profileImage: "Profile3", // Placeholder for actual image path
            },
        },
    ],
    rescheduled: [
        // This category is empty for now but can be populated similarly
    ],
    complete: [
        {
            title: "Completed Session with DEF",
            details: {
                classTime: "14:00 - 14:45",
                classDay: "Tuesday, 24 Oct",
                scheduledTime: "02:14:18:24",
            },
            member: {
                name: "Taylor Brown",
                profileImage: "Profile4", // Placeholder for actual image path
            },
        },
    ],
    cancel: [
        // This category is empty for now but can be populated similarly
    ],
};

const lastWeekSessions = [
    {
        type: "Biology",
        date: "27 March 2020, at 12:30 PM",
        earnings: 2350,
    },
    {
        type: "Mathematics",
        date: "26 March 2020, at 10:00 AM",
        earnings: 2000,
    },
    {
        type: "Physics",
        date: "25 March 2020, at 2:30 PM",
        earnings: 2200,
    },
    {
        type: "Chemistry",
        date: "24 March 2020, at 11:00 AM",
        earnings: 2100,
    },
    // Add more last week sessions as needed
];

const Session = () => {
    const [currentCategory, setCurrentCategory] = useState('all Sessions');
    const [sessions, setSessions] = useState(categories);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // Function to handle adding a new session
    const addNewSession = (sessionData) => {
        // Implement logic to add the new session to your sessions state
        console.log(sessionData); // For now, just log it to see the data
    };

    // Function to handle category change
    const handleCategoryChange = (category) => {
        setCurrentCategory(category);
    };

    const handleDelete = (category, index) => {
        // Show confirmation dialog
        const isConfirmed = window.confirm("Are you sure you want to delete this session?");

        // Proceed with deletion if confirmed
        if (isConfirmed) {
            const updatedSessions = { ...categories }; // Assuming the state variable is named 'categories', update accordingly if different
            updatedSessions[category].splice(index, 1);
            setSessions(updatedSessions); // Assuming the setter function for your sessions state is setCategories
        }
    };



    // Dummy function for reschedule, implement your logic as needed
    const handleReschedule = (category, index) => {
        console.log('Reschedule logic here');
        // Here you would typically show a modal or a form to select a new date/time
        // and then update the session details accordingly.
    };



    return (
        <div className='flex gap-2 overflow-hidden'>
            <div className='max-sm:hidden'><Sidebar liname={"Session"}/></div>
            <div className='w-full  py-[15px]'>
                <Navbar Navtext={"Session"} />
                <div className='m-[20px] text-[18px] font-[600]'>
                    <Link to={"/"}>Dashboard</Link> &gt; Session
                </div>

                {/* Video and upcoming session info omitted for brevity */}

                <div className='flex  max-md:flex-col gap-6 my-2'>
                    <div className='md:w-[50vw] w-full shadow-md md:h-[75VH] overflow-y-auto p-4 rounded-md bg-gray-50'>
                        {/* Buttons and add new session link omitted for brevity */}
                        <div className='flex my-4 overflow-x-auto'>
                            <div className='flex space-x-4 min-w-max'>
                                {/* Dynamically generate category buttons */}
                                {Object.keys(categories).map((category, index) => (
                                    <button
                                        key={index}
                                        className={`w-[120px] h-10 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-md shadow-md ${currentCategory === category ? 'active' : 'hover:from-blue-600 hover:to-blue-700'
                                            } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 ease-in-out`}
                                        onClick={() => handleCategoryChange(category)}
                                    >
                                        {category.charAt(0).toUpperCase() + category.slice(1)} {/* Capitalize the first letter */}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className='flex flex-col gap-4 w-[100%] overflow-hidden'>
                            <div className='flex justify-between'>
                                <p style={{ textTransform: 'uppercase' }}>{currentCategory}</p>

                                {/* <div className='flex gap-2 justify-center items-center cursor-pointer font-[600] text-[#0078C5]' onClick={openModal}><FaPlus /> Add New Sessions</div> */}
                                <div className='flex gap-2 justify-center items-center cursor-pointer font-[600] text-[#0078C5]' ><FaPlus /> Add New Sessions</div>

                                <AddSessionModal isOpen={isModalOpen} onClose={closeModal} onAdd={addNewSession} />
                            </div>
                            {categories[currentCategory].map((session, index) => (
                                <div key={index} className='rounded-md flex max-md:flex-col justify-around bg-white shadow p-4'>
                                    <div>
                                        <p className='font-bold'>{session.title}</p>
                                        <ul className='list-disc pl-5'>
                                            <li>Class Time: <b>{session.details.classTime}</b></li>
                                            <li>Class Day: <b>{session.details.classDay}</b></li>
                                            <li>Scheduled Time: <b>{session.details.scheduledTime}</b></li>
                                        </ul>
                                    </div>

                                    <div>
                                        <p className='font-bold'>Member</p>
                                        <div className='flex items-center gap-2 mt-[10px]'>
                                            <img className='w-10 h-10 rounded-full' src={session.member.profileImage} alt='Member Profile' />
                                            <p>{session.member.name}</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-4 mt-2 justify-center items-center'>
                                        <div
                                            className='flex gap-1 justify-center items-center cursor-pointer text-red-600'
                                            onClick={() => handleDelete(currentCategory, index)}
                                        >
                                            <MdDelete />
                                            <p>DELETE</p>
                                        </div>
                                        <div
                                            className='flex gap-1 justify-center items-center cursor-pointer hover:text-green-600'
                                            onClick={() => handleReschedule(currentCategory, index)}
                                        >
                                            <MdEdit />
                                            <p>Reschedule</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Last week's sessions mapping */}
                    <div className='md:w-[30vw] w-full shadow-md md:h-[75vh] overflow-y-auto p-4 rounded-md'>
                        <div className='lastWeekSection1'>
                            <p>Last Week Sessions</p>
                            <div>
                                <p>23 - 30 March 2020</p>
                            </div>
                        </div>
                        {lastWeekSessions.map((session, index) => (
                            <div key={index} className='lastWeekNews mt-[10px]'>
                                <div className='classNews'>
                                    <div className='classEdit border-2 border-red-600'><RiArrowDropDownLine /></div>
                                    <div>
                                        <p><b>{session.type}</b></p>
                                        <p>{session.date}</p>
                                    </div>
                                </div>
                                <div>
                                    <p>Earning</p>
                                    <div className='text-green-500'>
                                        {session.earnings}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Session;
