import React from "react";

import {Layout, Row} from "antd";

import LoginForm from "../components/LoginForm";
import "../App.css";


const Login = (): JSX.Element => {
  return (
    <Layout className={"wrapper"}>
      <Row justify={"center"} align={"middle"} className={"h100"}>
          <LoginForm btnPlaceholder={"Login"} userPlaceholder={"username"} passwordPlaceholder={"password"} isLog={true} />
      </Row>
    </Layout>
  );
};

export default Login;
