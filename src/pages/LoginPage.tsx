// LoginPage.tsx
import React from "react";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { ADMIN_DASHBOARD_ROUTE } from "../constants/RouterConstants";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    const email = "nepotey351@bitofee.com";
    const password = "s@S11111";

    if (values.username === email && values.password === password) {
      navigate(ADMIN_DASHBOARD_ROUTE);
    }
  };

  return (
    <Form
      name="loginForm"
      onFinish={onFinish}
      style={{ width: "fit-content", margin: "auto" }}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input style={{ width: "100%", minWidth: "250px" }} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password style={{ width: "100%", minWidth: "250px" }} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
          Login
        </Button>
      </Form.Item>
      <p>Forgot password</p>
    </Form>
  );
};

export default LoginPage;
