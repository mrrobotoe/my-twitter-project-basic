// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof CommentForm> = (args) => {
//   return <CommentForm {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'
import type {
  CreateCommentMutation,
  CreateCommentMutationVariables,
} from 'types/graphql'

import CommentForm from './CommentForm'

export const generated = () => {
  return <CommentForm />
}

export const loggedInGenerated = () => {
  mockCurrentUser({
    id: 1,
    name: 'John Doe',
    email: 'johnd@example.com',
  })

  mockGraphQLMutation<CreateCommentMutation, CreateCommentMutationVariables>(
    'CreateCommentMutation',
    (variables, { ctx }) => {
      const id = Math.floor(Math.random() * 1000)
      ctx.delay(1000)

      return {
        createComment: {
          id,
          name: currentUser.name,
          body: variables.input.body,
          createdAt: new Date().toISOString(),
        },
      }
    }
  )

  return <CommentForm postId={1} />
}
export default {
  title: 'Components/CommentForm',
  component: CommentForm,
} as ComponentMeta<typeof CommentForm>
