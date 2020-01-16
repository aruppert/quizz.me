import styled from '@emotion/styled';
import { linearGradientBoxShadow, flexRowWrapCenter } from '../../styles/General';

export const BigContainer = styled.div`
  ${linearGradientBoxShadow};
  width: 340px;
  height: 380px;
  border-radius: 25px 0px;
`;

export const Form = styled.form`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  height: 100%;
  color: ${props => props.theme.colors.text1};
  padding: 0px 20px;
`;

export const Nav = styled.div`
  display: flex;
  margin: 0 10px 0 0;
`;

export const Status = styled.div`
  ${flexRowWrapCenter};
  width: 100%;
  justify-content: space-around;
`;

export const QuestionsCounter = styled.div`
  display: flex;
  align-self: center;
`;

export const Text = styled.div`
  align-self: center;
  font-size: 1.5rem;
`;

export const ErrorContainer = styled.div`
  position: absolute;
  z-index: 1000;
  text-align: center;
  color: ${props => props.theme.colors.warn};
`;

export const TextWrapperOutsideCard = styled.div`
  margin: 0 0 10px;
  color: ${props => props.theme.colors.card2};
`;
