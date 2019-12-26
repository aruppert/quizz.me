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

const TextWrapper = styled.div`
  text-align: center;
  align-self: center;

  color: ${props => props.theme.colors.text1};
  margin: 20px;
`;

export default function FormPage() {
  const [uniqueCode, setUniqueCode] = React.useState('');

  function onChange(event) {
    const value = event.target.value;
    setUniqueCode(value);
  }

  function handleClickOnPrivate() {
    if (uniqueCode === '') {
      alert(`Please enter unique code first`);
    } else {
      sessionStorage.setItem('category', uniqueCode);
      sessionStorage.setItem('isPrivateSet', true);
    }
  }

  function handleClickOnPublic() {
    sessionStorage.removeItem('category');
    sessionStorage.removeItem('isPrivateSet');
  }

  return (
    <Main>
      <Header />
      <BigContainer>
        <TextWrapper>I want to add questions to the public domain:</TextWrapper>
        <ButtonLink to="/add" onClick={handleClickOnPublic}>
          <Planet />
        </ButtonLink>
        <TextWrapper>
          I want to create a private set of questions with the following unique code:
        </TextWrapper>
        <Input name="unique" placeholder="please enter unique code" onChange={onChange} />
        <TextWrapper>Note: Please use a unique code like "Carls_wedding_2019_CW"</TextWrapper>
        <ButtonLink to="/add" onClick={handleClickOnPrivate}>
          <Lock />
        </ButtonLink>
      </BigContainer>
      <Footer />
    </Main>
  );
}
