import { render } from '@redwoodjs/testing/web'

import Comment from './Comment'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Comment', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <Comment
          comment={{
            name: 'John Doe',
            body: 'This is a comment',
            createdAt: '2020-02-02T12:34:56Z',
          }}
        />
      )
    }).not.toThrow()
  })
})
