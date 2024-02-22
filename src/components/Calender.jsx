import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import Sidebar from '../components/Sidebar.jsx';
import '../CSS/Calender.css'; // Make sure to adapt or remove custom styles if they conflict with Tailwind
import MobileNav from './Mobile/MobileNav.jsx';
import Navbar from './Navbar.jsx';
import { Link } from 'react-router-dom';

const Calender = () => {
  const [events, setEvents] = useState([
    { title: 'event 1', date: '2023-12-01' },
    { title: 'event 2', date: '2023-04-02' }
  ]);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="hidden md:block md:w-1/4 xl:w-1/5">
        <Sidebar />
      </div>
      <div className="flex-1">
          <Navbar Navtext="Calendar" />
          <div className='m-[20px] text-[18px] font-[600]'>
                  <Link to={"/"}>Dashboard</Link> &gt; Calendar
                </div>
        <h2 className="text-xl text-center font-bold text-gray-900 mt-4 mx-4">SCHEDULE</h2>
        <div className="p-4 h-[80vh] overflow-x-auto">
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            weekends={false}
            events={events}
          />
        </div>
      </div>
    </div>
  );
};

export default Calender;
