import React from "react";
import { Route, Redirect } from "react-router-dom";
import AuthManager from "../Common/AuthManager";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      AuthManager.isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

export default PrivateRoute;
