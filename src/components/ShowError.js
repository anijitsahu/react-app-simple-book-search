import { useState } from "react";

// css
import "../css/error.css";

export default function ShowError(props) {
  const [showError, setShowError] = useState(true);
  setTimeout(() => setShowError(false), 3000);
  return (
    showError && (
      <section className="error-container padding-1rem error-description">
        <div className="error-title">{props.errorMessage}</div>
      </section>
    )
  );
}
