import React from 'react';
import styled from '@emotion/styled';

const AnswerContainer = styled.div`
  display: flex;
  margin: 10px;
  width: 160px;
  height: 90px;
  background: linear-gradient(
    to right,
    ${props => props.theme.colors.card2},
    ${props => props.theme.colors.card1}
  );
  border-radius: 25px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;

const TextWrapper = styled.div`
  text-align: center;
  align-self: center;
  color: ${props => props.theme.colors.text1};
`;

export default function AnswerCard() {
  return (
    <AnswerContainer>
      <TextWrapper>Lorem ipsum dolor sit amet!</TextWrapper>
    </AnswerContainer>
  );
}
