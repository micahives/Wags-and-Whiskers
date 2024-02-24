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


export const ADD_PET = gql`
mutation addPet($petName: String!, $isDog: Boolean!, $age: Int!) {
  addPet(petName: $petName, isDog: $isDog, age: $age) {
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
}`;

