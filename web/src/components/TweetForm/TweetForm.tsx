import { Form, FormError, SubmitHandler, useForm } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import { useAuth } from 'src/auth'
import { CREATE_POST_MUTATION } from 'src/components/Post/NewPost'
import { QUERY as TweetsQuery } from 'src/components/TweetsCell'
import { Box } from 'src/styles/Box/Box.styled'
import { Stack } from 'src/styles/Stack/Stack.styled'

import { SubmitContainer, TextAreaFieldContainer } from './TweetForm.styled'

interface FormValues {
  body: string
}

const TweetForm = () => {
  const formMethods = useForm()
  const { isAuthenticated } = useAuth()

  const [createPost, { loading, error }] = useMutation(CREATE_POST_MUTATION, {
    onCompleted: () => {
      toast.success('Thank you for your post!')
      formMethods.reset()
    },
    onError: () => {
      toast.error('Uh oh, you need to login first!')
    },
    refetchQueries: [{ query: TweetsQuery }],
  })

  const onSubmit: SubmitHandler<FormValues> = (input) => {
    createPost({ variables: { input: { ...input, likes: 1, comments: 0 } } })
  }

  return (
    <Box>
      <Stack space="var(--s-1)" $recursive>
        <Form
          onSubmit={onSubmit}
          formMethods={formMethods}
          config={{ mode: 'onBlur' }}
          error={error}
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
          <SubmitContainer disabled={loading || !isAuthenticated}>
            Tweet
          </SubmitContainer>
        </Form>
      </Stack>
    </Box>
  )
}

export default TweetForm
