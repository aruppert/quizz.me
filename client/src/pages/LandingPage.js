import React from 'react';
import styled from '@emotion/styled';
import Logo from '../icons/Logo';
import { Link } from 'react-router-dom';

const Container = styled(Link)`
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
    <Container to="/playoradd">
      <LandingLogo />
    </Container>
  );
}
