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

        <div className='calender_body flex gap-[30px]'>
            <div className="max-sm:hidden  ">
                <ClientSidebar />
            </div>





            <div className='w-[100%] calender_main    max-sm:ml-[0px] max-sm:w-[100%]'>




                <div className="" >
                    <ClientNavbar Navtext={"Calender"} />
                </div>



                <p className='calender_schedule'>SCHEDULE</p>
                <div className=' md:h-[85vh] md:overflow-y-auto max-sm:w-[90%]'>
                    <FullCalendar
                        plugins={[dayGridPlugin]}
                        initialView="dayGridMonth"
                        weekends={false}
                        events={events}

                    />

                </div>
            </div>
        </div>
    )
}

export default ClientSnCalender;
