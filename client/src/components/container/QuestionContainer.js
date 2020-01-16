import styled from '@emotion/styled';
import { flexColumnCenter, linearGradientBoxShadow } from '../../styles/General';

const QuestionContainer = styled.div`
  ${flexColumnCenter};
  ${linearGradientBoxShadow};
  background: ${props => props.theme.colors.background};
  margin: 5px 0 0;
  width: 340px;
  height: 180px;
  font-size: 18px;
  border: 5px solid ${props => props.theme.colors.icon};
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

export default QuestionContainer;
