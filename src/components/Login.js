import { gql, useQuery } from "@apollo/client";

export default function Login(props) {
  const CREATE_TOKEN_QUERY = gql`
    query CreateTokenQuery {
      createToken(username: "admin", password: "admin123") {
        token
      }
    }
  `;

  const { loading, error, data } = useQuery(CREATE_TOKEN_QUERY, {
    variables: { username: "admin", password: "admin123" },
  });

  console.log("values are", loading, " and error ", error, " and Data", data);
  return (
    <div className="login-div">
      <div>Login Page</div>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
    </div>
  );
}
