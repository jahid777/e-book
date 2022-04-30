import { useContext, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";

const AdminPrivateRoute = ({ children, ...rest }) => {
  //   const isLoggedIn = () => {
  const token = sessionStorage.getItem("token");
  //   };
  return (
    <Route
      {...rest}
      render={({ location }) =>
        token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminPrivateRoute;
