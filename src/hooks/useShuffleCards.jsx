import { useState, useEffect } from 'react';

const shuffleFunction = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
};

const useShuffleCards = (cards) => {
  const [shuffledCards, setShuffledCards] = useState([]);

  useEffect(() => {
    const shuffled = shuffleFunction(cards);
    setShuffledCards(shuffled);
  }, [cards]);

  return shuffledCards;
};

export default useShuffleCards;