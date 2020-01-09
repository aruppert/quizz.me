import React from 'react';
import styled from '@emotion/styled';
import { flexColumnCenter, linearGradientBoxShadow } from '../styles/General';
import TextWrapper from './TextWrapper';

const QuestionContainer = styled.div`
  ${flexColumnCenter};
  ${linearGradientBoxShadow};
  background: ${props => props.theme.colors.background};
  width: 340px;
  height: 180px;
  font-size: 18px;
  border: 5px solid ${props => props.theme.colors.icon1};
  border-radius: 25px 0px;
`;

export default function QuestionCard(props) {
  return (
    <QuestionContainer>
      <TextWrapper>
        Score: {props.score} of possible {props.total}
      </TextWrapper>
      <TextWrapper>{props.question}</TextWrapper>
    </QuestionContainer>
  );
}
