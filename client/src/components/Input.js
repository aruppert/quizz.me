import React from 'react';
import styled from '@emotion/styled';

const InputField = styled.input`
  border: none;
  border-radius: 5px 0px 5px 0px;
  text-align: center;
`;

export default function Input(props) {
  return (
    <InputField
      type="text"
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      autoFocus={props.autoFocus}
    ></InputField>
  );
}
