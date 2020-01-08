const { getCollection } = require('./db');

const collectionName = 'questions';

async function addQuestion(questionData) {
  const questionCollection = await getCollection(collectionName);
  await questionCollection.insertOne({ ...questionData });
}

async function getRandomQuestion() {
  const questionsCollection = await getCollection(collectionName);
  const cursor = await questionsCollection.aggregate([{ $sample: { size: 1 } }]);
  const questions = await cursor.toArray();
  const question = questions[0];
  if (!question) {
    throw new Error('Can not find question');
  }

  return question;
}

exports.addQuestion = addQuestion;
exports.getRandomQuestion = getRandomQuestion;
