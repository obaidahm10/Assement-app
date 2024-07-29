// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import assessmentReducer from './features/assessmentSlice';

export default configureStore({
    reducer: {
        auth: authReducer,
        assessment: assessmentReducer,
    },
});
