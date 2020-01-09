/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Planet from '../icons/Planet';
import Lock from '../icons/Lock';
import Input from '../components/Input';
import ButtonLink from '../components/ButtonLink';
import Button from '../components/Button';
import BigContainer from '../components/BigContainer';
import { flexColumnCenter } from '../styles/General';
import TextWrapper from '../components/TextWrapper';

const Main = styled.main`
  ${flexColumnCenter};
  height: 100vh;
  width: 100vw;
`;

const StyledBigContainer = styled(BigContainer)`
  justify-content: center;
`;

const StyledInput = styled(Input)`
  align-self: center;
  width: 250px;
  margin: 15px;
`;

const StyledTextWrapper = styled(TextWrapper)`
  margin: 15px;
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
    sessionStorage.setItem('privateCode', '');
    sessionStorage.setItem('isPrivateSet', false);
  }

  return (
    <Main>
      <StyledBigContainer>
        <StyledTextWrapper>
          Click the planet to create questions for the public domain:
        </StyledTextWrapper>
        <ButtonLink to="/add" onClick={handleClickOnPublic}>
          <Planet />
        </ButtonLink>
        <StyledTextWrapper>
          Enter a unique private code and click the lock to create a private game:
        </StyledTextWrapper>
        <StyledInput name="unique" placeholder="please enter unique code" onChange={handleChange} />
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
        <StyledTextWrapper>
          Note: Your code should look something like this "Carls_wedding_2019_CW"
        </StyledTextWrapper>
      </StyledBigContainer>
      {showError && <ErrorContainer> Code is missing!</ErrorContainer>}
    </Main>
  );
}

PublicOrPrivateSetPage.propTypes = {
  onChangePrivateCode: PropTypes.func,
  privateCode: PropTypes.string
};
