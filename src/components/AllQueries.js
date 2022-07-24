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

    FIND_BOOKS_QUERY: gql`
      query FindBooksQuery {
        findBooks {
          _id
          name
          published
        }
      }
    `,
  };
};

export { allQueries };
