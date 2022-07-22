// npm dependencies
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// components
import Login from "./components/Login";
import Search from "./components/Search";

// css
import "./css/styles.css";

// initialize the Apollo Client
const client = new ApolloClient({
  uri: "https://4j844x5vu5.execute-api.ap-south-1.amazonaws.com/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>Hello World !!</h1>
        <Login />
        <Search />
      </div>
    </ApolloProvider>
  );
}
