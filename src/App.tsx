import React, {useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Event from "./pages/Event";
import NavBar from "./components/NavBar";
import { Layout } from "antd";
import { useAppSelector } from "./hooks/reduxHooks";
import { useActions } from "./hooks/useActions";
import { IUser } from "./models/IUser";
import Registration from "./pages/Registration";

export enum RouteNames {
  REGISTRATION = "/registration",
  LOGIN = "/",
  EVENT = "/event",
}

const App = (): JSX.Element => {
  const { isAuth } = useAppSelector((state) => state.auth);
  const { setUsers, setIsAuth } = useActions();

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setUsers({ username: localStorage.getItem("username" || "") } as IUser);
      setIsAuth(true);
    }
  }, [isAuth]);
  return (
    <Layout>
      <NavBar />
      <Layout.Content>
        <Routes>
          {isAuth ? (
            <Route path={RouteNames.EVENT} element={<Event/>} />
          ) : (
              <>
                <Route path={RouteNames.REGISTRATION} element={<Registration />} />
                <Route path={RouteNames.LOGIN} element={<Login />} />
              </>

          )}
        </Routes>
      </Layout.Content>
    </Layout>
  );
};

export default App;
