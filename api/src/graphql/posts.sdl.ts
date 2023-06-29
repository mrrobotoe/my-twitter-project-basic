export const schema = gql`
  type Post {
    id: Int!
    body: String!
    likes: Int!
    comments: Int!
    createdAt: DateTime!
    user: User!
  }

  type Query {
    posts: [Post!]! @skipAuth
    post(id: Int!): Post @skipAuth
  }

  input CreatePostInput {
    body: String!
    likes: Int!
    comments: Int!
  }

  input UpdatePostInput {
    body: String
    likes: Int
    comments: Int
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @requireAuth
    updatePost(id: Int!, input: UpdatePostInput!): Post! @requireAuth
    deletePost(id: Int!): Post! @requireAuth
  }
`
