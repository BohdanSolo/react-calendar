import React, { FC } from "react";
import { Layout, Menu, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../App";
import { useAppSelector } from "../hooks/reduxHooks";
import { RootState } from "../redux/store";
import { useActions } from "../hooks/useActions";
import { Link } from "react-router-dom";

const stateAuth = (state: RootState) => state.auth;

const NavBar: FC = (): JSX.Element => {
  const { logout } = useActions();
  const { user } = useAppSelector(stateAuth);

  const handleLogOut = () => {
    logout();
  };

  const { isAuth } = useAppSelector((state) => state.auth);
  return (
    <Layout.Header>
      <Row justify={"end"}>
        {isAuth ? (
          <>
            <div style={{ color: "white", paddingRight: "10px" }}>
              {user.username}
            </div>
            <Menu theme={"dark"} mode={"horizontal"} selectable={false}>
              <Menu.Item onClick={handleLogOut} key={1}>
                Logout
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <>
            <Row>
              <Link className={"link"} to={RouteNames.LOGIN}>Login</Link>
              <Link className={"link"}  to={RouteNames.REGISTRATION}>Registration</Link>
            </Row>
          </>
        )}
      </Row>
    </Layout.Header>
  );
};

export default NavBar;
