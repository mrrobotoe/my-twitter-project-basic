import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import { Box } from 'src/styles/Box/Box.styled'
import { Center } from 'src/styles/Center/Center.styled'
import { Cluster } from 'src/styles/Cluster/Cluster.styled'
import { Stack } from 'src/styles/Stack/Stack.styled'

import { Header } from './TwitterLayout.styled'

type TwitterLayoutProps = {
  children?: React.ReactNode
}

const TwitterLayout = ({ children }: TwitterLayoutProps) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  console.log(currentUser)

  return (
    <Box style={{ position: 'relative' }} $borderThickness="0">
      <Toaster />
      <Cluster
        style={{
          border: `1px solid var(--color-dark)`,
          padding: '0.75rem',
          backgroundColor: 'var(--color-light)',
          borderRadius: '10px',
          position: 'sticky',
          top: '0',
          zIndex: '1',
        }}
        justify="space-between"
        as="nav"
      >
        <header>
          <Link to={routes.home()}>
            <Header>Twitter</Header>
          </Link>
          <span>{isAuthenticated && currentUser.name}</span>
        </header>
        <Cluster>
          <Box padding="var(--s-3)">
            <Link style={{ textDecoration: 'none' }} to={routes.home()}>
              Home
            </Link>
          </Box>
          <Box padding="var(--s-3)">Messages</Box>
          <Box padding="var(--s-3)">Notifications</Box>
          {isAuthenticated ? (
            <Box onClick={logOut} padding="var(--s-3)">
              Logout
            </Box>
          ) : (
            <Box onClick={logOut} padding="var(--s-3)">
              <Link style={{ textDecoration: 'none' }} to={routes.login()}>
                Login
              </Link>
            </Box>
          )}
        </Cluster>
      </Cluster>
      <Center style={{ marginTop: 'var(--s0)' }} as="main">
        <Stack>{children}</Stack>
      </Center>
    </Box>
  )
}

export default TwitterLayout
