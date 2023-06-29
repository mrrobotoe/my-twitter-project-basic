import type { TweetsQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Tweet from 'src/components/Tweet'
import { Stack } from 'src/styles/Stack/Stack.styled'

export const QUERY = gql`
  query TweetsQuery {
    tweets: posts {
      id
      body
      likes
      comments
      createdAt
      user {
        id
        email
        name
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>No Tweets yet!</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ tweets }: CellSuccessProps<TweetsQuery>) => {
  return (
    <Stack>
      {tweets.map((tweet) => (
        <Tweet summary={true} key={tweet.id} tweet={tweet} />
      ))}
    </Stack>
  )
}
