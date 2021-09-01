import { gql } from "apollo-server";

const typeDefs = gql`
  type Cafe {
    cafeName: String!
    city: String!
    isLessThan5drinks: Boolean!
    pinCode: String!
  }
  type Query {
    cafes: [Cafe]
  }
`;

export { typeDefs };
