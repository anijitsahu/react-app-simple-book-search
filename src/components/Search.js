// npm dependencies
import { useState } from "react";

// local dependencies
import { allQueries } from "./AllQueries";

export default function Search(props) {
  const [searchText, setSearchText] = useState("");

  // extract necessary gql queries
  const ALL_QUERIES = allQueries();
  // const CREATE_TOKEN_QUERY = ALL_QUERIES.CREATE_TOKEN_QUERY;

  const onClickHandler = () => {
    console.log("seaech text: ", searchText);
  };

  return (
    <section>
      <h3>Search Page</h3>
      <input
        type="text"
        placeholder="Enter book name to search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={onClickHandler}>Search</button>
    </section>
  );
}
