import React from 'react';
import styled from '@emotion/styled';
import { tada } from '../animations/General';
import PropTypes from 'prop-types';
import { flexColumnCenter } from '../styles/General';
import { addHighscore } from '../api/highscores';
import TextWrapperOutsideCard from '../components/TextWrapperOutsideCard';
import { Fireworks } from 'fireworks/lib/react';

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
  top: 50vh;
  left: 0px;
  width: 100%;
  font-family: 'Leckerli One', cursive;
  font-size: 1.5rem;
  color: ${props => props.theme.colors.text2};
  animation: ${tada} 1.8s 2;
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

const Star = styled.img`
  animation: ${tada} 1.8s 2;
`;

export default function GameOverPage({
  numberOfPlayers,
  namesOfPlayers,
  playerPoints,
  questionsPlayed
}) {
  let fxProps = {
    count: 3,
    interval: 1500,
    colors: ['#F3E85C', '#D98E05', '#F2F2F2'],
    calc: (props, i) => ({
      ...props,
      x: (i + 1) * (window.innerWidth / 2) - (i + 1) * 100,
      y: 200 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0)
    })
  };

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
      <Fireworks {...fxProps} />
      <GameOverContainer>
        <TextWrapperOutsideCard1>
          {namesOfPlayers[1]} scored {playerPoints[1]} points
        </TextWrapperOutsideCard1>
        {numberOfPlayers > 1 && (
          <TextWrapperOutsideCard2>
            {namesOfPlayers[2]} scored {playerPoints[2]} points
          </TextWrapperOutsideCard2>
        )}
        <Star src="./images/star-3d-360px.webp" alt="Star in 3D" />
        <TextWrapper>Good job!</TextWrapper>
        {numberOfPlayers > 2 && (
          <TextWrapperOutsideCard1>
            {namesOfPlayers[3]} scored {playerPoints[3]} points
          </TextWrapperOutsideCard1>
        )}
        {numberOfPlayers > 3 && (
          <TextWrapperOutsideCard2>
            {namesOfPlayers[4]} scored {playerPoints[4]} points
          </TextWrapperOutsideCard2>
        )}
      </GameOverContainer>
    </Main>
  );
}

GameOverPage.propTypes = {
  numberOfPlayers: PropTypes.number,
  namesOfPlayers: PropTypes.object,
  playerPoints: PropTypes.object,
  questionsPlayed: PropTypes.number
};
