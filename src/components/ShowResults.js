import "../css/search.css";

export default function ShowResults(props) {
  return (
    <section>
      <div className="result-title">
        {props.resultTitle}
        <span className="result-metadata result-metadata-badge">
          {props.results.length}
        </span>
        <i class="fa-solid fa-plus icon"></i>
      </div>
      {props.results.map((ele) => {
        return (
          <article key={ele._id} className="padding-1rem result-item-container">
            <div>{ele.name}</div>
            <div className="result-metadata-title">
              <span className="result-metadata">Published</span>{" "}
              {ele.published || "NA"}
            </div>
          </article>
        );
      })}
    </section>
  );
}
