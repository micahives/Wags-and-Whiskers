const typeDefs = `

type Query {
me: User
  }


  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
  }

`;

module.exports = typeDefs;
