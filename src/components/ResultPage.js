// src/components/ResultPage.js
import React from 'react';
import { useSelector } from 'react-redux';

function ResultPage() {
    const score = useSelector(state => state.assessment.score);

    return (
        <div>
            <h1>Your Score: {score}</h1>
        </div>
    );
}

export default ResultPage;
