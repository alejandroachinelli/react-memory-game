import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import request from '../config/indexedDB';
import { setUserName } from '../redux/slices/auth';

const useLoadUserName = (redirectPath, isLevelSelection = false) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const loadUserNameFromIndexedDB = async () => {
      try {
        const db = request.result;
        const transaction = db.transaction(['users'], 'readonly');
        const objectStore = transaction.objectStore('users');
        const getRequest = objectStore.get(1);

        getRequest.onsuccess = (event) => {
          const user = event.target.result;
          if(isLevelSelection){
            if (user && user.name) {
              dispatch(setUserName(user.name));
            }else{
              navigate(redirectPath);
            }
          }else{
            if (user && user.name) {
              dispatch(setUserName(user.name));
              navigate(redirectPath);
            }
          }
        };

        getRequest.onerror = (error) => {
          console.error('Error loading user from IndexedDB:', error);
        };
      } catch (error) {
        console.error('Error accessing IndexedDB:', error);
      }
    };

    if (request.readyState === 'done') {
      loadUserNameFromIndexedDB();
    } else {
      request.addEventListener('success', loadUserNameFromIndexedDB);
    }

    return () => {
      request.removeEventListener('success', loadUserNameFromIndexedDB);
    };
  }, [dispatch, navigate]);
};

export default useLoadUserName;