import React from 'react';
import styled from '@emotion/styled';
import { tada } from '../animations/General';
import PropTypes from 'prop-types';
import { flexColumnCenter } from '../styles/General';
import { addHighscore } from '../api/highscores';
import TextWrapperOutsideCard from '../components/TextWrapperOutsideCard';

const Main = styled.main`
  ${flexColumnCenter};
  height: 100%;
  flex-grow: 1;
  width: 100vw;
`;

const TextWrapper = styled.div`
  position: absolute;
  z-index: 1000;
  ${flexColumnCenter};
  top: 47vh;
  left: 0px;
  width: 100%;
  font-family: 'Leckerli One', cursive;
  font-size: 1.2rem;
  color: ${props => props.theme.colors.text1};
  animation: ${tada} 1.2s infinite;
`;

const GameOverContainer = styled.div``;

const TextWrapperOutsideCard1 = styled(TextWrapperOutsideCard)`
  font-family: 'Leckerli One', cursive;
  margin: auto;
  width: 375px;
  font-size: 1.2rem;
`;
const TextWrapperOutsideCard2 = styled(TextWrapperOutsideCard)`
  color: ${props => props.theme.colors.card2};
  font-family: 'Leckerli One', cursive;
  margin: auto;
  width: 375px;
  font-size: 1.2rem;
`;

export default function GameOverPage({
  numberOfPlayers,
  namesOfPlayers,
  playerPoints,
  questionsPlayed
}) {
  // function determineResult(playerPoints) {
  //   // if (
  //   //   points1 === points2 ||
  //   //   points2 === points3 ||
  //   //   points3 === points4 ||
  //   //   points1 === points3 ||
  //   //   points1 === points4 ||
  //   //   points2 === points4
  //   // ) {
  //   //   return 'Draw!';
  //   // } else {
  //   let obj = { playerPoints };
  //   Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b));
  //   return obj;
  //   // }
  // }

  console.log(playerPoints);
  React.useEffect(() => {
    async function submitHighscore() {
      addHighscore({
        name: namesOfPlayers[1],
        score: playerPoints[1],
        questionsPlayed: questionsPlayed
      });
      addHighscore({
        name: namesOfPlayers[2],
        score: playerPoints[2],
        questionsPlayed: questionsPlayed
      });
      addHighscore({
        name: namesOfPlayers[3],
        score: playerPoints[3],
        questionsPlayed: questionsPlayed
      });
      addHighscore({
        name: namesOfPlayers[4],
        score: playerPoints[4],
        questionsPlayed: questionsPlayed
      });
    }
    submitHighscore();
  }, []);
  return (
    <Main>
      <GameOverContainer>
        <TextWrapperOutsideCard1>
          {namesOfPlayers[1]} scored {playerPoints[1]} points
        </TextWrapperOutsideCard1>
        <TextWrapperOutsideCard2>
          {namesOfPlayers[2]} scored {playerPoints[2]} points
        </TextWrapperOutsideCard2>

        <img src="./images/star-3d-360px.webp" alt="Star in 3D" />
        {/* {numberOfPlayers === 1 ? (
          <TextWrapper>Good job!</TextWrapper>
        ) : (
          <TextWrapper>
            {determineResult(playerPoints[1], playerPoints[2], playerPoints[3], playerPoints[4])}
          </TextWrapper>
        )} */}

        <TextWrapperOutsideCard1>
          {namesOfPlayers[3]} scored {playerPoints[3]} points
        </TextWrapperOutsideCard1>
        <TextWrapperOutsideCard2>
          {namesOfPlayers[4]} scored {playerPoints[4]} points
        </TextWrapperOutsideCard2>
      </GameOverContainer>
    </Main>
  );
}

GameOverPage.propTypes = {
  pointsPlayer1: PropTypes.number,
  pointsPlayer2: PropTypes.number,
  nameOfPlayer1: PropTypes.string,
  nameOfPlayer2: PropTypes.string
};
