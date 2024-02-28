import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import SuperAdminSide from '../SuperAdminSide/SuperAdminSide';
import MobileNav from '../../../components/Mobile/MobileNav';
import SuperAdminNavbar from '../SuperAdminNav/SuperAdminNav';

const SuperAdminIssueReport = () => {
    const users = [
        {
            sl: '1',
            name: 'John Doe',
            type: 'Admin',
            email: 'john@example.com',
            contactNumber: '1234567890',
            accountCreatedAt: '2023-12-15 09:45 AM',
            roleCreatedAt: '2023-12-15 10:00 AM',
        },
        // Add more user data as needed
    ];

    const [selectedOption, setSelectedOption] = useState('Pending');

    const dropdownOptions = ['Pending', 'Resolve', 'In Progress'];

    return (
        <>
            <div className='flex gap-[30px] h-[100vh] md:overflow-y-hidden'>
                <div className="max-sm:hidden"> <SuperAdminSide /></div>
                <div className='w-[100%] mr-[12px]  max-sm:ml-[10px]'>

                    <div className="sm:hidden  ml-[10px]"> <MobileNav /> </div>
                    <div className='max-sm:hidden'> <SuperAdminNavbar Navtext={"Issue Reported"} /></div>
                    <p className='rounded font-bold pb-[12px]  pr-[12px]  pt-[12px]  pl-[0px]'>All Reported Issues</p>

                    {/* <div className='shadow-md overflow-x-auto'>
                        <table className="w-full md:max-w-[calc(100% - 20px)] bg-white border border-gray-300">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 bg-blue-500 text-white border-b">Sl No.</th>
                                    <th className="py-2 px-4 bg-blue-500 text-white border-b">Name</th>
                                    <th className="py-2 px-4 bg-blue-500 text-white border-b">Type</th>
                                    <th className="py-2 px-4 bg-blue-500 text-white border-b">Email</th>
                                    <th className="py-2 px-4 bg-blue-500 text-white border-b">Contact Number</th>
                                    <th className="py-2 px-4 bg-blue-500 text-white border-b">Account Created At</th>
                                    <th className="py-2 px-4 bg-blue-500 text-white border-b">Role Created At</th>
                                    <th className="py-2 px-4 bg-blue-500 text-white border-b">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={index}>
                                        <td className="py-2 px-4 border-b">{user.sl}</td>
                                        <td className="py-2 px-4 border-b">{user.name}</td>
                                        <td className="py-2 px-4 border-b">{user.type}</td>
                                        <td className="py-2 px-4 border-b">{user.email}</td>
                                        <td className="py-2 px-4 border-b">{user.contactNumber}</td>
                                        <td className="py-2 px-4 border-b">{user.accountCreatedAt}</td>
                                        <td className="py-2 px-4 border-b">{user.roleCreatedAt}</td>
                                        <td className="py-2 px-4 border-b flex items-center">
                                            <div className="flex gap-2 relative">
                                                <div className='flex'>
                                                    <MdDelete className='text-red-500' />
                                                    <p>DELETE</p>
                                                </div>
                                                <select>
                                                    <option value="option1" style={{ color: 'green' }}>Resolved</option>
                                                    <option value="option2" style={{ color: 'orange' }}>Pending</option>
                                                    <option value="option3" style={{ color: 'blue' }}>In Progress</option>
                                                </select>
                                            </div>
                                            <ul className="absolute hidden bg-white border border-gray-300 mt-2 p-2 rounded w-24">
                                                {dropdownOptions.map((option) => (
                                                    <li
                                                        key={option}
                                                        onClick={() => setSelectedOption(option)}
                                                        className={`cursor-pointer py-1 px-2 hover:bg-gray-100 ${selectedOption === option ? 'bg-gray-200' : ''}`}
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
                    </div> */}


                </div>
            </div>
        </>
    );
};

export default SuperAdminIssueReport;
