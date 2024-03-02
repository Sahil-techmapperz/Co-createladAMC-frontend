import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

import ClientNavbar from '../ClientNavbar/ClientNavbar.jsx';
import ClientSidebar from '../ClientSidebar/ClientSidebar.jsx';

const ClientSnCalender = () => {
    const [events, setEvents] = useState([
        { id: 1, title: 'Event 1', start: '2024-03-01T10:00:00', end: '2024-03-01T12:00:00', description: 'Meeting about project X', meetingLink: 'https://meet.example.com/event1' },
        { id: 2, title: 'Event 2', start: '2024-03-02T15:00:00', end: '2024-03-02T16:30:00', description: 'Discussion on project Y', meetingLink: 'https://meet.example.com/event2' }
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '', description: '', meetingLink: '' });
    const [selectedEvent, setSelectedEvent] = useState(null);

    const handleAddEvent = () => {
        setEvents([...events, { ...newEvent, id: events.length + 1 }]);
        handleCloseModal(); // Close modal after adding using the new method
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const handleEventClick = (clickInfo) => {
        setSelectedEvent(clickInfo.event);
        setIsModalOpen(true);
    };

    // New method to handle closing the modal and resetting selectedEvent
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedEvent(null);
    };

    // New method to open the modal for adding a new event
    const handleOpenAddEventModal = () => {
        setSelectedEvent(null); // Reset selectedEvent to null when adding a new event
        setIsModalOpen(true);
    };

    return (
        <div className='calender_body flex gap-[30px]'>
            <div className="max-sm:hidden">
                <ClientSidebar />
            </div>
            <div className='w-[100%] calender_main max-sm:ml-[0px] max-sm:w-[100%]'>
                <div>
                    <ClientNavbar Navtext={"Calender"} />
                    <div className='w-[98%] mt-2 flex justify-end'>
                        <button
                            onClick={handleOpenAddEventModal}
                            className="bg-blue-500 w-[fit-content] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Add Event
                        </button>
                    </div>
                </div>
                <p className='text-[20px] font-bold w-full text-center'>SCHEDULE</p>
                <div className='md:h-[75vh] md:overflow-y-auto max-sm:w-[90%] max-md:m-auto'>
                    <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin]}
                        initialView="timeGridWeek"
                        headerToolbar={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'dayGridMonth,timeGridWeek,timeGridDay'
                        }}
                        events={events}
                        eventClick={handleEventClick}
                    />

                    {isModalOpen && (
                        <div className="fixed z-50 inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
                            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                                {selectedEvent ?
                                    <>
                                        <h3 className="text-lg font-medium leading-6 text-gray-900">{selectedEvent.title}</h3>
                                        <p>Description: {selectedEvent.extendedProps.description}</p>
                                        <p>Start: {formatDate(selectedEvent.start)}</p>
                                        <p>End: {formatDate(selectedEvent.end)}</p>
                                        <p>Meeting Link: <a href={selectedEvent.extendedProps.meetingLink} target="_blank" rel="noopener noreferrer">{selectedEvent.extendedProps.meetingLink}</a></p>
                                        <button
                                            className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full"
                                            onClick={handleCloseModal}
                                        >
                                            Close
                                        </button>
                                    </>
                                    :
                                    <>
                                        <h3 className="text-lg font-medium leading-6 text-gray-900">Add New Event</h3>
                                        <input
                                            className="mt-2 mb-2 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            type="text"
                                            placeholder="Event Title"
                                            value={newEvent.title}
                                            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                                        />
                                        <input
                                            className="mb-2 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            type="datetime-local"
                                            placeholder="Start Date"
                                            value={newEvent.start}
                                            onChange={(e) => setNewEvent({ ...newEvent, start: e.target.value })}
                                        />
                                        <input
                                            className="mb-2 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            type="datetime-local"
                                            placeholder="End Date"
                                            value={newEvent.end}
                                            onChange={(e) => setNewEvent({ ...newEvent, end: e.target.value })}
                                        />
                                        <textarea
                                            className="mb-2 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            placeholder="Description"
                                            value={newEvent.description}
                                            onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                                        ></textarea>
                                        <input
                                            className="mb-4 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            type="url"
                                            placeholder="Meeting Link"
                                            value={newEvent.meetingLink}
                                            onChange={(e) => setNewEvent({ ...newEvent, meetingLink: e.target.value })}
                                        />
                                        <div className="flex">
                                            <button
                                                className="bg-green-500 w-[fit-content] hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                                onClick={handleAddEvent}
                                            >
                                                Add Event
                                            </button>
                                            <button
                                                className="ml-2 w-[fit-content] bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                                onClick={handleCloseModal}
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </>

                                }
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ClientSnCalender;
