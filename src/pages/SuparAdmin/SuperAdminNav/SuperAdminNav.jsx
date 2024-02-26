import React from 'react';
// import { useHistory } from 'react-router-dom'; // Import useHistory hook for navigation
import Select from "react-select";

const options = [
    { value: 'Admin', label: 'Admin' },
    { value: 'Mentor', label: 'Mentor' },
    { value: 'Client', label: 'Client' }
];

const SuperAdminNavbar = ({ Navtext }) => {
    // const history = useHistory();

    const handleChange = (selectedOption) => {
        switch (selectedOption.value) {
            case 'Admin':
                history.push('/adminDashboard');
                break;
            case 'Mentor':
                history.push('/mentorDashboard');
                break;
            case 'Client':
                history.push('/clientDashboard');
                break;
            default:
                // Handle default case if needed
                break;
        }
    };

    return (
        <>
            <nav className='navbar mt-[12px] bg-white shadow rounded-md w-[81%]'>

                <div className='navbar-left gap-[35px]'>
                    <p className='flex justify-center items-center font-bold'>{Navtext}</p>
                    <input className='border rounded-md pr-[5px] border-slate-500' placeholder='Search Here' />
                </div>

                <div className='flex gap-[30px]'>
                    <div className='flex gap-[5px]'>
                        <p className='flex items-center justify-center'>Advanced Search</p>
                    </div>
                    <div className='flex gap-[5px]'>
                        <p>Sorting-</p>

                        <Select options={options} onChange={handleChange} />
                    </div>
                </div>

                <div className='navbar-right iconmenu gap-[20px]'>

                    <div className='navbar-right iconmenu gap-[20px]'>
                        <i className="fa-solid fa-gear to-blue-500"></i>
                        <i className="fa-solid fa-bell"></i>
                        <i className="fa-solid fa-right-from-bracket"></i>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default SuperAdminNavbar;
