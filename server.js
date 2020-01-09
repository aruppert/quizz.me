require('dotenv').config();
require;
const express = require('express');
const path = require('path');
const { dbInit } = require('./lib/db');
const { addQuestion, getRandomQuestion } = require('./lib/questions');

const app = express();
const DB_Name = process.env.DB_NAME;
const DB_URL = process.env.DB_URL;

app.use(express.json({ extended: false }));

app.get('/api/questions/random', async (request, response) => {
  try {
    const question = await getRandomQuestion();
    return response.json(question);
  } catch (error) {
    console.error(error);
  }
});

app.post('/api/questions', async (req, res) => {
  const questionData = req.body;
  await addQuestion(questionData);
  res.end();
});


// app.get('*', function(req, res) {
//   res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
// });


dbInit(DB_URL, DB_Name).then(async () => {
  console.log(`Database ${DB_Name} is ready`);

  app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
  });
});
