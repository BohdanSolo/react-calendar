import React, { FC, useState } from "react";
import { Button, Form, Input, Layout } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { rules } from "../utils/rules";
import { useAppSelector } from "../hooks/reduxHooks";
import { RootState } from "../redux/store";
import { useActions } from "../hooks/useActions";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../App";

const stateAuth = (state: RootState) => state.auth;

const LoginForm: FC = (): JSX.Element => {
  const { login } = useActions();
  const { isLoading, error } = useAppSelector(stateAuth);
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleUserName = (e: React.FormEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value);
  };
  const handlePassword = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const submitLogin = () => {
    login({ username, password });
    setTimeout(() =>  !error ?  navigate(RouteNames.EVENT) : null, 1000)
  };

  return (
    <Layout>
      <Form
        style={{
          width: "400px",
          margin: "0 auto",
          padding: "20px 20px 0 20px",
          borderRadius: "5px",
            border: "1px solid lightgrey",
            boxShadow: "5px 5px 5px 5px rgba(0, 0, 0, 0.1)"
        }}
        onFinish={submitLogin}
      >
        {error && <div style={{ color: "red" }}>{error}</div>}
        <Form.Item
          name="username"
          rules={[rules.required("Please input your username!")]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
            value={username}
            onChange={handleUserName}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[rules.required("Please input your password!")]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
          />
        </Form.Item>
        <Form.Item shouldUpdate style={{ textAlign: "center" }}>
          {() => (
            <Button type="primary" htmlType="submit" loading={isLoading}>
              Log in
            </Button>
          )}
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default LoginForm;
