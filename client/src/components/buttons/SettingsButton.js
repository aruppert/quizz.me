import styled from '@emotion/styled';

const SettingsButton = styled.button`
  background: ${props => (props.active ? props.theme.colors.active : 'none')};
  margin: 5px 20px 0px 20px;
  border-radius: 5px;
  font-size: 1rem;
  text-align: center;
  align-self: center;
  color: ${props => props.theme.colors.text};
`;

export default SettingsButton;
