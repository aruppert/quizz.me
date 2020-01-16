import React from 'react';
import styled from '@emotion/styled';
import Logo from '../icons/Logo';
import { Link, useHistory } from 'react-router-dom';
import { linearGradientBoxShadow, flexColumnCenter } from '../styles/General';
import TextWrapper from '../components/textAndInput/TextWrapper';
import { fadeInLeftFadeOutRight, fadeIn } from '../animations/General';

const Container = styled(Link)`
  height: 100vh;
  width: 100vw;
  ${flexColumnCenter};
  ${linearGradientBoxShadow};
  text-decoration: none;
`;

const LandingLogo = styled(Logo)`
  height: 200px;
  animation: ${fadeIn} 2.5s 1;
`;

const StyledTextWrapper = styled(TextWrapper)`
  color: ${props => props.theme.colors.text1};
  font-family: 'Leckerli One', cursive;
  font-size: 35px;
  font-weight: bold;
  animation: ${fadeInLeftFadeOutRight} 4s 1;
`;

export default function LandingPage() {
  const history = useHistory();

  React.useEffect(() => {
    const timeoutId = setTimeout(() => history.push('/playoradd'), 3700);
    return () => {
      clearTimeout(timeoutId);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <Container to="/playoradd">
      <LandingLogo />
      <StyledTextWrapper>quizz.Me</StyledTextWrapper>
    </Container>
  );
}
