import styled from '@emotion/styled';
import { flexColumnCenter } from '../../styles/General';
import { tada } from '../../animations/General';

const TextResultWrapper = styled.div`
  position: absolute;
  z-index: 1000;
  ${flexColumnCenter};
  top: 50vh;
  left: 0px;
  width: 100%;
  font-family: 'Leckerli One', cursive;
  font-size: 1.5rem;
  color: #373737;
  animation: ${tada} 1.8s 2;
`;

export default TextResultWrapper;
