import { configureStore } from '@reduxjs/toolkit';
import { animalSlice } from '../slices/animal';
import { authSlice } from '../slices/auth';
import { uiSlice } from '../slices/ui/uiSlice';
import { scoreSlice } from '../slices/score/scoreSlice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
    animal: animalSlice.reducer,
    score: scoreSlice.reducer
  }
});

export default store;