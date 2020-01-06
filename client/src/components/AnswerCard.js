import React from 'react';
import styled from '@emotion/styled';

const AnswerContainer = styled.button`
  display: flex;
  outline: none;
  border: 4px solid white;
  justify-content: center;
  margin: 10px;
  width: 160px;
  height: 90px;
  font-size: 16px;
  background: #f2f2f2;
  border-radius: 25px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  color: ${props => props.theme.colors.card2};
`;

export default function AnswerCard(props) {
  return (
    <AnswerContainer onClick={props.onClick} {...props}>
      {props.value}
    </AnswerContainer>
  );
}
