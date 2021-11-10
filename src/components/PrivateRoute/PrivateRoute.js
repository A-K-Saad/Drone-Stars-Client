import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="text-center w-full h-full absolute flex items-center justify-center">
        {/* <div className="spinner-border text-primary mx-auto" role="status">
          <span className="visually-hidden">Loading...</span>
        </div> */}
        <img
          src="https://i.ibb.co/VtWDJq1/loading.gif"
          alt="Loader"
          className="w-100"
        />
      </div>
    );
  }
  return (
    <>
      <Route
        {...rest}
        render={({ location }) => {
          //   currentUser?.email ? children : <Redirect to="/login"></Redirect>;
          if (user?.email) {
            return children;
          } else {
            return (
              <Redirect
                to={{ pathname: "/login", state: { from: location } }}
              ></Redirect>
            );
          }
        }}
      ></Route>
    </>
  );
};

export default PrivateRoute;
