import React, {useState, useEffect} from 'react';
import {Card} from '../';
import { useSelector, useDispatch } from 'react-redux';
import { setCorrectMatches, setIncorrectMatches } from '../../redux/slices/score';
import useShuffleCards from '../../hooks/useShuffleCards';
import './style.css'

const GameBoard = () => {
    const dispatch = useDispatch();
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedPairs, setMatchedPairs] = useState([]);
    const countingUp = useSelector(state => state.ui.countingUp);
    const showingCards = useSelector(state => state.ui.showingCards);
    const numberCards = useSelector(state => state.animal.numberCards);
    const cards = useSelector(state => state.animal.cards);
    const correctMatches = useSelector(state => state.score.correctMatches);
    const incorrectMatches = useSelector(state => state.score.incorrectMatches);
    const time = useSelector(state => state.score.time);

    const shuffledCards = useShuffleCards(cards);


    const handleCardClick = (index) => {
        if (countingUp && time === 0 && flippedCards.length < 2 && !flippedCards.includes(index) && !matchedPairs.includes(index)) {
          setFlippedCards(prevFlipped => [...prevFlipped, index]);
        }
      };

    const colsCards = {
        '9': 'grid-cols-3 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6',
        '12': 'grid-cols-3 md:grid-cols-8 lg:grid-cols-8 xl:grid-cols-8',
        '15': 'grid-cols-5 md:grid-cols-10 lg:grid-cols-10 xl:grid-cols-10',
        '18': 'grid-cols-6 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12',
    }

    const rowsCards = {
      '9': 'grid-rows-6 md:grid-rows-3 lg:grid-rows-3 xl:grid-rows-3',
      '12': 'grid-rows-6 md:grid-rows-3 lg:grid-rows-3 xl:grid-rows-3',
      '15': 'grid-rows-6 md:grid-rows-3 lg:grid-rows-3 xl:grid-rows-3',
      '18': 'grid-rows-6 md:grid-rows-3 lg:grid-rows-3 xl:grid-rows-3',
  }

    const cardWidth = {
      '9': 'w-8 md:w-20 lg:w-28 xl:w-32',
      '12': 'w-8 md:w-16 lg:w-24 xl:w-28',
      '15': 'w-8 md:w-12 lg:w-20 xl:w-24',
      '18': 'w-8 md:w-8 lg:w-16 xl:w-20',
    }

    const cardHeight = {
      '9': 'h-8 md:h-20 lg:h-28 xl:h-32',
      '12': 'h-8 md:h-16 lg:h-24 xl:h-28',
      '15': 'h-8 md:h-12 lg:h-20 xl:h-24',
      '18': 'h-8 md:h-8 lg:h-16 xl:h-20',
    }

    useEffect(() => {
        if (flippedCards.length === 2) {
          const [firstCardIndex, secondCardIndex] = flippedCards;
    
          if (shuffledCards[firstCardIndex].fields.image.url === shuffledCards[secondCardIndex].fields.image.url) {
            setMatchedPairs(prevMatched => [...prevMatched, firstCardIndex, secondCardIndex]);
            let correct = correctMatches + 1;
            dispatch(setCorrectMatches(correct));
          }else{
            let incorrect = incorrectMatches + 1; 
            dispatch(setIncorrectMatches(incorrect))
          }
          setTimeout(() => {
            setFlippedCards([]);
          }, 1000);
        }
      }, [flippedCards]);

    return (
        <div className="w-full max-w-full p-6 bg-white rounded-lg shadow-md mt-16">
            <div className="flex justify-center">
                <div className={`grid ${colsCards[numberCards]} ${rowsCards[numberCards]} gap-4`}>
                    {shuffledCards.map((card, index) => (
                        <div
                            key={index}
                            className={`card ${cardWidth[numberCards]} ${cardHeight[numberCards]} ${flippedCards.includes(index) || matchedPairs.includes(index) ? 'flip' : ''}`}
                            onClick={() => handleCardClick(index)}
                        >
                            <div className="card-inner">
                              <div className="card-front">
                                  {showingCards || flippedCards.includes(index) || matchedPairs.includes(index) ? (
                                      <Card imageUrl={card.fields.image.url} />
                                  ) : (
                                      <div className="card-back-empty rounded overflow-hidden"></div>
                                  )}
                              </div>
                              <div className="card-back">
                                  <Card imageUrl={card.fields.image.url} />
                              </div>
                            </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default GameBoard;