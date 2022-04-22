import React, { FC } from "react";
import { Layout, Menu, Row } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../App";
import { useAppSelector } from "../hooks/reduxHooks";

const NavBar: FC = (): JSX.Element => {
  const navigate = useNavigate();

  const { isAuth } = useAppSelector((state) => state.auth);
  return (
    <Layout.Header>
      <Row justify={"end"}>
        {isAuth ? (
          <>
            <div style={{ color: "white", paddingRight: "10px" }}>Solo</div>
            <Menu theme={"dark"} mode={"horizontal"} selectable={false}>
              <Menu.Item icon={<MailOutlined />} onClick={() => console.log(1)}>
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
