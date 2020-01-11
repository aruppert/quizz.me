export function addHighscore(highscoreData) {
  return fetch('/api/questions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(highscoreData)
  });
}
