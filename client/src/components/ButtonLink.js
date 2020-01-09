import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { noBorderOutlineBGTextDeco } from '../styles/General';

const ButtonLink = styled(Link)`
  ${noBorderOutlineBGTextDeco};
  align-self: center;
`;

export default ButtonLink;
