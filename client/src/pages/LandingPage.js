import React from 'react';
import styled from '@emotion/styled';
import Logo from '../icons/Logo';
import { Link, useHistory } from 'react-router-dom';
import { linearGradientBoxShadow, flexRowWrapCenter } from '../styles/General';

const Container = styled(Link)`
  height: 100vh;
  width: 100vw;
  ${flexRowWrapCenter};
  ${linearGradientBoxShadow};
`;

const LandingLogo = styled(Logo)`
  height: 200px;
`;

export default function LandingPage() {
  const history = useHistory();

  setTimeout(() => history.push('/playoradd'), 5000);

  return (
    <Container to="/playoradd">
      <LandingLogo />
    </Container>
  );
}
