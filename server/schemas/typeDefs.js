// remember to add 'myPets: [Pet]' field, removed for
// testing the login/account creation

const typeDefs = `
  type Profile {
    _id: ID
    username: String
    email: String
    petCount: Int
    myPets: [Pet]
  }

  type Pet {
    _id: ID
    petName: String
    isDog: Boolean
    age: Int
    currentAge: Int
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

  input ActivityInput {
    name: String
    frequency: String
    category: String
    isComplete: Boolean
    lastCompleted: [String]
  }

  input PetInput {
    petName: String
    isDog: Boolean
    activities: [ActivityInput]
    age: Int
    weight: Float
    image: String
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    me: Profile
    petProfile(petId: ID!): Profile
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addProfile(username: String!, email: String!, password: String!): Auth
    editProfile(profileId: ID!, email: String, password: String): Profile
    addPet(ppetName: String!, isDog: Boolean!, age: Int!, weight: Float, image: String): Profile
    editPet(petId: ID!, input: PetInput!): Profile
    editActivity(_id: ID!, isComplete: Boolean!): Profile
    removePet(petId: ID!): Profile
  }
`;

module.exports = typeDefs;
