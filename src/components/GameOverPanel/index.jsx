import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uiInitShowingCards } from '../../redux/slices/ui';
import { initGame, setTime, setElapsedTime, setCorrectMatches, setIncorrectMatches } from '../../redux/slices/score';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const GameOverPanel = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const incorrectMatches = useSelector(state => state.score.incorrectMatches);
    const elapsedTime = useSelector(state => state.score.elapsedTime);
    const userName = useSelector(state => state.auth.userName);
    const numberCards = useSelector(state => state.animal.numberCards);

    const handleRestartGame = () => {
        if(numberCards === 0){
            navigate('/level-selection')
        }else{
            dispatch(initGame());
            dispatch(setTime(5));
            dispatch(setElapsedTime(0));
            dispatch(uiInitShowingCards());
            dispatch(setCorrectMatches(0));
            dispatch(setIncorrectMatches(0));
        }
    };

    return (
        <div className="flex flex-col items-center game-over-enter">
            <p className="text-4xl font-semibold text-center mb-4">
                ¡Game Over!
            </p>
            <p className="text-lg text-center mb-4">
                {userName}, you managed to match all cards in {elapsedTime} seconds and had {incorrectMatches} failure.
            </p>
            <p className="text-lg text-center mb-8">
                ¡Keep improving and beating your records!
            </p>
            <div className="flex space-x-4">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    onClick={() => {
                        handleRestartGame()
                        navigate('/level-selection')
                    }}
                >
                    Back to select levels
                </button>
                <button
                    className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                    onClick={() => {handleRestartGame()}}
                >
                    Reset level
                </button>
            </div>
        </div>
    );
};

export default GameOverPanel;