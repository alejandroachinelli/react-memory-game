import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards: [],
  error: null,
  numberCards: 0
};

export const animalSlice = createSlice({
    name: 'animal',
    initialState,
    reducers: {
      setError: (state, action) => {
        state.error = action.error.message
      },
      setCards: (state, action) => {
        state.cards = action.payload;
      },
      setNumberCards: (state, action) => {
        state.numberCards = action.payload
      }
    }
});
  
export const {
  setCards,
  setError,
  setNumberCards,
} = animalSlice.actions;