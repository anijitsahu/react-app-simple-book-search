import { gql } from "@apollo/client";

const allGraphQLQueries = () => {
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

    ADD_BOOKS_MUTATION: gql`
      mutation AddBookMutation($bookName: String!) {
        addBook(name: $bookName) {
          _id
          name
        }
      }
    `,

    DELETE_BOOK_MUTATION: gql`
      mutation DeleteBookMutation($bookId: ID!) {
        deleteBook(_id: $bookId)
      }
    `,
  };
};

export { allGraphQLQueries };
