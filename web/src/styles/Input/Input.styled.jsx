import { styled } from 'styled-components';

export const Input = styled.input`
  padding: calc(var(--padding) / 3);
  border: none;
  box-sizing: border-box;
  border: 2px solid black;
  &[type='password'] {
    letter-spacing: 1ch;
  }
`;

export const Label = styled.label``;
