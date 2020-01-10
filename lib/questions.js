const { getCollection } = require('./db');

const collectionName = 'questions';

async function addQuestion(questionData) {
  const questionCollection = await getCollection(collectionName);
  await questionCollection.insertOne({ ...questionData });
}

async function addHighscore(highscoreData) {
  const questionCollection = await getCollection(collectionName);
  await questionCollection.insertOne({ ...highscoreData });
}

async function getHighscores() {
  const questionsCollection = await getCollection(collectionName);
  const cursor = await questionsCollection.aggregate([
    {
      $match: {
        questionsPlayed: "4" 
      }
    },
    {
      $sample: { size: 10 }
    }
  ]);

async function getRandomQuestion(privateCode) {
  const questionsCollection = await getCollection(collectionName);
  const cursor = await questionsCollection.aggregate([
    {
      $match: {
        status: 'active',
        privateCode: privateCode
      }
    },
    {
      $sample: { size: 1 }
    }
  ]);
  const questions = await cursor.toArray();
  const question = questions[0];
  if (!question) {
    throw new Error('Can not find question');
  }

  return question;
}

exports.addHighscore = addHighscore;
exports.addQuestion = addQuestion;
exports.getRandomQuestion = getRandomQuestion;
exports.getHighscores = getHighscores;