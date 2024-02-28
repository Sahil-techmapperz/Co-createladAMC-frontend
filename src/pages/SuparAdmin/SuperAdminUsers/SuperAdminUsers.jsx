import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";
import SuperAdminSide from '../SuperAdminSide/SuperAdminSide';
import MobileNav from '../../../components/Mobile/MobileNav';
import SuperAdminNavbar from '../SuperAdminNav/SuperAdminNav';
import { CiEdit } from "react-icons/ci";

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


    return (
        <div className='flex flex-col md:flex-row h-screen md:h-full'>
            <div className="max-sm:hidden"><SuperAdminSide /></div>
            <div className='w-full md:w-[calc(100% - 250px)] mx-4 md:mx-0 md:ml-4'>
                <div className="sm:hidden ml-4"><MobileNav /></div>
                <div className='max-sm:hidden'><SuperAdminNavbar Navtext={"Users"} /></div>

                <div className='max-sm:hidden flex flex-col md:flex-row items-center justify-between mt-4 md:mt-8'>
                    <div className="md:ml-4">
                        <p className='text-lg font-bold'>Manage Users</p>
                        <p className='text-gray-600'>Administer and oversee user accounts and privileges within the platform.</p>
                    </div>
                    <div className='flex gap-4 mt-4 md:mt-0'>
                        <button className="text-white bg-blue-500 h-10 md:h-[40px] w-24 md:w-[150px] flex justify-center items-center rounded-lg">Add Admin</button>
                        <button className="text-white bg-blue-500 h-10 md:h-[40px] w-24 md:w-[150px] flex justify-center items-center rounded-lg">Add User</button>
                    </div>
                </div>

                <div className="sm:hidden flex flex-col gap-2 mt-4 md:mt-8">
                    <p className='text-lg font-bold ml-4'>Manage Users</p>
                    <div className='flex gap-4 ml-4'>
                        <button className="text-white bg-blue-500 h-10 w-24 flex justify-center items-center rounded-lg">Add Admin</button>
                        <button className="text-white bg-blue-500 h-10 w-24 flex justify-center items-center rounded-lg">Add User</button>
                    </div>
                </div>
                <div className="sm:hidden ml-4">
                    <p>Administer and oversee user accounts and privileges within the platform.</p>
                </div>

                <div className='overflow-x-auto mt-4 md:mt-8'>
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
                                    <td className="py-2 px-4  border-none ">{user.sl}</td>
                                    <td className="py-2 px-4  border-none ">{user.name}</td>
                                    <td className="py-2 px-4  border-none ">{user.type}</td>
                                    <td className="py-2 px-4  border-none ">{user.email}</td>
                                    <td className="py-2 px-4  border-none ">{user.contactNumber}</td>
                                    <td className="py-2 px-4  border-none ">{user.accountCreatedAt}</td>
                                    <td className="py-2 px-4  border-none ">{user.roleCreatedAt}</td>
                                    <td className="py-2 px-4  border-none flex  gap-[30px] ">
                                        <CiEdit  className=' cursor-pointer' />

                                        <MdDelete className='text-red-500 cursor-pointer' />



                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SuperAdminUserTable;
