import React, { useState } from 'react';
import Navbar from './Navbar.jsx';
import Auth from './Auth.jsx';

const Dashboard = () => {
    const [ showAuth, setShowAuth ] = useState(false);
    return (
    <div className="relative w-full min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-6">Welcome to Dashboard</h1>
        <button onClick={() => setShowAuth(true)} className="bg-black text-white px-5 py-2 rounded">
        Login
        </button>
        {showAuth && <Auth onClose={() => setShowAuth(false)} />}
    </div>
    );
};

export default Dashboard;
