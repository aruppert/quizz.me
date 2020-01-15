/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Planet from '../icons/Planet';
import Lock from '../icons/Lock';
import Input from '../components/Input';
import ButtonLink from '../components/buttons/ButtonLink';
import Button from '../components/Button';
import BigContainer from '../components/BigContainer';
import { flexColumnCenter } from '../styles/General';
import TextWrapper from '../components/TextWrapper';

const Main = styled.main`
  ${flexColumnCenter};
  height: 100%;
  width: 100vw;
`;

const StyledBigContainer = styled(BigContainer)`
  justify-content: center;
  width: 320px;
  height: 420px;
`;

const StyledInput = styled(Input)`
  align-self: center;
  width: 250px;
  margin: 5px;
`;

const PublicTextWrapper = styled(TextWrapper)`
  margin: 30px 0 10px;
  width: 200px;
  font-size: 1.1rem;
`;
const StyledTextWrapper = styled(TextWrapper)`
  margin: 30px 0 10px;
  font-size: 1.1rem;
`;

const NoteTextWrapper = styled(TextWrapper)`
  margin: 15px;
  font-size: 0.95rem;
`;

const ErrorContainer = styled.div`
  position: absolute;
  z-index: 1000;
  align-self: center;
  color: ${props => props.theme.colors.warn};
`;

export default function PublicOrPrivateSetPage({ onChangePrivateCode, privateCode }) {
  const [showError, setShowError] = React.useState(false);

  function handleChange(event) {
    const value = event.target.value;
    onChangePrivateCode(value);
  }

  function handlePrivateClick() {
    if (privateCode === '') {
      setShowError(true);
      return null;
    }
    // else {
    //   sessionStorage.setItem('privateCode', privateCode);
    //   sessionStorage.setItem('isPrivateSet', true);
    // }
  }

  function handleClickOnPublic() {
    onChangePrivateCode('');
    sessionStorage.setItem('isPrivateSet', false);
  }

  return (
    <Main>
      <StyledBigContainer>
        <PublicTextWrapper>Add questions for the public with a tap here:</PublicTextWrapper>
        <ButtonLink to="/add" onClick={handleClickOnPublic}>
          <Planet />
        </ButtonLink>
        <StyledTextWrapper>
          Or create your own game with a unique private code here:
        </StyledTextWrapper>
        <StyledInput
          name="unique"
          placeholder="enter unique code here"
          onChange={handleChange}
          autocomplete="off"
        />
        {privateCode ? (
          <ButtonLink onClick={handlePrivateClick} to="/add">
            <Lock />
          </ButtonLink>
        ) : (
          <Button onClick={handlePrivateClick} to="">
            {' '}
            <Lock />
          </Button>
        )}
        <NoteTextWrapper>Example: TimLewisBDParty2020TL</NoteTextWrapper>
      </StyledBigContainer>
      {showError && <ErrorContainer> Code is missing!</ErrorContainer>}
    </Main>
  );
}

PublicOrPrivateSetPage.propTypes = {
  onChangePrivateCode: PropTypes.func,
  privateCode: PropTypes.string
};
