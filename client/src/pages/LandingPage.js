import React from 'react';
import styled from '@emotion/styled';
import Logo from '../icons/Logo';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    to right,
    ${props => props.theme.colors.card2},
    ${props => props.theme.colors.card1}
  );
`;

const LandingLogo = styled(Logo)`
  height: 200px;
`;

export default function LandingPage() {
  return (
    <Container>
      <LandingLogo />
    </Container>
  );
}