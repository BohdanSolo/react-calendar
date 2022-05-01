import React from "react";
import { Layout, Row } from "antd";
import LoginForm from "../components/LoginForm";

const Registration = () => {
  return (
    <Layout className={"wrapper"}>
      <Row justify={"center"} align={"middle"} className={"h100"} >
          <LoginForm
            btnPlaceholder={"Sign up"}
            userPlaceholder={"set username"}
            passwordPlaceholder={"create password"}
            isReg={false}
          />
      </Row>
    </Layout>
  );
};

export default Registration;
