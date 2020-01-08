import React from 'react';
import styled from '@emotion/styled';

const QuestionContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;
  width: 340px;
  height: 180px;
  font-size: 18px;
  border: 5px solid white;
  border-radius: 25px 0px 25px 0px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;

const TextWrapper = styled.div`
  text-align: center;
  align-self: center;
  color: ${props => props.theme.colors.card1};
  margin: 20px;
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
