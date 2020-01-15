import React from 'react';
import styled from '@emotion/styled';
import { linearGradientBoxShadow, flexColumnCenter, flexRowWrapCenter } from '../../styles/General';

const HighscoreCardContainerBorder = styled.div`
  ${linearGradientBoxShadow};
  ${flexColumnCenter};
  margin: 3px 0;
  justify-content: space-evenly;
  width: 320px;
  height: 40px;
  border-radius: 25px 0px;
`;

const HighscoreCardContainer = styled.div`
  position: absolute;
  z-index: 1000;
  ${flexRowWrapCenter};
  justify-content: space-between;
  background: ${props => props.theme.colors.background};
  width: 314px;
  height: 34px;
  border-radius: 25px 0px;
`;
const Rank = styled.div`
  margin: 0 0 0 15px;
  color: ${props => props.theme.colors.card2};
`;

const Name = styled.div`
  margin: 0 0 0 15px;
  flex-grow: 1;
  align-self: left;
  color: ${props => props.theme.colors.card2};
`;

const Score = styled.div`
  margin: 0 15px 0;
  color: ${props => props.theme.colors.card1};
`;

export default function HighscoreCard({ index, name, score, questionsPlayed }) {
  return (
    <HighscoreCardContainerBorder>
      <HighscoreCardContainer>
        <Rank>{index + 1}.</Rank>
        <Name>{name}</Name>
        <Score>
          {score}/{questionsPlayed}
        </Score>
      </HighscoreCardContainer>
    </HighscoreCardContainerBorder>
  );
}
