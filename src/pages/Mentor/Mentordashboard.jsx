import React from "react";
import "./../../CSS/mentor_dashboard.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../components/Sidebar.jsx';



import Scheduled_Sessions from "./../../assets/account-circle.png";
import Total_Clients from "./../../assets/contact2.png";
import Wallet_Balances from "./../../assets/store.png";
import graph1 from "./../../assets/Group 1000002280.png";
import graph2 from "./../../assets/Group 1000002281.png";
import Sidebar from "../../components/Sidebar.jsx";
import Navbar from "../../components/Navbar.jsx";
import TableComponent from "../../components/TableComponent.jsx";
import { FaCoins } from "react-icons/fa";




const Mentordashboard = () => {

    // Define your data array with additional details
    const data = [
        {
            title: "Scheduled Sessions",
            count: 281,
            percentageChange: "+55%",
            iconSrc: Scheduled_Sessions,
            bgColor: "#4463A4" // Example background color
        },
        {
            title: "Total Mentee",
            count: 150,
            percentageChange: "+30%",
            iconSrc: Total_Clients,
            bgColor: "#4AB2EC" // Adjust the color as needed
        },
        {
            title: "Wallet Balance",
            count: "348",
            percentageChange: "+10%",
            iconSrc: Wallet_Balances,
            bgColor: "#2F5197" // Adjust the color as needed
        }
    ];

    const upcomingSessions = [
        {
          name: "Alice",
          time: "10:00 AM",
          date: "2024-03-10",
          profile_url: "https://cdn2.f-cdn.com/files/download/42322552/f58f50.jpg",
          menteeId: "001",
          sessionName: "Introduction to React",
        },
        {
          name: "Bob",
          time: "11:00 AM",
          date: "2024-03-11",
          profile_url: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
          menteeId: "002",
          sessionName: "Advanced JavaScript",
        },
        {
          name: "Alice",
          time: "10:00 AM",
          date: "2024-03-10",
          profile_url: "https://cdn2.f-cdn.com/files/download/42322552/f58f50.jpg",
          menteeId: "001",
          sessionName: "Introduction to React",
        },
        {
          name: "Bob",
          time: "11:00 AM",
          date: "2024-03-11",
          profile_url: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
          menteeId: "002",
          sessionName: "Advanced JavaScript",
        },
        {
            name: "Alice",
            time: "10:00 AM",
            date: "2024-03-10",
            profile_url: "https://cdn2.f-cdn.com/files/download/42322552/f58f50.jpg",
            menteeId: "001",
            sessionName: "Introduction to React",
          },
        // Add more sessions as needed...
      ];
      


    return (
        <div className='flex gap-[30px] bg-gray-100'>
            <div className="max-sm:hidden ">
                <Sidebar liname={"Dashboard"} />
            </div>
            <div className='flex flex-col mr-[12px] w-full  '>
                <div className="px-1">
                    <Navbar Navtext={"Dashboard"} />

                    <div className="h-[90vh]  overflow-x-auto overflow-y-auto">

                        <div className='grid grid-cols-1  md:grid md:grid-cols-3 md:justify-between items-start w-full gap-5 py-8'>
                            {data.map((item, index) => (
                                <div key={index} className='flex flex-col items-center bg-white shadow-sm ring-2 ring-gray-300 ring-opacity-50 rounded-lg p-4'>
                                    <div className='flex items-center justify-between w-full'>
                                        <img className={`w-16 object-contain h-16 rounded-[8px] p-2 px-3 relative top-[-35px]`} src={item.iconSrc} alt={`Icon ${index + 1}`} style={{ backgroundColor: item.bgColor }} />
                                        <div className=''>
                                            <p className='font-semibold text-md w-[max-content]'>{item.title}</p>
                                            <p className='text-2xl text-right font-bold'>{item.title == "Wallet Balance" ? <div className="flex justify-center items-center gap-2"><FaCoins className="text-[#0796F6]" /> {item.count}</div> : item.count}</p>
                                        </div>
                                    </div>
                                    <div className=' flex gap-1 w-full'>
                                        <p className='text-sm font-semibold text-green-600'>{item.percentageChange}</p>
                                        <p className='text-sm'>than last Month</p>
                                    </div>
                                </div>
                            ))}
                        </div>




                        <div className='grid grid-cols-1 gap-5 md:grid md:grid-cols-2 md:gap-3 relative '>

                            <div className="shadow-sm ring-2 ring-gray-300 ring-opacity-50  rounded-lg px-4 py-2">
                                <img src={graph1} className="relative w-full top-[-20px]" />
                                <div className="ml-[20px]">
                                    <p className="font-bold">Completed Sessions</p>
                                    <p className="text-gray-600">Last Campaign Performance</p>

                                    {/* <hr className="my-[10px]"></hr> */}
                                    <p className="text-gray-600">just updated</p>
                                </div>
                            </div>
                            <div className="shadow-sm ring-2 ring-gray-300 ring-opacity-50 rounded-lg px-4 py-2">
                                <img src={graph2} className="relative w-full top-[-20px]" />
                                <div className="ml-[20px]">
                                    <div className="ml-[20px]"></div>
                                    <p className="font-bold">Booked Sessions</p>
                                    <p className="text-gray-600">(+15%) increase in today sales.</p>
                                    {/* <hr className="my-[10px]"></hr> */}
                                    <p className="text-gray-600">updated 4 min ago</p>
                                </div>
                            </div>

                        </div>




                        <TableComponent data={upcomingSessions} className="shadow-inherit" />
                    </div>

                </div>

            </div>


        </div>
    )
}

export default Mentordashboard;
