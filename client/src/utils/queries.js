import { gql } from '@apollo/client';

export const PET_PROFILE = gql`
query petProfile($petId: ID!) {
  petProfile(petId: $petId) {
    _id
    petName
    isDog
    age
    currentAge
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
`

