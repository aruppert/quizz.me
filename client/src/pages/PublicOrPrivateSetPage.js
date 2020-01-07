/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Planet from '../icons/Planet';
import Lock from '../icons/Lock';
import Input from '../components/Input';
import ButtonLink from '../components/ButtonLink';

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  height: 100vh;
  width: 100vw;
`;

const BigContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  width: 340px;
  height: 380px;
  background: linear-gradient(
    to right,
    ${props => props.theme.colors.card2},
    ${props => props.theme.colors.card1}
  );
  border-radius: 25px 0px 25px 0px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;

const StyledInput = styled(Input)`
  align-self: center;
  width: 250px;
  margin: 15px;
`;

const TextWrapper = styled.div`
  text-align: center;
  align-self: center;

  color: ${props => props.theme.colors.text1};
  margin: 15px;
`;

const ErrorContainer = styled.div`
  position: absolute;
  z-index: 1000;
  align-self: center;
  color: ${props => props.theme.colors.warn};
`;

export default function PublicOrPrivateSetPage() {
  const [uniqueCode, setUniqueCode] = React.useState('');
  const [showError, setShowError] = React.useState(false);

  function handleChange(event) {
    const value = event.target.value;
    setUniqueCode(value);
  }

  function handlePrivateClick() {
    if (uniqueCode === '') {
      setShowError(true);
      return null;
    } else {
      sessionStorage.setItem('privateCode', uniqueCode);
      sessionStorage.setItem('isPrivateSet', true);
    }
  }

  function handleClickOnPublic() {
    sessionStorage.setItem('privateCode', '');
    sessionStorage.setItem('isPrivateSet', false);
  }

  return (
    <Main>
      <Header />
      <BigContainer>
        <TextWrapper>Click the planet to create questions for the public domain:</TextWrapper>
        <ButtonLink to="/add" onClick={handleClickOnPublic}>
          <Planet />
        </ButtonLink>
        <TextWrapper>
          Enter a unique private code and click the lock to create a private game:
        </TextWrapper>
        <StyledInput name="unique" placeholder="please enter unique code" onChange={handleChange} />
        {uniqueCode ? (
          <ButtonLink onClick={handlePrivateClick} to="/add">
            <Lock />
          </ButtonLink>
        ) : (
          <ButtonLink onClick={handlePrivateClick}>
            {' '}
            <Lock />
          </ButtonLink>
        )}
        <TextWrapper>
          Note: Your code should look something like this "Carls_wedding_2019_CW"
        </TextWrapper>
      </BigContainer>
      {showError && <ErrorContainer> Code is missing!</ErrorContainer>}
      <Footer />
    </Main>
  );
}
