import React from 'react';
import styled from '@emotion/styled';

const CategoryContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
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
  align-self: center;
  color: ${props => props.theme.colors.text1};
  margin: 20px;
`;

const DropdownMenu = styled.div`
  border: 2px solid white;
  font-size: 1rem;
  text-align: center;
  align-self: center;
  color: ${props => props.theme.colors.text1};
`;

export default function CategoryCard() {
  return (
    <CategoryContainer>
      <TextWrapper>Please select category:</TextWrapper>
      <DropdownMenu>DROPDOWN MENU tbd.</DropdownMenu>
    </CategoryContainer>
  );
}
