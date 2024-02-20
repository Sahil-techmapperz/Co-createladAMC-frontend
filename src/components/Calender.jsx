import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import '../components/Sidebar.jsx';
import Sidebar from '../components/Sidebar.jsx';
import '../CSS/Calender.css';
import MobileNav from './Mobile/MobileNav.jsx';
import Navbar from './Navbar.jsx';

const Calender = () => {
  const [events, setEvents] = useState([
    { title: 'event 1', date: '2023-12-01' },
    { title: 'event 2', date: '2023-04-02' }
  ]);
  return (

    <div className='calender_body'>
      <div className="max-sm:hidden  ">
        <Sidebar />
      </div>





      <div className='calender_main ml-[30px]'>


        <div className="sm:hidden  ml-[10px]">  <MobileNav /> </div>

        <div className="max-sm:hidden" >
          <Navbar Navtext={"Calender"} />
        </div>



        <p className='calender_schedule'>SCHEDULE</p>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          weekends={false}
          events={events}
        />
      </div>
    </div>
  )
}

export default Calender;
