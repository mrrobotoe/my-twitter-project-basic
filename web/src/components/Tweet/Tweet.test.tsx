import { render, screen } from '@redwoodjs/testing/web'

import Tweet from './Tweet'

const TWEET = {
  id: 1,
  body: 'Neutra kogi chillwave fixie adaptogen sus small batch bespoke salvia tacos tattooed neutral milk hotel church-key. Lumbersexual asymmetrical man braid readymade unicorn man bun blog ethical cornhole ugh church-key butcher gluten-free freegan. Scenester slow-carb microdosing, af fixie tumblr polaroid before they sold out kombucha taiyaki try-hard gorpcore PBR&B. Adaptogen lo-fi vibecession yuccie, plaid pitchfork shoreditch cornhole same. Vinyl crucifix 8-bit, waistcoat meggings chillwave tilde PBR&B semiotics cray tumblr skateboard bicycle rights disrupt seitan.',
  likes: 1,
  comments: 0,
  createdAt: new Date().toISOString(),
  user: {
    id: 1,
    name: 'John Doe',
    email: 'johnd@email.com',
  },
  userId: 1,
}
//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Tweet', () => {
  it('renders a tweet', () => {
    render(<Tweet tweet={TWEET} />)

    expect(screen.getByText(TWEET.body)).toBeInTheDocument()
    expect(screen.getByText(TWEET.likes)).toBeInTheDocument()
    expect(screen.getByText(/John Doe/)).toBeInTheDocument()
  })
})
