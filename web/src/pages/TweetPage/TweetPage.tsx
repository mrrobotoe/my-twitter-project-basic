import { MetaTags } from '@redwoodjs/web'

import TweetCell from 'src/components/TweetCell'
const TweetPage = ({ id }) => {
  return (
    <>
      <MetaTags title="Tweet" description="Tweet page" />

      <TweetCell id={id} />
    </>
  )
}

export default TweetPage
