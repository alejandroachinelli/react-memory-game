import React from 'react';

const GameDescription = () => {
  return (
    <div className="text-center">
      <p className="text-2xl text-blue-600 mb-2">
        Welcome to the Memory Game!
      </p>
      <p className="text-lg text-gray-700 mb-2">
        Test your memory by matching cards.
      </p>
      <p className="text-lg text-gray-700 mb-2">
        There are different levels you can play to challenge your memory skills.
      </p>
      <p className="text-lg text-gray-700 mb-4">Good luck!</p>
    </div>
  );
};

export default GameDescription;