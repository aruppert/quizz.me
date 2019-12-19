import React from 'react';
import styled from '@emotion/styled';

const AnswerCard = styled.div`
  display: flex;
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

export default function Answer() {
  return (
    <AnswerCard>
      <TextWrapper>Lorem ipsum dolor sit amet!</TextWrapper>
    </AnswerCard>
  );
}
