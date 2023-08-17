import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    time: 0,
    elapsedTime: 0,
    correctMatches: 0,
    incorrectMatches: 0,
    totalTime: 0,
    gameOver: false
};

export const scoreSlice = createSlice({
    name: 'score',
    initialState,
    reducers: {
      setTime: (state, action) => {
        state.time = action.payload;
      },
      setElapsedTime: (state, action) => {
        state.elapsedTime = action.payload;
      },
      setCorrectMatches: (state, action) => {
        state.correctMatches = action.payload;
      },
      setIncorrectMatches: (state, action) => {
        state.incorrectMatches = action.payload;
      },
      setTotalTime: (state, action) => {
        state.totalTime = action.payload
      },
      endGame: (state) => {
        state.gameOver = true
      },
      initGame: (state) => {
        state.gameOver = false
      }
    }
});
  
export const {
    setTime,
    setElapsedTime,
    setCorrectMatches,
    setIncorrectMatches,
    setTotalTime,
    endGame,
    initGame
} = scoreSlice.actions;