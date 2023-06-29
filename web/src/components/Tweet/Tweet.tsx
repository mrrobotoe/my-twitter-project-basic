import { Post } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useQuery } from '@redwoodjs/web'

import CommentForm from 'src/components/CommentForm'
import CommentsCell from 'src/components/CommentsCell'
import { QUERY as TweetQuery } from 'src/components/TweetCell'
import { Box } from 'src/styles/Box/Box.styled'
import { Center } from 'src/styles/Center/Center.styled'
import { Cluster } from 'src/styles/Cluster/Cluster.styled'
import { WithIcon, Icon } from 'src/styles/Icon/Icon.styled'
import { Stack } from 'src/styles/Stack/Stack.styled'

import CommentLogo from './commentIcon.svg'
import LikeLogo from './likeIcon.svg'

const formattedDate = (datetime: ConstructorParameters<typeof Date>[0]) => {
  const parsedDate = new Date(datetime)
  const month = parsedDate.toLocaleString('default', { month: 'long' })
  return `${parsedDate.getDate()} ${month} ${parsedDate.getFullYear()}`
}

interface Props {
  tweet: Post
  countComments?: number
  summary?: boolean
}

const TweetLayout = ({ tweet, summary }: Props) => {
  const { data } = useQuery(TweetQuery, {
    variables: { id: tweet.id },
  })

  return (
    <Center>
      <Stack>
        <Box>
          <Stack as="article">
            <h4>@{tweet.user.name}</h4>
            <Box $borderThickness="0" as="p">
              {tweet.body}
            </Box>
          </Stack>
          <Box $borderThickness="0">
            <span
              style={{ fontSize: 'var(--s-1)', color: 'var(--color-neutral)' }}
            >
              Posted at: {formattedDate(tweet.createdAt)}
            </span>
          </Box>
          <Box $borderThickness="0">
            <Cluster style={{ zIndex: 3 }}>
              <Box padding="0.5" $borderThickness="0">
                <WithIcon>
                  <Icon $withIcon onClick={console.log}>
                    <LikeLogo />
                  </Icon>
                  {tweet.likes}
                </WithIcon>
              </Box>
              <Box padding="0.5" $borderThickness="0">
                <WithIcon>
                  <Icon $withIcon onClick={() => console.log('comment')}>
                    <CommentLogo />
                  </Icon>
                </WithIcon>
                {data?.countComments}
              </Box>
            </Cluster>
          </Box>
        </Box>
        {!summary && (
          <Stack>
            <CommentForm postId={tweet.id} />
            <CommentsCell postId={tweet.id} />
          </Stack>
        )}
      </Stack>
    </Center>
  )
}

const Tweet = ({ tweet, countComments, summary = false }: Props) => {
  if (summary) {
    return (
      <Link
        style={{ textDecoration: 'none' }}
        to={routes.tweet({ id: tweet.id })}
      >
        <TweetLayout
          tweet={tweet}
          countComments={countComments}
          summary={summary}
        />
      </Link>
    )
  }

  return (
    <TweetLayout
      tweet={tweet}
      countComments={countComments}
      summary={summary}
    />
  )
}

export default Tweet
