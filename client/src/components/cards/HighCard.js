import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import {
  linearGradientBoxShadow,
  flexColumnCenter,
  TextCenterColorOneMargin20
} from '../../styles/General';

const HighContainer = styled(Link)`
  ${linearGradientBoxShadow};
  ${flexColumnCenter};
  justify-content: space-evenly;
  width: 160px;
  height: 220px;
  border-radius: 25px 0px;
  text-decoration: none;
`;

const TextWrapper = styled.div`
  ${TextCenterColorOneMargin20};
`;

export default function HighCard({ text, path, children }) {
  return (
    <HighContainer to={`/${path}`}>
      <TextWrapper>{text}</TextWrapper>
      {children}
    </HighContainer>
  );
}
