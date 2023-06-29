import { render, screen } from '@redwoodjs/testing/web'

import TwitterLayout from './TwitterLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TwitterLayout', () => {
  it('does not render the logout or current user email', () => {
    render(<TwitterLayout />)

    expect(screen.queryByText('Logout')).not.toBeInTheDocument()
  })

  it("does render both logout and user's email", () => {
    mockCurrentUser({
      id: 1,
      name: 'John Doe',
      email: 'johndoe@email.com',
    })

    render(<TwitterLayout />)

    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('Logout')).toBeInTheDocument()
  })
})
