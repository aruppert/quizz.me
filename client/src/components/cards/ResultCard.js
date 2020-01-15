import React from 'react';
import styled from '@emotion/styled';
import AnswerCard from '../cards/AnswerCard';
import { pulse, fadeOut } from '../../animations/General';
import { flexColumnCenter } from '../../styles/General';

export const CorrectAnswerText = styled.p`
  color: ${props => props.theme.colors.correct};
  font-family: 'Leckerli One', cursive;
  font-size: 1.5rem;
  margin: 18px 0 20px;
  animation: ${pulse} 0.8s 3;
`;
export const CorrectionText = styled.p`
  color: ${props => props.theme.colors.correct};
  font-family: 'Leckerli One', cursive;
  font-size: 1.5rem;
  margin: 18px 0 20px;
`;
export const WrongAnswerText = styled.p`
  color: ${props => props.theme.colors.warn};
  font-family: 'Leckerli One', cursive;
  font-size: 1.5rem;
  margin: 18px 0 20px;
  animation: ${fadeOut} 3s 1;
`;

export const CorrectAnswerCard = styled(AnswerCard)`
  border: 4px solid ${props => props.theme.colors.correct};
  align-self: center;
`;

export const CorrectAnswerContainer = styled.div`
  ${flexColumnCenter};
  margin: 10px 0 0;
  width: 360px;
  height: 215px;
  background: ${props => props.theme.colors.background};
`;

export default function ResultCard({ correctAnswer, answerGivenIsCorrect }) {
  return (
    <CorrectAnswerContainer>
      {answerGivenIsCorrect && <CorrectAnswerText>Perfect, your are right!</CorrectAnswerText>}
      {!answerGivenIsCorrect && (
        <>
          <WrongAnswerText>Sorry, but that's wrong....</WrongAnswerText>
          <CorrectionText>The correct answer is:</CorrectionText>
          <CorrectAnswerCard value={correctAnswer} />
        </>
      )}
    </CorrectAnswerContainer>
  );
}
