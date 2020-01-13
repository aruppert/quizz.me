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

const TextWrapperOutsideCardPlayer1 = styled(TextWrapperOutsideCard)`
  font-family: 'Leckerli One', cursive;
  margin: auto;
  width: 375px;
  font-size: 1.2rem;
`;
const TextWrapperOutsideCardPlayer2 = styled(TextWrapperOutsideCard)`
  color: ${props => props.theme.colors.card2};
  font-family: 'Leckerli One', cursive;
  margin: auto;
  width: 375px;
  font-size: 1.2rem;
`;

export default function GameOverPage({
  numberOfPlayers,
  nameOfPlayer1,
  nameOfPlayer2,
  pointsPlayer1,
  pointsPlayer2,
  questionsPlayed
}) {
  function determineResult(points1, points2) {
    if (points1 === points2) {
      return 'Draw!';
    } else {
      if (points1 > points2) {
        return 'Player 1 won!';
      } else {
        return 'Player 2 won!';
      }
    }
  }
  React.useEffect(() => {
    async function submitHighscore() {
      addHighscore({ name: nameOfPlayer1, score: pointsPlayer1, questionsPlayed: questionsPlayed });
      addHighscore({ name: nameOfPlayer2, score: pointsPlayer2, questionsPlayed: questionsPlayed });
    }
    submitHighscore();
  }, []);
  return (
    <Main>
      <GameOverContainer>
        <TextWrapperOutsideCardPlayer1>
          {nameOfPlayer1} scored {pointsPlayer1} points
        </TextWrapperOutsideCardPlayer1>

        <img src="./images/star-3d-360px.webp" alt="Star in 3D" />
        {numberOfPlayers === 1 ? (
          <TextWrapper>Good job!</TextWrapper>
        ) : (
          <TextWrapper>{determineResult(pointsPlayer1, pointsPlayer2)}</TextWrapper>
        )}
        {numberOfPlayers === 2 && (
          <TextWrapperOutsideCardPlayer2>
            {nameOfPlayer2} scored {pointsPlayer2} points
          </TextWrapperOutsideCardPlayer2>
        )}
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
