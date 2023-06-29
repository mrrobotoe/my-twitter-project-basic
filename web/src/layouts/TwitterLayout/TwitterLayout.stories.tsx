import type { ComponentMeta, ComponentStory } from '@storybook/react'

import TwitterLayout from './TwitterLayout'

export const generated: ComponentStory<typeof TwitterLayout> = (args) => {
  return <TwitterLayout {...args} />
}

export const loggedInView: ComponentStory<typeof TwitterLayout> = (args) => {
  mockCurrentUser({
    id: 1,
    email: 'testUser@example.com',
    name: 'John Doe',
  })

  return <TwitterLayout {...args} />
}
export default {
  title: 'Layouts/TwitterLayout',
  component: TwitterLayout,
} as ComponentMeta<typeof TwitterLayout>
