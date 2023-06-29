import styled, { css } from 'styled-components'

interface StackProps {
  space?: string
  $recursive?: boolean
}

export const Stack = styled.div<StackProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;

  & > * {
    margin-block: 0;
  }

  ${(props) =>
    props.$recursive
      ? css`
          & * + * {
            /* margin-block-start: var(--s1, 1.5rem); */
            margin-block-start: ${props.space
              ? `${props.space}`
              : `var(--s1, 1.5rem)`};
          }
        `
      : css`
          & > * + * {
            /* margin-block-start: var(--s1, 1.5rem); */
            margin-block-start: ${props.space
              ? `${props.space}`
              : `var(--s1, 1.5rem)`};
          }
        `}

  &:only-child {
    block-size: 100%;
  }
`
