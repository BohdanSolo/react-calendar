import React, { FC } from "react";
import { Layout, Menu, Row } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../App";
import { useAppSelector } from "../hooks/reduxHooks";
import {RootState} from "../redux/store";
import {useActions} from "../hooks/useActions";


const stateAuth = (state: RootState) => state.auth;

const NavBar: FC = (): JSX.Element => {
  const navigate = useNavigate();
  const {logout} = useActions()
  const {user} = useAppSelector(stateAuth)


  const handleLogOut = () => {
    logout();
  };

  const { isAuth } = useAppSelector((state) => state.auth);
  return (
    <Layout.Header>
      <Row justify={"end"}>
        {isAuth ? (
          <>
            <div style={{ color: "white", paddingRight: "10px" }}>{user.username}</div>
            <Menu theme={"dark"} mode={"horizontal"} selectable={false}>
              <Menu.Item icon={<MailOutlined />} onClick={handleLogOut}>
                Logout
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <Menu theme={"dark"} mode={"horizontal"} selectable={false}>
            <Menu.Item
              icon={<MailOutlined />}
              onClick={() => navigate(RouteNames.LOGIN)}
            >
              Login
            </Menu.Item>
          </Menu>
        )}
      </Row>
    </Layout.Header>
  );
};

export default NavBar;
