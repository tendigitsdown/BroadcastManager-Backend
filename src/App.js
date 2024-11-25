import React, { useEffect, useState } from 'react';
import NewMembersMinister from './components/NewMembersMinister';
import axios from 'axios';

const App = () => {
    const [entries, setEntries] = useState([]);
    const [status, setStatus] = useState(null);

    useEffect(() => {
        // Fetch entries from backend
        axios.get('http://localhost:5000/entries').then(response => {
            setEntries(response.data);
        });
    }, []);

    const handleFormSubmit = (formData) => {
        console.log('Form submitted:', formData);
        // Add submission logic (e.g., API call)
        
    };

    const updateStatus = (id, newStatus) => {
        const updatedEntries = entries.map(entry =>
            entry._id === id ? { ...entry, status: newStatus } : entry
        );
        setEntries(updatedEntries);
    };

    const saveUpdates = () => {
        axios.post('http://localhost:5000/update', { entries }).then(() => {
            alert('Changes saved!');
        });
    };

    const fetchPreviewOrLive = type => {
        axios.get(`http://localhost:5000/${type}`).then(response => {
            setStatus(response.data);
        });
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Manage Broadcast Entries</h1>
            <div className="grid gap-4">
                {entries.map(entry => (
                    <div key={entry._id} className="flex items-center justify-between p-2 bg-gray-100 rounded shadow">
                        <span>{entry.name}</span>
                        <div className="flex gap-2">
                            <button
                                className="px-4 py-2 bg-blue-500 text-white rounded"
                                onClick={() => updateStatus(entry._id, 'preview')}
                            >
                                Preview
                            </button>
                            <button
                                className="px-4 py-2 bg-green-500 text-white rounded"
                                onClick={() => updateStatus(entry._id, 'live')}
                            >
                                Live
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <button
                className="mt-4 px-6 py-2 bg-purple-600 text-white rounded"
                onClick={saveUpdates}
            >
                Save Changes
            </button>

            <hr className="my-6" />

            <h2 className="text-xl font-bold mb-4">View Broadcasts</h2>
            <div className="flex gap-4 mb-4">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={() => fetchPreviewOrLive('preview')}
                >
                    Preview
                </button>
                <button
                    className="px-4 py-2 bg-green-500 text-white rounded"
                    onClick={() => fetchPreviewOrLive('live')}
                >
                    Live
                </button>
            </div>

            <div>
                {status &&
                    status.map(entry => (
                        <div key={entry._id} className="p-4 bg-gray-100 rounded shadow mb-4">
                            <pre>{JSON.stringify(entry, null, 2)}</pre>
                        </div>
                    ))}
            </div>

            <hr className="my-6" />

            <h1 className="text-2xl font-bold mb-4">Add New Members Minister</h1>
            <div className="container mx-auto p-4">
                <NewMembersMinister onSubmit={handleFormSubmit} />
            </div>
        </div>
    );
};

export default App;


