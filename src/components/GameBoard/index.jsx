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

    const containerCards = {
        '9': 'grid-cols-6 grid-rows-3',
        '12': 'grid-cols-8 grid-rows-3',
        '15': 'grid-cols-10 grid-rows-3',
        '18': 'grid-cols-12 grid-rows-3',
    }

    const cardSize = {
      '9': 'card-nine',
      '12': 'card-twelve',
      '15': 'card-fifteen',
      '18': 'card-eighteen',
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
                <div className={`grid ${containerCards[numberCards]} gap-4`}>
                    {shuffledCards.map((card, index) => (
                        <div
                            key={index}
                            className={`${cardSize[numberCards]} ${flippedCards.includes(index) || matchedPairs.includes(index) ? 'flip' : ''}`}
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