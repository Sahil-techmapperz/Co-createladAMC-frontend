import React from 'react';
// import { PencilIcon, TrashIcon } from '@heroicons/react/solid';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import SuperAdminSide from '../SuperAdminSide/SuperAdminSide';
import ClientNavbar from '../../MentorClient/ClientNavbar/ClientNavbar';
import MobileNav from '../../../components/Mobile/MobileNav';
const SuperAdminUserTable = () => {
    // Sample data
    const users = [
        {
            name: 'John Doe',
            type: 'User',
            email: 'john.doe@email.com',
            contactNumber: '(555) 123-4567',
            accountCreatedAt: '2024-02-02 08:00 AM',
            roleCreatedDate: '2024-02-02 08:15 AM',
        },
        // Add more user data as needed
    ];

    return (

        <div className='flex' >
            <div className="max-sm:hidden "> <SuperAdminSide /></div>
            <div className='ml-[30px] w-[100%] max-sm:ml-[10px] '>

                <div className="sm:hidden  ml-[10px]">  <MobileNav /> </div>
                <div className='max-sm:hidden'>  <ClientNavbar /></div>
                <div className='max-sm:hidden flex justify-between mt-[60px] '>
                    <div>
                        <p className=' text-base font-bold'>Manage Users</p>
                        <p>Administer and oversee user accounts and privileges within the platform.</p>
                    </div>
                    <div className='flex gap-[20px]'>
                        <button className="text-white bg-blue-500 h-[40px] w-[200px] flex justify-center items-center rounded-lg">Add Admin</button>
                        <button className="text-white bg-blue-500 h-[40px] w-[200px] flex justify-center items-center rounded-lg">Add User</button>
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

                <p className=' text-base font-bold mt-[20px]'><u>Users</u></p>

                <div className="container m-0 p-4   max-sm:overflow-y-auto max-sm:overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300  ">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">Name</th>
                                <th className="py-2 px-4 border-b">Type</th>
                                <th className="py-2 px-4 border-b">Email</th>
                                <th className="py-2 px-4 border-b">Contact Number</th>
                                <th className="py-2 px-4 border-b">Account Created At</th>
                                <th className="py-2 px-4 border-b">Role Created Date</th>
                                <th className="py-2 px-4 border-b">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index}>
                                    <td className="py-2 px-4 border-b">{user.name}</td>
                                    <td className="py-2 px-4 border-b">{user.type}</td>
                                    <td className="py-2 px-4 border-b">{user.email}</td>
                                    <td className="py-2 px-4 border-b">{user.contactNumber}</td>
                                    <td className="py-2 px-4 border-b">{user.accountCreatedAt}</td>
                                    <td className="py-2 px-4 border-b">{user.roleCreatedDate}</td>
                                    <td className="py-2 px-4 border-b flex">
                                        <button className="mr-2  px-2 py-1 rounded h-[50px] w-[50px]">
                                            <CiEdit className="h-4 w-4 text-3xl" />
                                        </button>
                                        <button className=" px-2 py-1 rounded h-[50px] w-[50px]">
                                            <MdDelete className="h-4 w-4 text-3xl" />
                                        </button>
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
