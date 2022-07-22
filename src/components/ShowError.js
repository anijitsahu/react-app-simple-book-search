import { useState } from "react";

export default function ShowError(props) {
  const [showError, setShowError] = useState(true);
  setTimeout(() => setShowError(false), 3000);
  return (
    showError && (
      <div>
        <h4>Error Occurred</h4>
        <div>{props.errorMessage}</div>
      </div>
    )
  );
}
