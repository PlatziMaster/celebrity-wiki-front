// Import libraries
import { gql } from "apollo-boost";

export const GET_ALL_CELEBRITIES = gql`
  query GetAllCelebrities {
    getCelebrities {
      _id
      name
      age
      height
      occupation
      nationality
      bio
      Image
    }
  }
`;
