import React, { useEffect, useState } from 'react';
import { GameTitle, GameDescription, UserNameInput, NextButton, Error } from '../../components';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import request from '../../config/indexedDB';
import useLoadUserName from '../../hooks/useLoadUserName';
import { setError } from '../../redux/slices/animal';

const Home = () => {
  const navigate = useNavigate();
  const [isNameEntered, setIsNameEntered] = useState(false);
  const userName = useSelector(state => state.auth.userName);
  const error = useSelector(state => state.animal.error);

  useLoadUserName('/level-selection');

  useEffect(() => {
    setIsNameEntered(userName !== '');
  }, [userName])

  const handleNextClick = async () => {
    const userId = 1;

    try {
      const db = request.result;
      const transaction = db.transaction(['users'], 'readwrite');
      const objectStore = transaction.objectStore('users');
      const user = { id: userId, name: userName };

      await objectStore.add(user);
      navigate('/level-selection');
    } catch (error) {
      setError(`An error occurred while saving the user. Error: ${error}`);
    }
  };
  
  return (
    <div className="bg-gradient-to-r from-blue-300 to-blue-500 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <GameTitle />
        <GameDescription />
        <div className="flex flex-col items-center">
            <UserNameInput />
            <div className="bottom-4 right-4">
              <NextButton disabled={!isNameEntered} onClick={handleNextClick} />
            </div>
          </div>
      </div>
      {error && (
        <Error />
      )}
    </div>
  );
};

export default Home;
