import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
function UnPrivateRoute({ component: Component, ...rest }) {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated) {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }
        return <Component {...props} />;
      }}
    />
  );
}

export default UnPrivateRoute;