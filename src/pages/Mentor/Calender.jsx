import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import Sidebar from '../../components/Sidebar.jsx';
import Navbar from '../../components/Navbar.jsx';
import { Link } from 'react-router-dom';
import "./../../CSS/Calender.css"

const Calender = () => {
  const [events, setEvents] = useState([
    { title: 'event 1', date: '2024-03-01' },
    { title: 'event 2', date: '2024-03-02' }
  ]);

  return (
    <div className="Calender flex gap-[30px] flex-col md:flex-row">
      <div className="hidden md:block">
        <Sidebar liname={"Session Calender"} />
      </div>
      <div className="flex-1 mr-[15px] ">
        <Navbar Navtext="Calendar" />
        {/* <div className=' text-lg font-semibold'>
          <Link to={"/"} className="text-blue-600 hover:text-blue-700 transition ease-in-out duration-150">Dashboard</Link> &gt; Calendar
        </div> */}
        <h2 className="text-xl text-center font-bold mt-[10px] text-gray-900 ">SCHEDULE</h2>
        <div className="p-4 h-[80vh] overflow-y-auto">




          {/* <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            weekends={false}
            events={events}
            contentHeight="auto" // Ensures calendar height adjusts to events
          /> */}


          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            firstDay={1} // Set Monday as the first day of the week
            // Optionally, customize headerToolbar to suit your needs
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,dayGridWeek,dayGridDay'
            }
          }

          events={events}

          // You can also customize other options as needed
          />

        </div>
      </div>
    </div>
  );
};

export default Calender;
