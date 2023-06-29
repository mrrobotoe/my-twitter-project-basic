import type { Prisma, Post } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PostCreateArgs>({
  post: {
    john: {
      data: {
        body: "Narwhal ut hoodie gentrify. Dolore DIY blue bottle dolore ramps gatekeep cupidatat umami chartreuse ennui keffiyeh polaroid subway tile lyft. Blackbird spyplane paleo kinfolk actually YOLO snackwave offal put a bird on it occaecat commodo heirloom. Mixtape mollit craft beer bushwick. You probably haven't heard of them vaporware activated charcoal bitters, typewriter gastropub intelligentsia. Health goth biodiesel jean shorts, succulents ullamco whatever laborum taxidermy lomo.",
        likes: 2,
        comments: 4,
        user: {
          create: {
            name: 'John Doe',
            email: 'johnd@email.com',
            hashedPassword: '230948092384023840924',
            salt: 'fkfasdfasdfjsadf098sa7df908asd7',
          },
        },
      },
    },
    jane: {
      data: {
        body: "Narwhal ut hoodie gentrify. Dolore DIY blue bottle dolore ramps gatekeep cupidatat umami chartreuse ennui keffiyeh polaroid subway tile lyft. Blackbird spyplane paleo kinfolk actually YOLO snackwave offal put a bird on it occaecat commodo heirloom. Mixtape mollit craft beer bushwick. You probably haven't heard of them vaporware activated charcoal bitters, typewriter gastropub intelligentsia. Health goth biodiesel jean shorts, succulents ullamco whatever laborum taxidermy lomo.",
        likes: 2,
        comments: 4,
        user: {
          create: {
            name: 'Jane Doe',
            email: 'janed@email.com',
            hashedPassword: 'asdflksdjfklasjdfasdf-9as7df987',
            salt: 'asdkfjkl;asdjfsa9df7as90-8d7fa90sd7',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Post, 'post'>
