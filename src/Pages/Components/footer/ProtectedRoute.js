import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import { selectGoogleUser } from "../../../features/counter/counterSlice";



function ProtectedRoute({ component: Component, ...restOfProps }) {
    const loggedIn = useAppSelector(selectGoogleUser);
  console.log("this", loggedIn);

  return (
    <Route
      {...restOfProps}
      render={(props) => loggedIn ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
}

export default ProtectedRoute;