import React, { FC } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Event from "./pages/Event";
import NavBar from "./components/NavBar";
import { Layout } from "antd";
import { useAppSelector } from "./hooks/reduxHooks";

export enum RouteNames {
  LOGIN = "/login",
  EVENT = "/",
}

const App: FC = (): JSX.Element => {
  const {isAuth} = useAppSelector((state) => state.auth);
  return (
    <Layout>
      <NavBar />
      <Layout.Content>
        <Routes>
          {isAuth ? (
              <Route path={RouteNames.EVENT} element={<Event />} />
          ) : (
              <Route path={RouteNames.LOGIN} element={<Login />} />
          )}
        </Routes>
      </Layout.Content>
    </Layout>
  );
};

export default App;
