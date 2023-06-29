// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Tweet> = (args) => {
//   return <Tweet {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Tweet from './Tweet'

export const generated = () => {
  mockCurrentUser({
    id: 1,
    email: 'test@email.com',
    name: 'Jon Doe',
  })

  return (
    <Tweet
      tweet={{
        id: 1,
        body: "I'm baby tbh cloud bread four loko cornhole raclette woke bodega boys aesthetic excepteur taiyaki ullamco tousled. Thundercats cloud bread health goth distillery crucifix affogato. Small batch brunch quinoa aliquip art party pitchfork. Cardigan copper mug twee, mlkshk irony actually keffiyeh salvia nulla. Quis kale chips man braid master cleanse, pickled tofu poutine selfies messenger bag quinoa.",
        likes: 1,
        comments: 0,
        createdAt: '2023-06-24T12:34:56Z',
        user: {
          id: 1,
          email: 'test@email.com',
          name: 'Jon Doe',
        },
      }}
    />
  )
}

export default {
  title: 'Components/Tweet',
  component: Tweet,
} as ComponentMeta<typeof Tweet>
