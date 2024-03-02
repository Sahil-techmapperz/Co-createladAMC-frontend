import React from 'react';
import ClientSidebar from '../pages/MentorClient/ClientSidebar/ClientSidebar';
import ClientNavbar from '../pages/MentorClient/ClientNavbar/ClientNavbar';
import { Link } from 'react-router-dom';

const MentorSkills = () => (
    <div className='flex gap-2 h-[100vh] overflow-hidden'>
        <div className="max-sm:hidden">
            <ClientSidebar liname={"clientMyAccount"} /> {/* Ensure this is correct usage */}
        </div>
        <div className='myAccount_body py-[15px]'>
            <ClientNavbar Navtext={"Mentor Skills"} />
            <div className='m-[20px] text-[18px] font-[600]'>
                <Link to={"/clientDashboard"}>Dashboard</Link> &gt;<Link to={"/clientMyAccount"}>My Account</Link>  &gt; Mentor Skills
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[100%] h-[75vh]  overflow-y-auto p-4 sm:p-6">

                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold">Effective Communication</h2>
                    <p className="mt-2">Ability to convey information and ideas clearly and effectively.</p>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold">Leadership</h2>
                    <p className="mt-2">Inspiring and guiding individuals or teams towards achieving goals.</p>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold">Problem Solving</h2>
                    <p className="mt-2">Identifying complex problems and reviewing related information to develop and evaluate options and implement solutions.</p>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold">Empathy</h2>
                    <p className="mt-2">Understanding and sharing the feelings of others to effectively guide them.</p>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold">Technical Proficiency</h2>
                    <p className="mt-2">Possessing a deep understanding of specific technical skills or knowledge areas relevant to mentoring.</p>
                </div>


            </div>

        </div>
    </div>
);

export default MentorSkills;
