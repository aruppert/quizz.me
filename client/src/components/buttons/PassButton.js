import styled from '@emotion/styled';
import AnswerCard from '../cards/AnswerCard';

const PassButton = styled(AnswerCard)`
  height: 30px;
  width: 120px;
  border: none;
  margin: 0;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 0%, rgba(0, 0, 0, 0.15) 100%),
    radial-gradient(at top center, rgba(255, 255, 255, 0.4) 0%, rgba(0, 0, 0, 0.4) 120%) #989898;
  background-blend-mode: multiply, multiply;
  font-family: 'Leckerli One', cursive;
  color: ${props => props.theme.colors.text};
`;

export default PassButton;
