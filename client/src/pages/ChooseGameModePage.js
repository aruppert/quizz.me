import React from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CategoryCard from '../components/CategoryCard';
import HashInsertCard from '../components/HashInsertCard';

const Main = styled.main`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-flow: column nowrap;
  height: 100vh;
  width: 100vw;
`;
const CategoryContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
  width: 340px;
  height: 180px;

  background: linear-gradient(
    to right,
    ${props => props.theme.colors.card2},
    ${props => props.theme.colors.card1}
  );
  border-radius: 25px 0px 25px 0px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;
const TextWrapper = styled.div`
  font-size: 1.5rem;
  text-align: center;
  align-self: center;
  color: ${props => props.theme.colors.text1};
  margin: 20px;
`;

const RadioButton = styled.button`
  margin: 20px;
  border-radius: 5px;
  background: none;
  font-size: 1.5rem;
  text-align: center;
  align-self: center;
  color: ${props => props.theme.colors.text1};
`;

export default function ChooseGameModePage(props) {
  function onClick(value) {
    props.setPlayers(value);
  }
  return (
    <Main>
      <Header />
      <CategoryCard />
      <CategoryContainer>
        <TextWrapper> How many want to play?</TextWrapper>
        <div>
          <RadioButton onClick={() => onClick(1)} type="radio">
            1 Player
          </RadioButton>
          <RadioButton onClick={() => onClick(2)} type="radio">
            2 Players
          </RadioButton>{' '}
        </div>
      </CategoryContainer>
      <HashInsertCard />
      <Footer />
    </Main>
  );
}
