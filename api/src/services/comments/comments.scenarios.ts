import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CommentCreateArgs>({
  comment: {
    one: {
      data: {
        name: 'String',
        body: 'String',
        post: {
          create: {
            body: 'String',
            likes: 9808699,
            comments: 0,
            user: {
              create: {
                email: 'String5524505',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        body: 'String',
        post: {
          create: {
            body: 'String',
            likes: 6528367,
            comments: 0,
            user: {
              create: {
                email: 'String54667',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
      },
    },
  },
})

export const postOnly = defineScenario<Prisma.PostCreateArgs>({
  post: {
    bark: {
      data: {
        body: "A tree's bark is worse than its bite",
        likes: 1,
        comments: 0,
        user: {
          create: {
            email: 'String54667',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
export type PostOnlyScenario = typeof postOnly
