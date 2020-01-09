import React from 'react';
import styled from '@emotion/styled';
import AddQuestion from '../icons/AddQuestion';
import { Link } from 'react-router-dom';
import { flexColumnCenter, linearGradientBoxShadow, TextCenterColorOneMargin20 } from '../styles/General';

const AddQuestionsContainer = styled(Link)`
  ${flexColumnCenter};
  ${linearGradientBoxShadow};
  justify-content: space-evenly;
  width: 160px;
  height: 220px;
  border-radius: 25px 0px;
  text-decoration: none;
`;

const TextWrapper = styled.div`
  ${TextCenterColorOneMargin20};
`;

export default function AddQuestionsCard() {
  return (
    <AddQuestionsContainer to="/privacy">
      <TextWrapper>Add questions</TextWrapper>
      <AddQuestion />
    </AddQuestionsContainer>
  );
}
