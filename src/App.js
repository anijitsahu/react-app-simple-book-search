// npm dependencies
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// components
import Login from "./components/Login";
import Search from "./components/Search";

// css
import "./css/styles.css";

// Constants
import { Constants } from "./Constants";
import { useState } from "react";

const allConstants = Constants();
// initialize the Apollo Client
const client = new ApolloClient({
  uri: allConstants.GRAPHQL_URL,
  cache: new InMemoryCache(),
});

export default function App() {
  const [tokenReceived, setTokenReceived] = useState(false);

  const onTokenReceiptHandler = (received) => {
    setTokenReceived(received);
  };

  return (
    <ApolloProvider client={client}>
      <main>
        {!tokenReceived ? (
          <Login onTokenReceipt={onTokenReceiptHandler} />
        ) : (
          <Search />
        )}
      </main>
    </ApolloProvider>
  );
}
