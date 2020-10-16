import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import base from "./base.js";
import { AuthContext } from "./Auth.js";

const Login = ({ history }) => {
  const handleLogin = useCallback(
      async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
          await base.app
            .auth()
            .signInWithEmailAndPassword(email.value, password.value);
          history.push("/reports");
        }
        catch (error) {
            console.error(`Login failed: ${error}`);
        }
      },
      [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
      return <Redirect to="/reports" />;
  }

  return (
    <div>
     <div className="section-div">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className="sub-section-div">
              <input name="email" type="email" placeholder="Email" />
          </div>
          <div className="sub-section-div">
              <input name="password" type="password" placeholder="Password" />
          </div>
          <div className="sub-section-div">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );

};

export default withRouter(Login);