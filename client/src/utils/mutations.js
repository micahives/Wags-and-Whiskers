import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const ADD_PROFILE = gql`
  mutation addProfile($username: String!, $email: String!, $password: String!) {
    addProfile(username: $username, email: $email, password: $password) {
      token
      profile {
        _id
        username
        email
      }
    }
  }
`;

export const EDIT_PROFILE = gql`
mutation editProfile($email: String, $password: String, $image: String) {
  editProfile(email: $email, password: $password, image: $image) {
    _id
    username
    email
    image
    petCount
    myPets {
      _id
      petName
      isDog
      age
      currentAge
      weight
      image
    }
  }
}`


export const ADD_PET = gql`
mutation addPet($petName: String!, $isDog: Boolean!, $age: Int!, $weight: Float, $image: String) {
  addPet(petName: $petName, isDog: $isDog, age: $age, weight: $weight, image: $image) {
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
}`;

export const EDIT_PET = gql`
mutation editPet($petId: ID!, $weight: Float, $petName: String, $image: String) {
  editPet(petId: $petId, weight: $weight, petName: $petName, image: $image) {
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
}`

export const REMOVE_PET = gql`
mutation removePet($petId: ID!) {
  removePet(petId: $petId) {
    myPets {
      _id
      petName
    }
  }
}`

export const EDIT_ACTIVITY = gql`
mutation editActivity($petId: ID!, $activityId: ID!, $isComplete: Boolean!) {
  editActivity(petId: $petId, activityId: $activityId, isComplete: $isComplete) {
    _id
    activities {
      _id
      name
      frequency
      category
      isComplete
      lastCompleted
    }
  }
}`