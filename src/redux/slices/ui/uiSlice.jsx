import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  countingUp: false,
  showingCards: true
};

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
      uiStartLoading: (state) => {
        state.loading = true;
      },
      uiEndLoading: (state) => {
        state.loading = false;
      },
      uiCountingUp: (state) => {
        state.countingUp = true
      },
      uiInitShowingCards: (state) => {
        state.showingCards = true
      },
      uiEndShowingCards: (state) => {
        state.showingCards = false
      }
    }
});
  
export const {
  uiEndLoading,
  uiStartLoading,
  uiCountingUp,
  uiEndShowingCards,
  uiInitShowingCards
} = uiSlice.actions;