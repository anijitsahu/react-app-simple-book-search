export default function ShowResults(props) {
  return (
    <section>
      {props.results.map((ele) => {
        return (
          <article key={ele._id} className="padding-1rem">
            {ele.name}
          </article>
        );
      })}
    </section>
  );
}
