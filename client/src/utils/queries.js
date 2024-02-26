import { gql } from '@apollo/client';

export const PET_PROFILE = gql`
query petProfile($petId: ID!) {
  petProfile(petId: $petId) {
    _id
    username
    email
    myPets {
      _id
      petName
      isDog
      age
      weight
      image
      activities {
        _id
        name
        frequency
        category
        isComplete
        lastCompleted
      }
    }
  }
}`