import React from 'react';
import styled from '@emotion/styled';
import Input from './Input';
import Rocket from '../icons/Rocket';
import ButtonLink from './ButtonLink';

const TextWrapper = styled.div`
  font-size: 1.5rem;
  text-align: center;
  color: ${props => props.theme.colors.text1};
  margin: auto;
  display: flex;
  align-items: center;
`;

export default function HashInsertCard(props) {
  function onChange(event) {
    const value = event.target.value;
    props.setPrivateCode(value);
  }

  return (
    <>
      or paste your Game Code here:
      <Input placeholder="e.g. Mark_Eve_Wedding_19" onChange={onChange}></Input>
      <ButtonLink to="/play">
        <TextWrapper>
          START HERE <Rocket />
        </TextWrapper>
      </ButtonLink>
    </>
  );
}
