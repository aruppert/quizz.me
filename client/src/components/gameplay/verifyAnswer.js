export default async function verifyAnswer(
  value,
  numberOfPlayers,
  isQuestionLimitReached,
  questionsPlayed,
  correct_answer,
  setShowCorrectAnswer,
  setPointsPlayer1,
  pointsPlayer1,
  setPointsPlayer2,
  pointsPlayer2,
  setQuestionsPlayed,
  getNextQuestion,
  nowPlaying,
  setNowPlaying
) {
  if (numberOfPlayers === 1) {
    isQuestionLimitReached(questionsPlayed + 1);
    if (value === correct_answer) {
      setShowCorrectAnswer(true);
      setTimeout(() => {
        navigator.vibrate([100, 100, 100]);
      }, 500);
      setPointsPlayer1(pointsPlayer1 + 1);
      setQuestionsPlayed(questionsPlayed + 1);
      setTimeout(() => {
        getNextQuestion();
      }, 1800);
    } else {
      setShowCorrectAnswer(true);
      setTimeout(() => {
        navigator.vibrate([500]);
      }, 500);
      setPointsPlayer1(pointsPlayer1 - 1);
      setQuestionsPlayed(questionsPlayed + 1);
      setTimeout(() => {
        getNextQuestion();
      }, 1800);
    }
  } else {
    if (nowPlaying === 1) {
      if (value === correct_answer) {
        setTimeout(() => {
          navigator.vibrate([100, 100, 100]);
        }, 500);
        setPointsPlayer1(pointsPlayer1 + 1);
        setNowPlaying(2);
      } else {
        setTimeout(() => {
          navigator.vibrate([500]);
        }, 500);
        setPointsPlayer1(pointsPlayer1 - 1);
        setNowPlaying(2);
      }
    }
    if (nowPlaying === 2) {
      isQuestionLimitReached(questionsPlayed + 1);
      if (value === correct_answer) {
        setShowCorrectAnswer(true);
        setPointsPlayer2(pointsPlayer2 + 1);
        setQuestionsPlayed(questionsPlayed + 1);
        setTimeout(() => {
          navigator.vibrate([100, 100, 100]);
          setNowPlaying(1);
          getNextQuestion();
        }, 1800);
      } else {
        setShowCorrectAnswer(true);
        setPointsPlayer2(pointsPlayer2 - 1);
        setQuestionsPlayed(questionsPlayed + 1);
        setTimeout(() => {
          navigator.vibrate([500]);
          setNowPlaying(1);
          getNextQuestion();
        }, 1800);
      }
    }
  }
}
