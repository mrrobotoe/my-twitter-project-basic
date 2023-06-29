import styled from 'styled-components'

interface GridProps {
  gutter: string
  minWidth: string
}
export const Grid = styled.div<GridProps>`
  display: grid;
  grid-gap: ${(props) => (props.gutter ? `${props.gutter}rem` : `1rem`)};

  @supports (width: min(250px, 100%)) {
    grid-template-columns: ${(props) =>
      props.minWidth
        ? `repeat(auto-fit, minmax(min(${props.minWidth}px, 100%), 1fr))`
        : `repeat(auto-fit, minmax(min(250px, 100%), 1fr))`};
  }
`
