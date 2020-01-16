import styled from '@emotion/styled';
import { flexColumnCenter, linearGradientBoxShadow } from '../../styles/General';

const ChooseContainer = styled.div`
  ${flexColumnCenter};
  ${linearGradientBoxShadow};
  justify-content: space-around;
  align-self: center;
  text-align: center;
  color: ${props => props.theme.colors.text1};
  width: 320px;
  height: 370px;
  border-radius: 25px 0px;
`;

export default ChooseContainer;
