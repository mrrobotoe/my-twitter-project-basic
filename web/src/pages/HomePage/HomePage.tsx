// import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import TweetForm from 'src/components/TweetForm/TweetForm'
import TweetsCell from 'src/components/TweetsCell'
import { Stack } from 'src/styles/Stack/Stack.styled'
const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <Stack>
        <TweetForm />
        <TweetsCell />
      </Stack>
    </>
  )
}

export default HomePage
