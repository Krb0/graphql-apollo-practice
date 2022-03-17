import { gql } from "@apollo/client";

export const CREATE_PERSON = gql`
  mutation Mutations(
    $name: String!
    $phone: String!
    $street: String!
    $city: String!
  ) {
    addPerson(name: $name, phone: $phone, street: $street, city: $city) {
      name
      phone
    }
  }
`;
export const CHANGE_NUMBER = gql`
  mutation ChangeNumber($name: String!, $phone: String!) {
    editNumber(name: $name, phone: $phone) {
      name
      phone
    }
  }
`;
