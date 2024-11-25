import React, { useState } from 'react';

const NewMembersMinister = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        subtitle: 'Mr.',
        firstname: 'Lawrence',
        lastname: 'Lasisi',
        title: 'Pastor',
        ministry: 'Springs of Hope Christian Ministries',
        location: 'Bell Gardens, CA',
        address: '6315 Eastern ave. Bell Gardens, CA 90201',
        createdAt: '',
        updatedAt: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({
            subtitle: '',
            firstname: '',
            lastname: '',
            title: '',
            ministry: '',
            location: '',
            address: '',
            createdAt: '',
            updatedAt: '',
        });
    };

    return (
        <form onSubmit={handleSubmit} className="grid gap-4 bg-gray-100 p-4 rounded shadow">
            <div>
                <label className="block text-gray-700 font-bold mb-2" htmlFor="subtitle">
                    Subtitle
                </label>
                <input
                    type="text"
                    id="subtitle"
                    name="subtitle"
                    value={formData.subtitle}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded"
                />
            </div>
            <div>
                <label className="block text-gray-700 font-bold mb-2" htmlFor="firstname">
                    First Name
                </label>
                <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded"
                />
            </div>
            <div>
                <label className="block text-gray-700 font-bold mb-2" htmlFor="lastname">
                    Last Name
                </label>
                <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded"
                />
            </div>
            <div>
                <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
                    Title
                </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded"
                />
            </div>
            <div>
                <label className="block text-gray-700 font-bold mb-2" htmlFor="ministry">
                    Ministry
                </label>
                <input
                    type="text"
                    id="ministry"
                    name="ministry"
                    value={formData.ministry}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded"
                />
            </div>
            <div>
                <label className="block text-gray-700 font-bold mb-2" htmlFor="location">
                    Location
                </label>
                <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded"
                />
            </div>
            <div>
                <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
                    Address
                </label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded"
                />
            </div>
            <div>
                <label className="block text-gray-700 font-bold mb-2" htmlFor="createdAt">
                    Created At
                </label>
                <input
                    type="datetime-local"
                    id="createdAt"
                    name="createdAt"
                    value={formData.createdAt}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded"
                />
            </div>
            <div>
                <label className="block text-gray-700 font-bold mb-2" htmlFor="updatedAt">
                    Updated At
                </label>
                <input
                    type="datetime-local"
                    id="updatedAt"
                    name="updatedAt"
                    value={formData.updatedAt}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded"
                />
            </div>
            <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Submit
            </button>
        </form>
    );
};

export default NewMembersMinister;
