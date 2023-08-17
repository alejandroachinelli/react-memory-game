import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uiCountingUp, uiEndShowingCards } from '../../redux/slices/ui';
import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { setCorrectMatches, setIncorrectMatches, initGame, endGame, setTime, setElapsedTime } from '../../redux/slices/score';
import { FaCheck, FaTimes } from 'react-icons/fa';
import './style.css';

const Timer = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const correctMatches = useSelector(state => state.score.correctMatches);
    const incorrectMatches = useSelector(state => state.score.incorrectMatches);
    const gameOver = useSelector(state => state.score.gameOver);
    const numberCards = useSelector(state => state.animal.numberCards)
    const time = useSelector(state => state.score.time);
    const elapsedTime = useSelector(state => state.score.elapsedTime);

    const goBack = () => {
        dispatch(setCorrectMatches(0))
        dispatch(setIncorrectMatches(0))
        dispatch(initGame());
        navigate('/level-selection');
    };

    useEffect(() => {
        if (!gameOver && time > 0) {
        const timer = setInterval(() => {
            dispatch(setTime(time - 1));
        }, 1000);

        return () => clearInterval(timer);
        } else {
            if (!gameOver) {
                dispatch(uiEndShowingCards());
                dispatch(uiCountingUp());

                const timer = setInterval(() => {
                    dispatch(setElapsedTime(elapsedTime + 1));
                }, 1000);

                return () => clearInterval(timer);
            }
        }
    }, [time, elapsedTime, gameOver, dispatch]);

    useEffect(() => {
        if (correctMatches === numberCards) {
            dispatch(endGame());
        }
    }, [correctMatches, numberCards]);

    return (
        <div className="fixed top-0 left-0 p-4 bg-blue-600 text-white text-center w-full z-10">
            <div className="flex items-center justify-between">
                <button onClick={() => goBack()} className="flex items-center p-2 bg-white text-black rounded-md shadow-md hover:bg-gray-200 transition duration-300">
                    <FiArrowLeft className="text-xl cursor-pointer" />
                    <span className="ml-2 return-button">Go back</span>
                </button>
                <div className="text-lg">
                    <p className={`mb-2 font-semibold`}>
                        {time > 0
                            ? <span className="text-red-500">You have {time} seconds to view the cards</span>
                            : elapsedTime === 0
                            ? <span className="text-green-500">GAME STARTS!</span>
                            : <span className="text-green-500">Elapsed time: {elapsedTime} seconds</span>
                        }
                    </p>
                    <p className='inline-block'>
                        <span className="matches-text">
                            Correct Matches: <span className="text-green-500">{correctMatches}</span> |
                            Incorrect Matches: <span className="text-red-500">{incorrectMatches}</span>
                        </span>
                        <span className="matches-icons">
                            <span className="icon text-green-500"><FaCheck className="mr-1" /></span>
                            <span className="text-green-500 mr-2">{correctMatches}</span>
                            <span className="icon text-red-500"><FaTimes className="mr-1" /></span>
                            <span className="text-red-500">{incorrectMatches}</span>
                        </span>
                    </p>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Timer;