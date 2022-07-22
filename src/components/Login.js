import { gql, useQuery, useLazyQuery } from "@apollo/client";
import { useState } from "react";

// css
import "../css/login.css";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const CREATE_TOKEN_QUERY = gql`
    query CreateTokenQuery($userInput: String!, $passwordInput: String!) {
      createToken(username: $userInput, password: $passwordInput) {
        token
      }
    }
  `;

  // event handlers
  const onChangeHandler = (e) => {
    const { id, value } = e.target;
    id === "username" ? setUsername(value) : setPassword(value);
  };

  const onClickHandler = (e) => {
    if (username && password) {
      createToken({ variables: { username, password } });
    } else {
      console.log("Button clicked");
    }
  };

  const [createToken, { loading, error, data }] = useLazyQuery(
    CREATE_TOKEN_QUERY,
    {
      variables: { username: "admin", password: "admin123" },
    }
  );

  console.log("values are", loading, " and error ", error, " and Data", data);
  return (
    <div className="login-div padding-1rem">
      <div>Login Page</div>
      <input
        id="username"
        type="text"
        className="login-input padding-1rem"
        placeholder="Username"
        value={username}
        onChange={onChangeHandler}
      />
      <input
        id="password"
        type="password"
        className="login-input padding-1rem"
        placeholder="Password"
        value={password}
        onChange={onChangeHandler}
      />
      <button className="login-button" onClick={onClickHandler}>
        Login
      </button>
    </div>
  );
}
