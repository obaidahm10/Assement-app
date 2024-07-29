// server/seed.js
const mongoose = require('mongoose');
const Question = require('./models/Question');

mongoose.connect('mongodb+srv://kejejim479:zvEu9dtpH7fOZa3w@cluster0.dnywgaa.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const questions = [
    {
        question: 'Question: What is the primary purpose of the virtual DOM in React?',
        options: [
            { text: 'To enhance security', score: 1 },
            { text: 'To improve application performance', score: 4 },
            { text: 'To handle database operations', score: 3 },
            { text: 'To manage user authentication', score: 2 },
        ],
    },
    {
        question: 'Question: What does REST stand for in web development?',
        options: [
            { text: 'Rapid Execution and Secure Transmission', score: 2 },
            { text: 'Representational State Transfer', score: 4 },
            { text: 'Real-time Stream Transfer', score: 1 },
            { text: 'Recursive State Transition', score: 3 },
        ],
    },
    {
        question: 'Question: Which of the following is a NoSQL database?',
        options: [
            { text: 'MySQL', score: 1 },
            { text: 'PostgreSQL', score: 2 },
            { text: 'MongoDB', score: 4 },
            { text: 'SQLite', score: 3 },
        ],
    },
    {
        question: 'Question: Which tool is commonly used for task automation in front-end development?',
        options: [
            { text: 'Webpack', score: 4 },
            { text: 'Nginx', score: 1 },
            { text: 'Apache', score: 2 },
            { text: 'Docker', score: 3 },
        ],
    },    
    {
        question: 'Question: In a RESTful API, which HTTP method is typically used to update an existing resource?',
        options: [
            { text: 'GET', score: 1 },
            { text: 'POST', score: 2 },
            { text: 'PUT', score: 4 },
            { text: 'DELETE', score: 3 },
        ],
    },
];

Question.insertMany(questions)
    .then(() => {
        console.log('Questions inserted');
        mongoose.connection.close();
    })
    .catch((err) => {
        console.error(err);
        mongoose.connection.close();
    });
