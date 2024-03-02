import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import SuperAdminSide from '../SuperAdminSide/SuperAdminSide';
import MobileNav from '../../../components/Mobile/MobileNav';
import SuperAdminNavbar from '../SuperAdminNav/SuperAdminNav';

const SuperAdminIssueReport = () => {
    // Sample data
    const issues = [
        {
            sl: '1',
            type: 'Session',
            sessionId: 'S12345',
            orderId: 'O56789',
            issue: 'Some issue description',
            reportedTime: '2024-02-02 10:30 AM',
            reportedBy: 'Admin User',
        },
        {
            sl: '2',
            type: 'Session',
            sessionId: 'S12345',
            orderId: 'O56789',
            issue: 'Some issue description',
            reportedTime: '2024-02-02 10:30 AM',
            reportedBy: 'Admin User',
        }
        // Add more issue data as needed
    ];

    // Dropdown state
    const [selectedOption, setSelectedOption] = useState('Pending');

    // Dropdown options
    const dropdownOptions = ['Pending', 'Resolve', 'In Progress'];

    return (
        <>
            <div className='flex gap-[30px] h-[100vh] md:overflow-y-hidden bg-gray-100'>
                <div className="max-sm:hidden"> <SuperAdminSide  liname={"Issue Reported"} /></div>
                <div className='w-[100%] mr-[12px]  max-sm:ml-[10px]'>

                    <div className="sm:hidden  ml-[10px]"> <MobileNav /> </div>
                    <div className='max-sm:hidden'> <SuperAdminNavbar Navtext={"Issue Reported"} /></div>
                    <p className='rounded font-bold p-[12px]'>All Reported Issues</p>
                    <div className='mt-[10px] shadow-sm ring-2 ring-gray-300 ring-opacity-50 max-sm:mt-[10px]  '>

                        <div className='w-[97%] flex justify-between max-sm:mt-[10px] '>
                            <div className="container mx-auto p-4 max-sm:p-0   max-sm:overflow-y-auto max-sm:overflow-x-auto">
                                <div className="table-container">
                                    <table className="min-w-full  bg-white border border-gray-300">
                                        <thead className=''>
                                            <tr>
                                                <th className="py-2 px-4 text-nowrap bg-blue-500 text-white  border-b">Sl No.</th>
                                                <th className="py-2 px-4 text-nowrap bg-blue-500 text-white  border-b">Type</th>
                                                <th className="py-2 px-4 text-nowrap bg-blue-500 text-white  border-b">Session/Session ID</th>
                                                <th className="py-2 px-4 text-nowrap bg-blue-500 text-white border-b">Order ID</th>
                                                <th className="py-2 px-4 text-nowrap bg-blue-500 text-white border-b">Issue</th>
                                                <th className="py-2 px-4 text-nowrap bg-blue-500 text-white border-b">Reported Time</th>
                                                <th className="py-2 px-4 text-nowrap bg-blue-500 text-white border-b">Reported By</th>
                                                <th className="py-2 px-4 text-nowrap bg-blue-500 text-white border-b">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {issues.map((issue, index) => (
                                                <tr key={index}>
                                                    <td className="py-2 px-4 border-b">{issue.sl}</td>
                                                    <td className="py-2 px-4 border-b">{issue.type}</td>
                                                    <td className="py-2 px-4 border-b">{issue.sessionId}</td>
                                                    <td className="py-2 px-4 border-b">{issue.orderId}</td>
                                                    <td className="py-2 px-4 border-b">{issue.issue}</td>
                                                    <td className="py-2 px-4 border-b">{issue.reportedTime}</td>
                                                    <td className="py-2 px-4 border-b">{issue.reportedBy}</td>
                                                    <td className="py-2 px-4 border-b flex items-center">
                                                        <div className="flex gap-[10px] relative">
                                                            <div className='flex justify-between items-center'>
                                                                <MdDelete className='text-red-500' />
                                                                <p className='text-red-500'> Delete</p>
                                                            </div>
                                                            <select>
                                                                <option className='' value="option1" style={{ color: 'green' }}>Resolved</option>
                                                                <option className='text-' value="option2" style={{ color: 'orange' }}>Pending</option>
                                                                <option className='text-' value="option3" style={{ color: 'blue' }}>In Progress</option>
                                                            </select>
                                                        </div>
                                                        <ul className="absolute hidden bg-white border border-gray-300 mt-2 p-2 rounded w-[120px]">
                                                            {dropdownOptions.map((option) => (
                                                                <li
                                                                    key={option}
                                                                    onClick={() => setSelectedOption(option)}
                                                                    className={`cursor-pointer py-1 px-2 hover:bg-gray-100 ${selectedOption === option ? 'bg-gray-200' : ''
                                                                        }`}
                                                                >
                                                                    {option}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SuperAdminIssueReport;
