// server/index.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./auth');
const Question = require('./models/Question');
const User = require('./models/User'); // Ensure this line correctly imports the User model

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://kejejim479:zvEu9dtpH7fOZa3w@cluster0.dnywgaa.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.get('/', (req, res) => {
    res.send('Welcome to the Assessment API');
});

app.get('/api/questions', async (req, res) => {
    try {
        const questions = await Question.find();
        res.json(questions);
    } catch (error) {
        res.status(500).send('Server Error');
    }
});

app.post('/api/submit-assessment', async (req, res) => {
    const { userId, answers } = req.body;

    try {
        // Process the answers here and save them to the database if necessary
        // For simplicity, we're just logging them and sending a response
        console.log('User ID:', userId);
        console.log('Answers:', answers);

        res.status(200).send('Assessment submitted successfully');
    } catch (error) {
        res.status(500).send('Server Error');
    }
});

app.use('/auth', authRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
