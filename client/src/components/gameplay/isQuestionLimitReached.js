export default function isQuestionLimitReached(questionsPlayed, amountOfQuestions, setGameOver) {
  if (questionsPlayed === amountOfQuestions) {
    setGameOver(true);
  }
}
