import { Form, FormError, SubmitHandler, useForm } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import { QUERY as CommentsQuery } from 'src/components/CommentsCell'
import { Box } from 'src/styles/Box/Box.styled'
import { Stack } from 'src/styles/Stack/Stack.styled'

import { SubmitContainer, TextAreaFieldContainer } from './CommentForm.styled'

const CREATE_COMMENT_MUTATION = gql`
  mutation CreateCommentMutation($input: CreateCommentInput!) {
    createComment(input: $input) {
      id
      name
      body
      createdAt
    }
  }
`

interface FormValues {
  body: string
  name: string
}

interface Props {
  postId: number
}
const CommentForm = ({ postId }: Props) => {
  const formMethods = useForm()
  const { isAuthenticated, currentUser } = useAuth()
  const [createComment, { loading, error }] = useMutation(
    CREATE_COMMENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Thank you for your comment!')
        formMethods.reset()
      },
      refetchQueries: [{ query: CommentsQuery, variables: { postId } }],
    }
  )

  const onSubmit: SubmitHandler<FormValues> = (input) => {
    createComment({
      variables: { input: { postId, ...input, name: currentUser.name } },
    })
  }

  return (
    <Box
      $borderThickness="1"
      style={{ borderRadius: '0', borderColor: '#b9b9b9' }}
    >
      <Stack space="var(--s-1)" $recursive>
        <Form
          onSubmit={onSubmit}
          config={{ mode: 'onBlur' }}
          formMethods={formMethods}
        >
          <FormError error={error} />
          <Stack space="var(--s0)">
            <TextAreaFieldContainer
              placeholder="What's happening?!"
              rows={3}
              name="body"
              validation={{ required: true }}
            />
          </Stack>
          <SubmitContainer disabled={!isAuthenticated || loading}>
            Reply
          </SubmitContainer>
        </Form>
      </Stack>
    </Box>
  )
}

export default CommentForm
