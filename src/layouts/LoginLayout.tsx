// LoginLayout.tsx
import React from "react";
import { Layout } from "antd";
import LoginHeader from "./LoginHeader";
import { Outlet } from "react-router-dom";

const { Content, Footer } = Layout;

const LoginLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <LoginHeader />
      <Content
        style={{ padding: "50px", display: "flex", justifyContent: "center" }}
      >
        <div
          style={{
            background: "#fff",
            padding: "30px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            width: "fit-content",
            height: "fit-content",
          }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        &copy; 2023 Your Company Name. All rights reserved.
      </Footer>
    </Layout>
  );
};

export default LoginLayout;
