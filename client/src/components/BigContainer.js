import styled from '@emotion/styled';
import { linearGradientBoxShadow } from '../styles/General';

const BigContainer = styled.div`
  ${linearGradientBoxShadow};
  display: flex;
  flex-flow: column;
  width: 340px;
  height: 380px;
  border-radius: 25px 0px;
`;

export default BigContainer;
