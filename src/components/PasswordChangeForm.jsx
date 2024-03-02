// PasswordChangeForm.jsx
import React, { useState } from 'react';

const PasswordChangeForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.newPassword !== formData.confirmPassword) {
            setMessage('New Passwords do not match with Confirm password.');
            return;
        }
        setMessage('');
        console.log('Form data submitted:', formData);
        setTimeout(() => {
            setMessage('Your password has been successfully changed.');
        }, 1000);
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                <div className="mt-3 ">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Change Password</h3>
                    {message && <p className={`mb-4 ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>{message}</p>}
                    <form onSubmit={handleSubmit} className="mt-2">
                        <div className="mb-3">
                            <label htmlFor="currentPassword" className="block mb-2">Current Password:</label>
                            <input
                                type="password"
                                id="currentPassword"
                                name="currentPassword"
                                value={formData.currentPassword}
                                onChange={handleChange}
                                placeholder='current password'
                                required
                                className="input border input-bordered w-full p-2 rounded-md"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="newPassword" className="block mb-2">New Password:</label>
                            <input
                                type="password"
                                id="newPassword"
                                name="newPassword"
                                value={formData.newPassword}
                                onChange={handleChange}
                                placeholder='New password'
                                required
                                className="input border input-bordered w-full p-2 rounded-md"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="block mb-2">Confirm Password:</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder='Confirm Password'
                                required
                                className="input border input-bordered w-full p-2 rounded-md"
                            />
                        </div>
                        <div className="flex  gap-2">
                           
                            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md w-[fit-content]">
                                Change
                            </button>
                            <button type="button" onClick={onClose} className="text-white bg-red-500 px-4 py-2 rounded-md w-[fit-content]">
                                Close
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PasswordChangeForm;
