export function addQuestion(
  category,
  question,
  correct_answer,
  incorrect_answer1,
  incorrect_answer2,
  incorrect_answer3,
  status
) {
  const questionData = {
    category,
    question,
    correct_answer,
    incorrect_answer1,
    incorrect_answer2,
    incorrect_answer3,
    status
  };
  return fetch('/api/questions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(questionData)
  });
}
