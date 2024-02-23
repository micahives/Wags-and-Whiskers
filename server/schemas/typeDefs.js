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
    _id: ID
    petName: String
    isDog: Boolean
    age: Int
    weight: Float
    image: String
    activities: [Activity]
  }

  type Activity {
    _id: ID
    name: String
    frequency: String
    category: String
    isComplete: Boolean
    lastCompleted: [String]
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
    editPet(_id: ID!, petName: String, weight: Float, image: String): Profile
    editActivity(_id: ID!, isComplete: Boolean!): Pet
    removePet(_id: ID!): Profile
  }
`;

module.exports = typeDefs;
