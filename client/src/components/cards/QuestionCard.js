import React from 'react';
import styled from '@emotion/styled';
import { flexColumnCenter, linearGradientBoxShadow } from '../../styles/General';
import TextWrapper from './../TextWrapper';
import PropTypes from 'prop-types';

const QuestionContainer = styled.div`
  ${flexColumnCenter};
  ${linearGradientBoxShadow};
  background: ${props => props.theme.colors.background};
  margin: 5px 0 0;
  width: 340px;
  height: 180px;
  font-size: 18px;
  border: 5px solid ${props => props.theme.colors.icon1};
  border-radius: 25px 0px;
  animation-name: ${({ animation }) => animation};
  animation-duration: 1.5s;
  @keyframes fadeOutRight {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }
  }

  @keyframes slideInLeft {
    from {
      transform: translate3d(-100%, 0, 0);
      visibility: visible;
    }

    to {
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes slideOutRight {
    from {
      transform: translate3d(0, 0, 0);
    }

    to {
      visibility: hidden;
      transform: translate3d(100%, 0, 0);
    }
  }
  @keyframes slideOutRightAndInLeft {
    from {
      transform: translate(0%);
    }
    45% {
      transform: translate(100%);
    }
    50% {
      opacity: -1;
      transform: translate(-200%);
    }
    55% {
      opacity: 1;
    }
    to {
      transform: translate(0%);
    }
  }
`;

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
  question: PropTypes.string
};
