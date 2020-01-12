import React from 'react';
import styled from '@emotion/styled';
import { flexColumnCenter, linearGradientBoxShadow } from '../styles/General';
import TextWrapper from './TextWrapper';
import PropTypes from 'prop-types';

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

const StyledTextWrapper = styled(TextWrapper)`
  color: ${props => props.theme.colors.card2};
`;

export default function QuestionCard({ question }) {
  return (
    <QuestionContainer>
      <StyledTextWrapper>{question}</StyledTextWrapper>
    </QuestionContainer>
  );
}

QuestionCard.propTypes = {
  question: PropTypes.string
};
