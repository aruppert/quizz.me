import styled from '@emotion/styled';
import ButtonLink from './ButtonLink';

const StyledButtonLink = styled(ButtonLink)`
  display: flex;
  height: 100%;
  width: 50%;
  flex-flow: column;
  justify-content: space-evenly;
  text-decoration: none;
  color: ${props => props.theme.colors.text};
`;
export default StyledButtonLink;
