import React from 'react';
import styled from '@emotion/styled';
import Input from './Input';
import Dice from '../icons/Dice';
import Button from './Button';

const HashInsertContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
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
  color: ${props => props.theme.colors.text1};
  margin: 10px;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default function HashInsertCard() {
  return (
    <HashInsertContainer>
      <TextWrapper>or paste your HASH Key:</TextWrapper>
      <InputWrapper>
        <Input placeholder="Input here please..."></Input>
      </InputWrapper>
      <Button>
        <Dice />
      </Button>
    </HashInsertContainer>
  );
}
