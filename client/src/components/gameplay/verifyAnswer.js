export default async function verifyAnswer(
  value,
  numberOfPlayers,
  isQuestionLimitReached,
  questionsPlayed,
  correctAnswer,
  setShowCorrectAnswer,
  setQuestionsPlayed,
  getNextQuestion,
  nowPlaying,
  setNowPlaying,
  increasePointsOfCurrentPlayerByOne,
  decreasePointsOfCurrentPlayerByAmount
) {
  async function verifyAnswer(value) {
    if (nowPlaying < numberOfPlayers) {
      if (value === correctAnswer) {
        setShowCorrectAnswer(true);
        increasePointsOfCurrentPlayerByOne(nowPlaying);
        navigator.vibrate([100, 100, 100]);
        setTimeout(() => {
          setNowPlaying(nowPlaying + 1);
          setShowCorrectAnswer(false);
        }, 2400);
      } else {
        setShowCorrectAnswer(true);
        decreasePointsOfCurrentPlayerByAmount(nowPlaying, 1);
        navigator.vibrate([500]);
        setTimeout(() => {
          setNowPlaying(nowPlaying + 1);
          setShowCorrectAnswer(false);
        }, 2400);
      }
    } else {
      if (value === correctAnswer) {
        setShowCorrectAnswer(true);
        increasePointsOfCurrentPlayerByOne(nowPlaying);
        setQuestionsPlayed(questionsPlayed + 1);
        navigator.vibrate([100, 100, 100]);
        setTimeout(() => {
          isQuestionLimitReached(questionsPlayed + 1);
          setNowPlaying(1);
          getNextQuestion();
        }, 2400);
      } else {
        setShowCorrectAnswer(true);
        decreasePointsOfCurrentPlayerByAmount(nowPlaying, 1);
        setQuestionsPlayed(questionsPlayed + 1);
        navigator.vibrate([500]);
        setTimeout(() => {
          isQuestionLimitReached(questionsPlayed + 1);
          setNowPlaying(1);
          getNextQuestion();
        }, 2400);
      }
    }
  }
}
