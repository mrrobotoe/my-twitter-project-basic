import styled, { css } from 'styled-components';

const THRESHOLD = '30rem';
const LIMIT = 4;

export const Switcher = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--s1);

  & > * {
    flex-grow: 1;
    flex-basis: ${(props) =>
      props.threshold
        ? `calc((${props.threshold} - 100%) * 999)`
        : `calc((${THRESHOLD} - 100%) * 999)`};
  }

  ${(props) =>
    props.limit
      ? css`
          & > :nth-last-child(n + ${props.limit + 1}),
          & > :nth-last-child(n + ${props.limit + 1}) ~ * {
            flex-basis: 100%;
          }
        `
      : css`
          & > :nth-last-child(n + ${LIMIT + 1}),
          & > :nth-last-child(n + ${LIMIT + 1}) ~ * {
            flex-basis: 100%;
          }
        `}
`;
