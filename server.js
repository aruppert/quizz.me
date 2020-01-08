require('dotenv').config();
const express = require('express');
const path = require('path');
const { dbInit } = require('./lib/db');
const app = express();
const DB_Name = process.env.DB_NAME;
const DB_URL = process.env.DB_URL;

const { addQuestion, getQuestion, getRandomQuestion } = require('./lib/questions');

app.use(express.json({ extended: false }, path.join(__dirname, 'client/build')));

app.get('/api/questions', async (req, res) => {
  try {
    const result = await getQuestion(req.params.username);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
});

app.get('/api/questions/random', async (request, response) => {
  try {
    const question = await getRandomQuestion();
    return response.json(question);
  } catch (error) {
    console.error(error);
  }
});

app.post('/api/questions', (req, res) => {
  const questionData = req.body;
  addQuestion(questionData);
  res.end();
});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

dbInit(DB_URL, DB_Name).then(async () => {
  console.log(`Database ${DB_Name} is ready`);

  app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
  });
});
