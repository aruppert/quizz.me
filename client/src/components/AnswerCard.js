import React from 'react';
import styled from '@emotion/styled';

const AnswerContainer = styled.button`
  display: flex;
  justify-content: center;
  outline: none;
  margin: 10px;
  width: 160px;
  height: 90px;
  font-size: 16px;
  border: 4px solid ${props => props.theme.colors.text1};
  background: ${props => props.theme.colors.background};
  border-radius: 25px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  color: ${props => props.theme.colors.card2};
`;

const TextContainer = styled.div`
  margin: auto;
`;

export default function AnswerCard(props) {
  return (
    <AnswerContainer onClick={props.onClick} {...props}>
      <TextContainer>{props.value}</TextContainer>
    </AnswerContainer>
  );
}
