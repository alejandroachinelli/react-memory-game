import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserName } from '../../redux/slices/auth';

const UserNameInput = () => {
    const dispatch = useDispatch();
    const userName = useSelector(state => state.auth.userName);

    const handleNameChange = (event) => {
        const newName = event.target.value;
        dispatch(setUserName(newName));
    }
    

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-2">Enter Your Name</h2>
      <input
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
        type="text"
        value={userName}
        onChange={handleNameChange}
        placeholder="Enter your name"
      />
      <p className="mt-2 text-gray-600 text-center">
        Enter your name and then press Next to proceed to the game.
      </p>
    </div>
  );
};

export default UserNameInput;