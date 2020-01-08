export function addQuestion(questionData) {
  console.log(questionData);
  return fetch('/api/questions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(questionData)
  });
}
