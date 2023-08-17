import React from 'react';
import { GiBrain } from 'react-icons/gi';
import './style.css'

const GameTitle = () => {

    return (
        <div className="flex items-center flex-col mb-6">
            <div className="relative">
                <div className="animate-pulse-brain-ring absolute" />
                <GiBrain className="text-blue-600 text-8xl mb-2 animate-pulse-brain" />
            </div>
            <h1 className="text-4xl font-semibold text-gray-800">
                Memory Game
            </h1>
        </div>
    );
};

export default GameTitle;