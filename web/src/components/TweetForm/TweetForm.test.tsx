import { render, screen } from '@redwoodjs/testing/web'

import TweetForm from './TweetForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TweetForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TweetForm />)
    }).not.toThrow()
  })

  it('does not allow to tweet without logging in', () => {
    render(<TweetForm />)

    expect(screen.getByText('Tweet').closest('button')).toBeDisabled()
  })

  it('allows to tweet as logged in user', () => {
    mockCurrentUser({
      id: 1,
      email: 'test@example.com',
    })

    render(<TweetForm />)

    expect(screen.getByText('Tweet').closest('button')).toBeEnabled()
  })
})
