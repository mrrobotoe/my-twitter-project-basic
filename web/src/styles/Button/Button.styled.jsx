import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: var(--s0);
  border: 8px solid black;
  background-color: #fff;
  box-shadow: 10px 10px;
  transition: top, left, 150ms ease;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;

  &:hover {
    box-shadow: 5px 5px;
    left: 6px;
    top: 6px;
  }

  &:focus {
    border: 8px solid #155ed4;
  }

  &:active {
    box-shadow: 2px 2px;
    left: 8px;
    top: 8px;
  }
`;
