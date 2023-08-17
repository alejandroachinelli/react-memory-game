import React from 'react';
import { useSelector } from 'react-redux';
import { setError } from '../../redux/slices/animal';

const Error = () => {
  const error = useSelector(state => state.animal.error);

  const closeErrorAlert = () => {
    setError(null);
  };
  
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-red-100 border-b-4 border-red-400 text-red-700 flex justify-between items-center">
        <div>
            <strong className="font-bold">Error:</strong>
            <span className="block sm:inline"> {error}</span>
        </div>
        <button
            onClick={closeErrorAlert}
            className="ml-2 text-red-700 hover:text-red-800 focus:outline-none"
        >
            Close
        </button>
    </div>
  );
};

export default Error;