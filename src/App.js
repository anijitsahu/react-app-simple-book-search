// npm dependencies
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// components
import Login from "./components/Login";
import Search from "./components/Search";

// css
import "./css/styles.css";

// Constants
import { Constants } from "./Constants";

const allConstants = Constants();
// initialize the Apollo Client
const client = new ApolloClient({
  uri: allConstants.GRAPHQL_URL,
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Login />
        <Search />
      </div>
    </ApolloProvider>
  );
}
