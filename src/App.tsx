import React, { FC } from "react";
import "./App.css";
import { useRoutes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Event from "./pages/Event";

export enum RouteNames {
  LOGIN = "/login",
  EVENT = "/",
}

const App: FC = (): JSX.Element => {
  const auth = true;
  const element = useRoutes([
    auth
      ? {
          path: RouteNames.EVENT,
          element: <Event />,
        }
      : {
          path: RouteNames.LOGIN,
          element: <Login />,
        },
  ]);

  return <div>{element}</div>;
};

export default App;
