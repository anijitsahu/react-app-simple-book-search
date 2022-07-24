import { gql } from "@apollo/client";

const allQueries = () => {
  return {
    CREATE_TOKEN_QUERY: gql`
      query CreateTokenQuery($userInput: String!, $passwordInput: String!) {
        createToken(username: $userInput, password: $passwordInput) {
          token
        }
      }
    `,
  };
};

export { allQueries };
