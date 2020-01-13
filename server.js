require('dotenv').config();
const express = require('express');
const path = require('path');
const { dbInit } = require('./lib/db');
const { addQuestion, getRandomQuestion } = require('./lib/questions');
const { addHighscore, getHighscores } = require('./lib/highscores');

const app = express();
const PORT = process.env.PORT || 8080;
const DB_Name = process.env.DB_NAME;
const DB_URL = process.env.DB_URL;

app.get('/api/highscores', async (request, response) => {
  try {
    const highscores = await getHighscores();
    return response.json(highscores);
  } catch (error) {
    console.error(error);
  }
});

app.get('/api/questions/random', async (request, response) => {
  try {
    const { privateCode } = request.query;
    const question = await getRandomQuestion(privateCode);
    return response.json(question);
  } catch (error) {
    console.error(error);
  }
});

app.post('/api/highscores', async (req, res) => {
  const highscoreData = req.body;
  await addHighscore(highscoreData);
  res.end();
});

app.post('/api/questions', async (req, res) => {
  const questionData = req.body;
  await addQuestion(questionData);
  res.end();
});

app.use(express.json({ extended: false }));

app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

dbInit(DB_URL, DB_Name).then(async () => {
  console.log(`Database ${DB_Name} is ready`);

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
  });
});
