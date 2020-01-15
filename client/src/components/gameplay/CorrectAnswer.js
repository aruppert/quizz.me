import { pulse } from '../../animations/General';
import styled from '@emotion/styled';
import AnswerCard from '../cards/AnswerCard';
import { flexColumnCenter } from '../../styles/General';

export const CorrectAnswerText = styled.p`
  color: ${props => props.theme.colors.correct};
  font-family: 'Leckerli One', cursive;
  font-size: 1.5rem;
  margin: 18px 0 20px;
`;

export const CorrectAnswerCard = styled(AnswerCard)`
  border: 4px solid ${props => props.theme.colors.correct};
  align-self: center;
  animation: ${pulse} 0.8s 3;
`;

export const CorrectAnswerContainer = styled.div`
  ${flexColumnCenter};
  margin: 10px 0 0;
  width: 360px;
  height: 215px;
  background: ${props => props.theme.colors.background};
`;
