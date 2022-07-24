// npm dependencies
import { useLazyQuery } from "@apollo/client";
import { useState } from "react";

// local dependencies
import { allQueries } from "./AllQueries";
import ShowResults from "./ShowResults";
import AddItem from "./AddItem";

export default function Search(props) {
  const [searchText, setSearchText] = useState("");
  const [addItem, setAddItem] = useState(false);

  // extract necessary gql queries
  const ALL_QUERIES = allQueries();
  const FIND_BOOKS_QUERY = ALL_QUERIES.FIND_BOOKS_QUERY;

  // query graphql server
  const [findBooks, { loading, error, data }] = useLazyQuery(FIND_BOOKS_QUERY);
  console.log("loading", loading, " and error ", error, " and data ", data);

  const onClickHandler = () => {
    console.log("search text: ", searchText);
    findBooks();
  };

  return (
    <section className="padding-1rem align-center search-container">
      <div className="title-text">Search Books</div>
      <input
        type="text"
        placeholder="Enter book name to search"
        className="padding-1rem"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={onClickHandler}>Search</button>
      {data && (
        <ShowResults
          results={data.findBooks}
          resultTitle={"Books"}
          addItemHandler={() => setAddItem(true)}
        />
      )}
      {addItem && <AddItem addItemHandler={() => setAddItem(false)} />}
    </section>
  );
}
