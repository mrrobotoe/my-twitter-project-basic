import type { FindTweetQuery, FindTweetQueryVariables } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Tweet from 'src/components/Tweet'

export const QUERY = gql`
  query FindTweetQuery($id: Int!) {
    tweet: post(id: $id) {
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
    countComments(postId: $id)
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindTweetQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  tweet,
}: CellSuccessProps<FindTweetQuery, FindTweetQueryVariables>) => {
  return <Tweet tweet={tweet} />
}
