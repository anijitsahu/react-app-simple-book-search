// npm dependencies
import { useMutation } from "@apollo/client";
import { useState } from "react";

// css
import "../css/addItem.css";

// local dependencies
import { allQueries } from "./AllQueries";

export default function AddItem(props) {
  const [itemDetails, setItemDetails] = useState({
    bookName: "",
    published: "",
  });

  // extract necessary gql query
  const ALL_QUERIES = allQueries();

  // graphql operations
  const [addBook, { data, loading, error }] = useMutation(
    ALL_QUERIES.ADD_BOOKS_MUTATION
  );

  console.log("data ", data, " erroor", error, " and loading ", loading);

  // event handlers
  const onChangeHandler = (e) => {
    const { id, value } = e.target;
    setItemDetails({ ...itemDetails, [id]: value });
  };

  const onClickHandler = (e) => {
    console.log("Item Details", itemDetails);
    if (itemDetails.bookName) {
      addBook({ variables: { bookName: itemDetails.bookName } });
    }
  };

  return (
    <section className="add-item-container padding-1rem">
      <div className="title-text">Add Item</div>
      <i
        className="fa-solid fa-xmark icon close-icon"
        onClick={props.addItemHandler}
      ></i>
      <article className="add-item-details">
        <label className="result-metadata result-metadata-title">
          Book Name
        </label>
        <input
          type="text"
          id="bookName"
          value={itemDetails.bookName}
          onChange={onChangeHandler}
        />
        <label className="result-metadata result-metadata-title">
          Published Year
        </label>
        <input
          type="text"
          id="published"
          value={itemDetails.published}
          onChange={onChangeHandler}
        />
      </article>
      <button onClick={onClickHandler}>Save</button>
    </section>
  );
}
