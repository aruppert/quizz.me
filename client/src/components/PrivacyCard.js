import React from 'react';
import styled from '@emotion/styled';
import ButtonLink from './ButtonLink';
import Planet from '../icons/Planet';
import Lock from '../icons/Lock';

const PrivacyContainer = styled.div`
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

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const PrivacyButton = styled(ButtonLink)`
  width: 1fr;
  height: 100%;
  flex-grow: 1;
`;

export default function PrivacyCard() {
  return (
    <PrivacyContainer>
      <TextWrapper>Select privacy for your set of questions:</TextWrapper>
      <Wrapper>
        <PrivacyButton>
          <Planet />
        </PrivacyButton>
        <PrivacyButton>
          <Lock />
        </PrivacyButton>
      </Wrapper>
    </PrivacyContainer>
  );
}
