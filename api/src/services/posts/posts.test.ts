import type { Post } from '@prisma/client'

import { posts, post, createPost, updatePost, deletePost } from './posts'
import type { StandardScenario } from './posts.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('posts', () => {
  scenario('returns all posts', async (scenario: StandardScenario) => {
    const result = await posts()

    expect(result.length).toEqual(Object.keys(scenario.post).length)
  })

  scenario('returns a single post', async (scenario: StandardScenario) => {
    const result = await post({ id: scenario.post.john.id })

    expect(result).toEqual(scenario.post.john)
  })

  scenario('creates a post', async (scenario: StandardScenario) => {
    mockCurrentUser({
      id: scenario.post.john.id,
      name: 'John Doe',
      email: 'johnd@email.com',
    })
    const result = await createPost({
      input: { body: 'String', likes: 1327750, comments: 9655310 },
    })

    expect(result.body).toEqual('String')
    expect(result.likes).toEqual(1327750)
    expect(result.comments).toEqual(9655310)
  })

  scenario('updates a post', async (scenario: StandardScenario) => {
    const original = (await post({ id: scenario.post.john.id })) as Post
    const result = await updatePost({
      id: original.id,
      input: { body: 'String2' },
    })

    expect(result.body).toEqual('String2')
  })

  scenario('deletes a post', async (scenario: StandardScenario) => {
    const original = (await deletePost({ id: scenario.post.john.id })) as Post
    const result = await post({ id: original.id })

    expect(result).toEqual(null)
  })
})
