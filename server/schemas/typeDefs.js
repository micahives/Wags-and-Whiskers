// remember to add 'myPets: [Pet]' field, removed for
// testing the login/account creation

const typeDefs = `
  type Profile {
    _id: ID
    username: String
    email: String
    myPets: [Pet]
  }

  type Pet {
    petName: String
    isDog: Boolean
    currentAge: Int
    weight: Float
    image: String
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    me: Profile
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addProfile(username: String!, email: String!, password: String!): Auth
    editProfile(profileId: ID!, email: String, password: String): Profile
    addPet(petName: String!, isDog: Boolean!, age: Int!, weight: Float, image: String): Profile
    editPet(petId: ID!, petName: String, weight: Float, image: String): Profile
    removePet(petId: ID!): Profile
  }
`;

module.exports = typeDefs;
