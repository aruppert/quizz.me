import React from 'react';
import styled from '@emotion/styled';
import { linearGradientBoxShadow, flexColumnCenter, flexRowWrapCenter } from '../styles/General';

const AnswerContainerWithLGBorderContainer = styled.div`
  ${linearGradientBoxShadow};
  ${flexColumnCenter};
  outline: none;
  margin: 10px;
  width: 160px;
  height: 90px;
  border-radius: 25px;
`;

const AnswerContainerWithLGBorder = styled.button`
  ${flexRowWrapCenter};
  outline: none;
  margin: 10px;
  width: 156px;
  height: 86px;
  font-size: 16px;
  background: ${props => props.theme.colors.background};
  border-radius: 25px;
  color: ${props => props.theme.colors.card2};
  &:focus {
    outline: none;
  }
`;

const TextContainer = styled.div`
  margin: auto;
`;

export default function AnswerCard(props) {
  return (
    <AnswerContainerWithLGBorderContainer onClick={props.onClick} {...props}>
      {' '}
      <AnswerContainerWithLGBorder>
        <TextContainer>{props.value}</TextContainer>
      </AnswerContainerWithLGBorder>
    </AnswerContainerWithLGBorderContainer>
  );
}
