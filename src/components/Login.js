import { useLazyQuery } from "@apollo/client";
import { useState } from "react";

// css
import "../css/login.css";

// components
import Notification from "./Notification";
import { allGraphQLQueries } from "./AllGraphQLQueries";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // extract necessary gql queries
  const ALL_GRAPHQL_QUERIES = allGraphQLQueries();
  const CREATE_TOKEN_QUERY = ALL_GRAPHQL_QUERIES.CREATE_TOKEN_QUERY;

  // event handlers
  const onChangeHandler = (e) => {
    const { id, value } = e.target;
    id === "username" ? setUsername(value) : setPassword(value);
  };

  const onClickHandler = (e) => {
    if (username && password) {
      createToken({
        variables: { userInput: username, passwordInput: password },
      });
      setUsername("");
      setPassword("");
    }
  };

  const [createToken, { loading, error, data }] =
    useLazyQuery(CREATE_TOKEN_QUERY);

  if (data?.createToken?.token) {
    localStorage.setItem("AUTH_TOKEN", data.createToken.token);

    // fix for Error: can not update App while Login is updating
    setTimeout(() => props.onTokenReceipt(true), 100);
  }

  return (
    <section className="login-div padding-1rem">
      <div className="title-text">User Login</div>
      {error && (
        <Notification
          notificationMessage={error.toString()}
          notificationType={"error"}
        />
      )}
      <input
        id="username"
        type="text"
        className="login-input padding-1rem"
        placeholder="Enter Username"
        value={username}
        onChange={onChangeHandler}
      />
      <input
        id="password"
        type="password"
        className="login-input padding-1rem"
        placeholder="Enter Password"
        value={password}
        onChange={onChangeHandler}
      />
      <button className="login-button" onClick={onClickHandler}>
        Login
      </button>
    </section>
  );
}
