import React from 'react';
import styled from '@emotion/styled';

const BigContainer = styled.div`
  display: flex;
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

export default function BigCard() {
  return <BigContainer></BigContainer>;
}
