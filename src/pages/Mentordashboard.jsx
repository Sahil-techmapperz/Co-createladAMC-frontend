import React from "react";
import "../CSS/mentor_dashboard.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Sidebar.jsx';



import Scheduled_Sessions from "../assets/account-circle.png";
import Total_Clients from "../assets/contact2.png";
import Wallet_Balances from "../assets/store.png";
import graph1 from "../assets/Group 1000002280.png";
import graph2 from "../assets/Group 1000002281.png";
import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar.jsx";
import MobileNav from "../components/Mobile/MobileNav.jsx";
import TableComponent from "../components/TableComponent.jsx";




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
            title: "Total Clients",
            count: 150,
            percentageChange: "+30%",
            iconSrc: Total_Clients,
            bgColor: "#4AB2EC" // Adjust the color as needed
        },
        {
            title: "Wallet Balances",
            count: '1021 CCL(coin)',
            percentageChange: "+10%",
            iconSrc: Wallet_Balances,
            bgColor: "#2F5197" // Adjust the color as needed
        }
    ];

    const Tabledata = [
        { name: 'Rayna Torff',profile_url:'', clientId: '956123', value: '130.992', adsSpent: '9.500', refunds: '✓',refundsamount:'100' },
        { name: 'Jordyn Septimus',profile_url:'', clientId: '513245', value: '80.250', adsSpent: '4.200', refunds: '✓',refundsamount:'10' },
        { name: 'Tiana Ekstrom Bothman',profile_url:'', clientId: '231568', value: '40.600', adsSpent: '9.430', refunds: 'A',refundsamount:'200' },
        { name: 'Marilyn Torff',profile_url:'', clientId: '564325', value: '91.300', adsSpent: '7.364', refunds: '✓' ,refundsamount:'20'},,
        { name: 'Giana Levin',profile_url:'', clientId: '684321', value: '140.925', adsSpent: '20.531', refunds: 'A',refundsamount:'300' },
      ];


    return (
        <div className='flex gap-2'>
            <div className="max-sm:hidden ">
                <Sidebar />
            </div>
            <div className='mentor_main_body '>
                <div className="ml-[30px] mentorsec">
                    <Navbar Navtext={"Dashboard"} />
                    <div className='flex flex-wrap md:justify-between items-start w-full gap-5 py-8'>
                        {data.map((item, index) => (
                            <div key={index} className='flex flex-col items-center bg-white shadow-md rounded-lg p-4 w-full md:w-[30%]'>
                                <div className='flex items-center justify-between w-full'>
                                    <img className={`w-16 object-contain h-16 rounded-[8px] p-2 px-3 relative top-[-35px]`} src={item.iconSrc} alt={`Icon ${index + 1}`} style={{backgroundColor:item.bgColor}} />
                                    <div className='ml-4'>
                                        <p className='font-semibold text-lg'>{item.title}</p>
                                        <p className='text-xl text-right font-bold'>{item.count}</p>
                                    </div>
                                </div>
                                <div className='mt-4 flex gap-1 w-full'>
                                    <p className='text-sm font-semibold text-green-600'>{item.percentageChange}</p>
                                    <p className='text-sm'>than last week</p>
                                </div>
                            </div>
                        ))}
                    </div>




                    <div className='flex  max-md:flex-col gap-8 relative '>

                        <div className="shadow-md  rounded-lg px-4 py-2">
                            <img src={graph1} className="relative top-[-20px]" />

                            <p>Overall Completed</p>
                            <p>Last Campaign Performance</p>
                            <p>just updated</p>
                        </div>
                        <div className="shadow-md rounded-lg px-4 py-2">
                            <img src={graph2} className="relative top-[-20px]"/>
                            <p>Booking Daily Classes</p>
                            <p>(+15%) increase in today sales.</p>
                            <p>updated 4 min ago</p>
                        </div>

                    </div>


                    

                    <TableComponent data={Tabledata}/>


                </div>

            </div>


        </div>
    )
}

export default Mentordashboard;
