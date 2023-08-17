import React from 'react';

const Card = ({ imageUrl }) => (
    <div className="w-full h-full object-cover">
        <img
            src={imageUrl}
            alt="Animal"
            className="w-full h-full object-cover"
        />
    </div>
);

export default Card;