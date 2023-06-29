import styled from 'styled-components';

export const Cover = styled.div`
  display: flex;
  flex-direction: column;
  min-block-size: 100dvh;
  padding: 1rem;

  & > * {
    margin-block: auto;
  }

  & > :first-child:not(h1) {
    margin-block-start: 0;
  }

  & > :last-child:not(h1) {
    margin-block-end: 0;
  }

  & > h1 {
    margin-block: auto;
  }
`;
