// src/features/assessmentSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const assessmentSlice = createSlice({
    name: 'assessment',
    initialState: {
        score: 0,
    },
    reducers: {
        addScore: (state, action) => {
            state.score += action.payload;
        },
        resetScore: (state) => {
            state.score = 0;
        },
    },
});

export const { addScore, resetScore } = assessmentSlice.actions;

export default assessmentSlice.reducer;
