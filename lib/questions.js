const { getCollection } = require('./db');

const collectionName = 'questions';

// CREATE NEW COLLECTION WITH CATEGORY AS THE NAME AND  ADD QUESTION TO IT
// async function addQuestion(questionData) {
//   const category = questionData.category;
//   const questionCollection = await getCollection(category);
//   await questionCollection.insertOne({ ...questionData });
// }

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

// async function getRandomQuestion() {
// console.log(categories);
// const possibleCategories = categories;
// const shuffledCategories = possibleCategories.sort(() => Math.random() - 0.5);
// const nextCategory = shuffledCategories[0];
//   const questionsCollection = await getCollection(collectionName);
//   const cursor = await questionsCollection.aggregate([{ $sample: { size: 1 } }]);
//   const questions = await cursor.toArray();
//   const data = questions[0];
//   if (!data) {
//     throw new Error('Can not find question');
//   }

//   return data;
// }
