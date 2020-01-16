import React from 'react';
import styled from '@emotion/styled';
import ButtonLink from '../buttons/ButtonLink';
import Planet from '../../icons/Planet';
import Lock from '../../icons/Lock';
import { linearGradientBoxShadow, flexColumnCenter } from '../../styles/General';

const PrivacyContainer = styled.div`
  ${linearGradientBoxShadow};
  ${flexColumnCenter};
  justify-content: space-around;
  width: 340px;
  height: 180px;
  border-radius: 25px 0px;
`;

const TextWrapper = styled.div`
  font-size: 1.5rem;
  text-align: center;
  color: ${props => props.theme.colors.text};
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
