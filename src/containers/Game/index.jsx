import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnimalService } from '../../services/animalServices';
import { setCards, setError } from '../../redux/slices/animal';
import { uiStartLoading, uiEndLoading, uiInitShowingCards } from '../../redux/slices/ui';
import { initGame, setTime, setElapsedTime } from '../../redux/slices/score';
import { GameBoard, Timer, Loading, GameOverPanel, Error } from '../../components';
import { useNavigate } from 'react-router-dom';
import './styles.css'

const Game = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const numberCards = useSelector(state => state.animal.numberCards)
    const error = useSelector(state => state.animal.error);
    const loading = useSelector(state => state.ui.loading)
    const gameOver = useSelector(state => state.score.gameOver);

    useEffect(() => {
        if(numberCards === 0){
            navigate('/level-selection')
        }
    }, [numberCards, navigate])

    useEffect(() => {
        const loadAnimals = async () => {
          try {
            dispatch(uiStartLoading());
            const animals = await fetchAnimalService(numberCards);
            dispatch(setCards(animals));
            dispatch(uiEndLoading());
            dispatch(setTime(5));
            dispatch(setElapsedTime(0));
            dispatch(uiInitShowingCards());
            dispatch(initGame());
          } catch (error) {
            setError(`An error occurred while loading cards for the game. Error: ${error}`)
          }
        };
    
        loadAnimals();
    }, [dispatch, numberCards]);

    return (
        <div className="bg-gradient-to-r from-blue-300 to-blue-500 game-container">
            {loading ? (
                <Loading />
            ) : (
                <>
                {gameOver ? (
                    <GameOverPanel />
                ) : (
                    <>
                        <Timer />
                        <GameBoard />
                    </>
                )}
                </>
            )}
            {error && (
                <Error />
            )}
        </div>
    );
};

export default Game;