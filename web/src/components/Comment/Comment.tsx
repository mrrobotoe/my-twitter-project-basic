import { Box } from 'src/styles/Box/Box.styled'
import { Cluster } from 'src/styles/Cluster/Cluster.styled'
import { Stack } from 'src/styles/Stack/Stack.styled'

import { CommentName, CommentTime, CommentBody } from './Comment.styled'
const formattedDate = (datetime) => {
  const parsedDate = new Date(datetime)
  const month = parsedDate.toLocaleString('default', { month: 'long' })
  return `${parsedDate.getDate()} ${month} ${parsedDate.getFullYear()}`
}

const Comment = ({ comment }) => {
  return (
    <Box
      $borderThickness="1"
      style={{ borderRadius: '0', borderColor: '#b9b9b9' }}
    >
      <Stack space={'var(--s-4)'}>
        <Cluster space="10px">
          <CommentName>@{comment.name}</CommentName>
          <CommentTime dateTime={comment.createdAt}>
            {formattedDate(comment.createdAt)}
          </CommentTime>
        </Cluster>
        <CommentBody>{comment.body}</CommentBody>
      </Stack>
    </Box>
  )
}

export default Comment
