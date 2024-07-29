// src/components/AssessmentPage.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addScore } from '../features/assessmentSlice';
import { useHistory } from 'react-router-dom';

function AssessmentPage() {
    const [questions, setQuestions] = useState([]);
    const dispatch = useDispatch();
    const history = useHistory();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    useEffect(() => {
        fetch('/api/questions')
            .then(response => response.json())
            .then(data => setQuestions(data));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isAuthenticated) {
            history.push('/login');
            return;
        }
        history.push('/result');
    };

    return (
        <form onSubmit={handleSubmit}>
            {questions.map((question, index) => (
                <div key={index}>
                    <p>{question.question}</p>
                    {question.options.map((option, idx) => (
                        <div key={idx}>
                            <input
                                type="radio"
                                name={`question-${index}`}
                                value={option.score}
                                onChange={() => dispatch(addScore(option.score))}
                            />
                            {option.text}
                        </div>
                    ))}
                </div>
            ))}
            <button type="submit">Submit</button>
        </form>
    );
}

export default AssessmentPage;
