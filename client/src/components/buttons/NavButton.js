import styled from '@emotion/styled';
import { noBorderOutlineBGTextDeco } from '../../styles/General';

const NavButton = styled.button`
  ${noBorderOutlineBGTextDeco};
  border: 2px solid ${props => props.theme.colors.text1};
  border-radius: 10px;
  font-size: 1em;
  font-weight: bold;
  margin: 0 0 0 10px;
  color: ${props => props.theme.colors.text1};
  width: 50%;
  flex-grow: 1;
`;

export default NavButton;
