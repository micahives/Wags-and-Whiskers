// remember to add 'myPets: [Pet]' field, removed for
// testing the login/account creation

const typeDefs = `
  type Profile {
    _id: ID
    username: String
    email: String
    image: String
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

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    me: Profile
    petProfile(petId: ID!): Pet
    petActivity: [Activity]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addProfile(username: String!, email: String!, password: String!, image: String): Auth
    editProfile(email: String, password: String, image: String): Profile
    addPet(petName: String!, isDog: Boolean!, age: Int!, weight: Float, image: String): Pet
    devAddPet(profileId: ID!, petName: String!, isDog: Boolean!, age: Int!, weight: Float, image: String): Pet
    editPet(petId: ID!, petName: String, age: Int, weight: Float, image: String): Pet
    editActivity(petId: ID!, activityId: ID!, isComplete: Boolean!): Pet
    removePet(petId: ID!): Profile
  }
`;

module.exports = typeDefs;
