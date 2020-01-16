import styled from '@emotion/styled';
import AnswerCard from '../cards/AnswerCard';

const GameOverButton = styled(AnswerCard)`
  height: 30px;
  width: 120px;
  border: none;
  background-image: linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%);
  margin: 0;
  font-family: 'Leckerli One', cursive;
  color: ${props => props.theme.colors.text};
`;

export default GameOverButton;
