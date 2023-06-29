import styled from 'styled-components'

interface ClusterProps {
  space?: string
  justify?: string
  children: React.ReactNode
}
export const Cluster = styled.div<ClusterProps>`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => (props.space ? `${props.space}` : `var(--s1, 1rem)`)};
  justify-content: ${(props) => (props.justify ? props.justify : 'flex-start')};
  align-items: center;
`
