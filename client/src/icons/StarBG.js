import React from 'react';
import styled from '@emotion/styled';

const Svg = styled.svg`
  fill: #fda34b;
  height: 500px;
  stroke: #fda34b;
  stroke-width: 5;
  stroke-linecap: round;
`;

export default function Star(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 208 208">
      <path d="M 202.59375 81.09375 C 201.6875 78.21875 199.15625 76.09375 196.15625 75.65625 L 137.4375 67.125 L 111.15625 13.90625 C 108.46875 8.46875 99.53125 8.46875 96.8125 13.90625 L 70.5625 67.125 L 11.84375 75.65625 C 8.84375 76.09375 6.3125 78.1875 5.375 81.09375 C 4.4375 84 5.21875 87.1875 7.40625 89.28125 L 49.90625 130.71875 L 39.875 189.1875 C 39.375 192.1875 40.59375 195.25 43.0625 197.03125 C 45.53125 198.8125 48.78125 199.0625 51.46875 197.625 L 104 170.03125 L 156.5 197.625 C 157.6875 198.25 158.96875 198.53125 160.25 198.53125 C 161.90625 198.53125 163.53125 198.03125 164.9375 197.03125 C 167.40625 195.21875 168.625 192.1875 168.125 189.1875 L 158.09375 130.71875 L 200.59375 89.28125 C 202.78125 87.15625 203.53125 84 202.59375 81.09375 Z M 202.59375 81.09375 " />
    </Svg>
  );
}