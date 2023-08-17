import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setNumberCards } from '../../redux/slices/animal';
import { useNavigate } from 'react-router-dom';

const LevelButton = ({ icon, color, label, animalCount }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => {
            setIsClicked(false);
            dispatch(setNumberCards(animalCount));
            navigate('/game');
        }, 300);
    };
    
    const buttonColors = {
        green: 'bg-green-500 hover:bg-green-600 focus:bg-green-700',
        blue: 'bg-blue-500 hover:bg-blue-600 focus:bg-blue-700',
        yellow: 'bg-yellow-500 hover:bg-yellow-600 focus:bg-yellow-700',
        red: 'bg-red-500 hover:bg-red-600 focus:bg-red-700',
    };
    
    return (
        <button
            onClick={handleClick}
            className={`flex items-center px-4 py-3 rounded-md text-white ${buttonColors[color]} transition duration-300 focus:outline-none focus:ring ${isClicked ? 'transform scale-95' : ''}`}
        >
          {icon && <span className="mr-2 text-xl">{icon}</span>}
          {label}
        </button>
    );
};

export default LevelButton;