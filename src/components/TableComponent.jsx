import React from 'react';

const TableComponent = ({ data }) => {
    return (
        <div className='shadow-md ml-[5px] rounded-lg my-6 p-4 max-w-full overflow-x-auto'>
            <h2 className="text-xl md:text-lg font-bold mb-4">Upcoming Sessions</h2>
            <div className="min-w-[320px]">
                <table className="w-full" style={{ margin: '0' }}>
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-2 py-2 text-xs md:text-sm">Mentee Name</th>
                            <th className="px-2 py-2 text-xs md:text-sm">Time</th>
                            <th className="px-2 py-2 text-xs md:text-sm">Date</th>
                            <th className="px-2 py-2 text-xs md:text-sm">Session Name</th>
                            <th className="px-2 py-2 text-xs md:text-sm">Join Session</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td className="border border-gray-300 px-2 py-2 text-xs md:text-sm">
                                    <div className='flex max-sm:flex-col items-center space-x-2'>
                                        <img className='rounded-full w-12 h-12 md:w-14 md:h-14 object-cover' src={item.profile_url || 'https://via.placeholder.com/150'} alt="Profile" />
                                        <div className='flex flex-col'>
                                            <span>{item.name}</span>
                                            <span className="text-xs">Mentee ID: {item.menteeId}</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="border border-gray-300 px-2 py-2 text-xs md:text-sm">{item.time}</td>
                                <td className="border border-gray-300 px-2 py-2 text-xs md:text-sm">{item.date}</td>
                                <td className="border border-gray-300 px-2 py-2 text-xs md:text-sm">{item.sessionName}</td>
                                <td className="border border-gray-300 px-2 py-2 text-xs md:text-sm">
                                    <div className='flex gap-1 items-center'>
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Join</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TableComponent;
