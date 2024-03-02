import React, { useState } from 'react';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import SuperAdminSide from '../SuperAdminSide/SuperAdminSide';
import ClientNavbar from '../../MentorClient/ClientNavbar/ClientNavbar';
import MobileNav from '../../../components/Mobile/MobileNav';

const SuperAdminUserTable = () => {
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
        <div className='flex gap-[30px]'>
            <div className="max-sm:hidden"> <SuperAdminSide /></div>
            <div className=' w-[100%] max-sm:ml-[10px] '>
                <div className="sm:hidden  ml-[10px]"> <MobileNav /> </div>
                <div className='max-sm:hidden'> <ClientNavbar Navtext={"Users"} /></div>
                <div className='max-sm:hidden  flex justify-between mt-[20px] '>
                    <div>
                        <p className=' text-base font-bold'>Manage Users</p>
                        <p className=' text-gray-600'>Administer and oversee user accounts and privileges within the platform.</p>
                    </div>
                    <div className='flex gap-[20px]'>
                        <button className="text-white bg-blue-500 h-[40px] w-[150px] flex justify-center items-center rounded-lg">Add Admin</button>
                        <button className="text-white bg-blue-500 h-[40px] w-[150px] flex justify-center items-center rounded-lg">Add User</button>
                    </div>
                </div>
                <div className="sm:hidden flex gap-[20px] mt-[20px]">
                    <p className=' text-base font-bold'>Manage Users</p>
                    <button className="text-white bg-blue-500 h-[40px] w-[100px] flex justify-center items-center rounded-lg">Add Admin</button>
                    <button className="text-white bg-blue-500 h-[40px] w-[100px] flex justify-center items-center rounded-lg">Add User</button>
                </div>
                <div className="sm:hidden ">
                    <p>Administer and oversee user accounts and privileges within the platform.</p>
                </div>
                <div className='mt-[10px] shadow-lg  max-sm:mt-[10px]'>
                    <div className='w-[97%] flex justify-between max-sm:mt-[10px] '>
                        <div className="container mx-auto p-4 max-sm:p-0   max-sm:overflow-y-auto max-sm:overflow-x-auto">
                            <table className="min-w-full  bg-white border border-gray-300">
                                <thead className=''>
                                    <tr>
                                        <th className="py-2 px-4 bg-blue-500 text-white  border-b">Sl No.</th>
                                        <th className="py-2 px-4 bg-blue-500 text-white  border-b">Name</th>
                                        <th className="py-2 px-4 bg-blue-500 text-white  border-b">Type</th>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuperAdminUserTable;
