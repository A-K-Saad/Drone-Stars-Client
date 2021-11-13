import React from "react";
import { Route, Redirect } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, isAdmin, loadAdmin } = useAuth();
  if (loadAdmin) {
    return (
      <div className="text-center w-full h-full flex items-center justify-center">
        <img
          src="https://i.ibb.co/VtWDJq1/loading.gif"
          alt="Loader"
          className="w-100"
        />
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && !loadAdmin && isAdmin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/dashboard",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
