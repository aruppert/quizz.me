import React from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HashInsertCard from '../components/HashInsertCard';

const Main = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: column nowrap;
  height: 100vh;
  width: 100vw;
  overflow: scroll;
`;
const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  align-self: center;
  width: 340px;
  height: 70%;

  background: linear-gradient(
    to right,
    ${props => props.theme.colors.card2},
    ${props => props.theme.colors.card1}
  );
  border-radius: 25px 0px 25px 0px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  font-size: 1.5rem;
  text-align: center;
  align-self: center;
  color: ${props => props.theme.colors.text1};
`;

const RadioButton = styled.button`
  margin: 5px 20px 0px 20px;
  border-radius: 5px;
  background: none;
  font-size: 1.5rem;
  text-align: center;
  align-self: center;
  color: ${props => props.theme.colors.text1};
`;

const Form = styled.form`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

const Label = styled.label`
  color: ${props => props.theme.colors.text1};
`;

// PLACEHOLDER FOR FUTURE CATEGORIES

const category1 = 'General';
const category2 = 'Science';
const category3 = 'Movies';
const category4 = 'Music';
const category5 = 'Nature';
const category6 = 'Computers';

export default function ChooseGameModePage(props) {
  // function onCategoryClick(name) {
  //   props.addCategory(name);
  // }

  return (
    <Main>
      <Header />
      <Container>
        How many questions?
        <div>
          <RadioButton onClick={() => props.setAmountOfQuestions(4)} type="radio">
            4
          </RadioButton>
          <RadioButton onClick={() => props.setAmountOfQuestions(8)} type="radio">
            8
          </RadioButton>
          <RadioButton onClick={() => props.setAmountOfQuestions(12)} type="radio">
            12
          </RadioButton>
        </div>
        How many want to play?
        <div>
          <RadioButton onClick={() => props.setNumberOfPlayers(1)} type="radio">
            1 Player
          </RadioButton>
          <RadioButton onClick={() => props.setNumberOfPlayers(2)} type="radio">
            2 Players
          </RadioButton>{' '}
        </div>
        <p> ------------------------------- </p>
        Please select game categories:
        <Form>
          <div>
            <Label>
              <input type="radio" value={category1} onClick={() => props.addCategory(category1)} />{' '}
              {category1}
            </Label>
            <Label>
              <input type="radio" value={category2} onClick={() => props.addCategory(category2)} />{' '}
              {category2}
            </Label>
            <Label>
              <input type="radio" value={category3} onClick={() => props.addCategory(category3)} />{' '}
              {category3}
            </Label>
          </div>
          <div>
            <Label>
              <input type="radio" value={category4} onClick={() => props.addCategory(category4)} />{' '}
              {category4}
            </Label>
            <Label>
              <input type="radio" value={category5} onClick={() => props.addCategory(category5)} />{' '}
              {category5}
            </Label>
            <Label>
              <input type="radio" value={category6} onClick={() => props.addCategory(category6)} />{' '}
              {category6}
            </Label>
          </div>
        </Form>
        <HashInsertCard setPrivateCode={props.setPrivateCode} />
      </Container>
      <Footer />
    </Main>
  );
}
