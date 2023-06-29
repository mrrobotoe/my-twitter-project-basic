import type { Prisma, User } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    john: {
      data: {
        name: 'John Doe',
        email: 'johnd@email.com',
        hashedPassword: 'qwiurpoiuslxmvlkmzx-997',
        salt: 'asdfsad98f-s0a9d8f0',
      },
    },
    jane: {
      data: {
        name: 'Jane Janet',
        email: 'janej@email.com',
        hashedPassword: '023948029384029384sdlkfjslkdfj',
        salt: '209348230sldkfsdkfj',
      },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
