import React from 'react';
import styled from '@emotion/styled';

const QuestionContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 340px;
  height: 180px;
  background: linear-gradient(
    to right,
    ${props => props.theme.colors.card2},
    ${props => props.theme.colors.card1}
  );
  border-radius: 25px 0px 25px 0px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;

const TextWrapper = styled.div`
  text-align: center;
  align-self: center;
  color: ${props => props.theme.colors.text1};
  margin: 20px;
`;

export default function QuestionCard(props) {
  return (
    <QuestionContainer>
      <TextWrapper>{props.question}</TextWrapper>
    </QuestionContainer>
  );
}
