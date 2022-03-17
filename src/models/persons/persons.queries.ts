import { gql } from "@apollo/client";

export const FIND_PERSON = gql`
  query findPersonByName($name: String!) {
    findPersonByName(name: $name) {
      name
      phone
    }
  }
`;

export const ALL_PERSONS = gql`
  query {
    persons {
      name
      id
    }
  }
`;
