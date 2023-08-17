import React from 'react';
import { useSelector } from 'react-redux';

const WelcomeMessage = () => {
    const userName = useSelector(state => state.auth.userName);

    return (
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
            Welcome <span className="text-blue-600">{userName}!</span>
        </h2>
    );
};

export default WelcomeMessage;