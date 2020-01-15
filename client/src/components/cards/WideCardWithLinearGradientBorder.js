import React from 'react';
import styled from '@emotion/styled';
import TextWrapper from '../TextWrapper';
import { linearGradientBoxShadow, flexColumnCenter, flexRowWrapCenter } from '../../styles/General';

const WideCardWithLGBorderContainer = styled.div`
  ${linearGradientBoxShadow};
  ${flexColumnCenter};
  margin: 3px 0;
  justify-content: space-evenly;
  width: 325px;
  height: 40px;
  border-radius: 25px 0px;
`;

const WideCardWithLGBorder = styled.div`
  display: flex;
  position: absolute;
  z-index: 1000;
  ${flexRowWrapCenter};
  justify-content: space-between;
  background: ${props => props.theme.colors.background};
  width: 319px;
  height: 34px;
  border-radius: 25px 0px;
`;

const StyledTextWrapper = styled(TextWrapper)`
  margin: auto;
  background: linear-gradient(
    to right,
    ${props => props.theme.colors.card2},
    ${props => props.theme.colors.card1}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default function WideCardWithLinearGradientBorder({ text }) {
  return (
    <WideCardWithLGBorderContainer>
      <WideCardWithLGBorder>
        <StyledTextWrapper>{text}</StyledTextWrapper>
      </WideCardWithLGBorder>
    </WideCardWithLGBorderContainer>
  );
}
