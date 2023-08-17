import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const NextButton = ({ onClick, disabled = false }) => {
  
    return (
      <button
        disabled={disabled}
        onClick={onClick}
        className={`mt-4 ml-4 flex items-center px-4 py-2 ${
          disabled ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'
        } rounded transition duration-300 focus:outline-none focus:ring focus:border-blue-700`}
      >
        Next
        <BsArrowRight className="ml-2" />
      </button>
    );
};

export default NextButton;