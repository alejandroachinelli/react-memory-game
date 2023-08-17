import React from 'react';
import request from '../../config/indexedDB';
import { useNavigate } from 'react-router-dom';
import { setError } from '../../redux/slices/animal';
import { FiLogOut } from 'react-icons/fi';

const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    const userId = 1;
    
    try {
      const db = request.result;
      const transaction = db.transaction(['users'], 'readwrite');
      const objectStore = transaction.objectStore('users');

      objectStore.delete(userId);
      
      navigate('/');
    } catch (error) {
        setError(`An error occurred while deleting the user. Error: ${error}`);
    }
  };
  return (
    <div className="flex justify-end mt-4">
        <button
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded flex items-center"
            onClick={handleLogout}
        >
            <FiLogOut className="mr-2" /> Logout
        </button>
    </div>
  );
};

export default Logout;