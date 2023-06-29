import styled from 'styled-components'

interface BoxProps {
  padding?: string
  $borderThickness?: string
  inverted?: boolean
  children: React.ReactNode
}

export const Box = styled.div<BoxProps>`
  color: var(--color-dark);
  padding: ${(props) => (props.padding ? `${props.padding}` : `var(--s0)`)};
  background-color: '#fff';
  border: ${(props) =>
    props.$borderThickness
      ? `${props.$borderThickness}px var(--color-dark) solid`
      : `var(--border-thin) var(--color-dark)  solid`};
  border-radius: var(--s-2);
  outline: 0.125rem solid transparent;
  outline-offset: -0.125rem;
  box-shadow: none;
  filter: ${(props) => props.inverted && 'invert(100%)'};

  & * {
    color: inherit;
  }
`
