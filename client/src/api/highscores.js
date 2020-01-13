export function addHighscore(highscoreData) {
  return fetch('/api/highscores', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(highscoreData)
  });
}
