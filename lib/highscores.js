const { getCollection } = require('./db');

const collectionName = 'highscores';

async function addHighscore(highscoreData) {
  const highscoreCollection = await getCollection(collectionName);
  await highscoreCollection.insertOne({ ...highscoreData });
}

async function getHighscores() {
  const highscoreCollection = await getCollection(collectionName);
  const cursor = await highscoreCollection
    .find()
    .sort({ score: -1 })
    .limit(10);
  const data = await cursor.toArray();
  if (!data) {
    throw new Error('Can not find highscore');
  }

  return data;
}
exports.addHighscore = addHighscore;
exports.getHighscores = getHighscores;
