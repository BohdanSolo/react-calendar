import React, { FC } from "react";
import {Layout, Row} from "antd";
import LoginForm from "../components/LoginForm";
import "../App.css";

const Login: FC = (): JSX.Element => {
  return (
    <Layout className={"wrapper"}>
      <Row justify={"center"} align={"middle"} className={"h100"}>
          <LoginForm />
      </Row>
    </Layout>
  );
};

export default Login;
