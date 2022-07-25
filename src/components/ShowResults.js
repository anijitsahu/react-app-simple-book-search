import "../css/search.css";

export default function ShowResults(props) {
  return (
    <section>
      <div className="result-title">
        {props.resultTitle}
        <span className="result-metadata result-metadata-badge">
          {props.results.length}
        </span>
        <i className="fa-solid fa-plus icon" onClick={props.addItemHandler}></i>
      </div>
      {props.results.map((ele) => {
        return (
          <article key={ele._id} className="padding-1rem result-item-container">
            <div>{ele.name}</div>
            <div className="result-metadata-title">
              <span className="result-metadata">Published</span>{" "}
              {ele.published || "NA"}
            </div>
            <div>
              <i
                className="fa-solid fa-pencil icon"
                onClick={props.editItemHandler}
              ></i>
              <i
                className="fa-solid fa-trash icon delete-icon"
                onClick={() => props.deleteItemHandler(ele)}
              ></i>
            </div>
          </article>
        );
      })}
    </section>
  );
}
