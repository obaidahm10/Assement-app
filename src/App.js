// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import AssessmentPage from './components/AssessmentPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import ResultPage from './components/ResultPage';

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/login" style={{ float: 'right' }}>Login</Link>
                    <Link to="/signup" style={{ float: 'right' }}>Signup</Link>
                </nav>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/assessment" component={AssessmentPage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/signup" component={SignupPage} />
                    <Route path="/result" component={ResultPage} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
