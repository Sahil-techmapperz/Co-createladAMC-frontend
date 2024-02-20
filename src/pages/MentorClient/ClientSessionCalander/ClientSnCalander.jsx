import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!



import ClientNavbar from '../ClientNavbar/ClientNavbar.jsx';
import ClientSidebar from '../ClientSidebar/ClientSidebar.jsx';

const ClientSnCalender = () => {
    const [events, setEvents] = useState([
        { title: 'event 1', date: '2023-12-01' },
        { title: 'event 2', date: '2023-04-02' }
    ]);
    return (

        <div className='calender_body'>
            <div className="max-sm:hidden  ">
                <ClientSidebar />
            </div>





            <div className='calender_main ml-[30px]'>


              

                <div className="max-sm:hidden" >
                    <ClientNavbar Navtext={"Calender"} />
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

export default ClientSnCalender;
