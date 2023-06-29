import styled, { css } from 'styled-components';
export const Center = styled.div`
  box-sizing: content-b ox;
  max-inline-size: 60ch;
  margin-inline: auto;
  ${(props) =>
    props.intrinsic &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
    `}
`;
