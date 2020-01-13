export default function passQuestion(
  numberOfPlayers,
  pointsPlayer1,
  setPointsPlayer1,
  pointsPlayer2,
  setPointsPlayer2,
  nowPlaying,
  setNowPlaying,
  questionsPlayed,
  setQuestionsPlayed,
  isQuestionLimitReached,
  setShowCorrectAnswer,
  getNextQuestion
) {
  if (numberOfPlayers === 1) {
    setPointsPlayer1(pointsPlayer1 - 0.25);
    setShowCorrectAnswer(true);
    setTimeout(() => {
      isQuestionLimitReached(questionsPlayed + 1);
      getNextQuestion();
    }, 1800);
  } else {
    if (nowPlaying === 1) {
      setPointsPlayer1(pointsPlayer1 - 0.25);
      setNowPlaying(2);
    } else {
      setShowCorrectAnswer(true);
      setPointsPlayer2(pointsPlayer2 - 0.25);
      setQuestionsPlayed(questionsPlayed + 1);

      setTimeout(() => {
        isQuestionLimitReached(questionsPlayed + 1);
        setNowPlaying(1);
        getNextQuestion();
      }, 1800);
    }
  }
}
