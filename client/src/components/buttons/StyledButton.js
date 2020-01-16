import styled from '@emotion/styled';
import Button from './Button';

const StyledButton = styled(Button)`
  display: flex;
  height: 100%;
  width: 50%;
  font-size: 1.1rem;
  flex-flow: column;
  justify-content: space-evenly;
  text-decoration: none;
  color: ${props => props.theme.colors.text1};
`;

export default StyledButton;
