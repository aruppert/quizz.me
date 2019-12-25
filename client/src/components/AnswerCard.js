import React from 'react';
import styled from '@emotion/styled';

const AnswerContainer = styled.button`
  display: flex;
  justify-content: center;
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
  color: ${props => props.theme.colors.text1};
`;

export default function AnswerCard(props) {
  return (
    <AnswerContainer onClick={props.onClick} {...props}>
      <TextWrapper>{props.value}</TextWrapper>
    </AnswerContainer>
  );
}
