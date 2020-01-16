import React from 'react';
import styled from '@emotion/styled';
import TextWrapper from '../textAndInput/TextWrapper';
import PropTypes from 'prop-types';
import QuestionContainer from '../container/QuestionContainer';

const StyledTextWrapper = styled(TextWrapper)`
  color: ${props => props.theme.colors.card2};
`;

export default function QuestionCard({ question, animation }) {
  return (
    <QuestionContainer animation={animation}>
      <StyledTextWrapper>{question}</StyledTextWrapper>
    </QuestionContainer>
  );
}

QuestionCard.propTypes = {
  question: PropTypes.string,
  animation: PropTypes.string
};
