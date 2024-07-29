// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <h1>Welcome to the Assessment App</h1>
            <Link to="/assessment">
                <button>Take Assessment</button>
            </Link>
        </div>
    );
}

export default HomePage;
