import styled from '@emotion/styled';

const ErrorContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  width: 80%;
  height: 10%;
  border-radius: 10px;
  border: 3px solid ${props => props.theme.colors.warn};
  background: ${props => props.theme.colors.background};
  z-index: 1000;
  align-self: center;
  margin: 30px 0 0;
  color: ${props => props.theme.colors.warn};
`;

export default ErrorContainer;
