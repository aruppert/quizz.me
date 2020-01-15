import styled from '@emotion/styled';

const AnswerContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  width: 360px;
  margin: 10px 0 8px;
  animation-name: ${({ animation }) => animation};
  animation-duration: 2s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
export default AnswerContainer;
