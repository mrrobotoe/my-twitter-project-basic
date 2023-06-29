import styled, { css } from 'styled-components'

interface IconProps {
  $withIcon?: boolean
}
export const Icon = styled.svg<IconProps>`
  width: 0.75em;
  width: 1cap;
  height: 0.75em;
  height: 1cap;
  ${(props) =>
    props.$withIcon &&
    css`
      margin-inline-end: var(--space, 0.5em);
    `}
`

export const WithIcon = styled.span`
  display: inline-flex;
  align-items: baseline;
`
