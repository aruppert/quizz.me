import React from 'react';
import styled from '@emotion/styled';
import Star from '../icons/Star';
import StarBG from '../icons/StarBG';
import Header from './Header';
import Footer from './Footer';
import { tada } from './Animations';
import PropTypes from 'prop-types';

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  height: 100vh;
  width: 100vw;
`;

const StarWrapper = styled.svg`
  position: relative;
  height: 450px;
  width: 450px;
`;

const TextWrapper = styled.div`
  position: absolute;
  z-index: 1000;
  display: flex;
  top: 47vh;
  left: 0px;
  width: 100%;
  align-content: center;
  justify-content: center;
  /* transform: translate(-50%, -50%); */
  font-family: 'Leckerli One', cursive;
  font-size: 1.2rem;
  color: ${props => props.theme.colors.text1};
  animation: ${tada} 1.2s infinite;
`;

const ScoreContainer = styled.div`
  position: absolute;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  top: 120px;
  left: 0px;
  width: 100%;
`;
const ScoreCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.active};
  border-radius: 50%;
  height: 100px;
  width: 100px;
`;
const ScoreTextWrapper = styled.p``;

const GameOverContainer = styled.div``;

const Name = styled.p`
  color: ${props => props.theme.colors.text1};
  font-family: 'Leckerli One', cursive;
`;

const Score = styled.p`
  color: ${props => props.theme.colors.text1};
  font-family: 'Leckerli One', cursive;
`;

export default function GameOver(props) {
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
  return (
    <Main>
      <Header />
      <GameOverContainer>
        <ScoreContainer>
          <ScoreCircle>
            <ScoreTextWrapper>
              <Name>{props.nameOfPlayer1}:</Name>
              <Score>{props.pointsPlayer1} points</Score>
            </ScoreTextWrapper>
          </ScoreCircle>
          <ScoreCircle>
            <ScoreTextWrapper>
              <Name>{props.nameOfPlayer2}:</Name>
              <Score>{props.pointsPlayer2} points</Score>
            </ScoreTextWrapper>
          </ScoreCircle>
        </ScoreContainer>
        <StarWrapper>
          <StarBG />
          <Star />
        </StarWrapper>
        <TextWrapper>{determineResult(props.pointsPlayer1, props.pointsPlayer2)}</TextWrapper>
      </GameOverContainer>
      <Footer />
    </Main>
  );
}

GameOver.propTypes = {
  pointsPlayer1: PropTypes.number,
  pointsPlayer2: PropTypes.number,
  nameOfPlayer1: PropTypes.string,
  nameOfPlayer2: PropTypes.string
};
