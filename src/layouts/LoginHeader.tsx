import { Header } from "antd/es/layout/layout";
import logoImage from "../assets/logo.png"; // Replace with your actual image path
import Title from "antd/es/typography/Title";

const LoginHeader = () => {
  return (
    <Header
      style={{
        background: "#fff",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        height: "fit-content",
      }}
    >
      <img src={logoImage} alt="Logo" style={{ maxWidth: "100px" }} />
      <Title level={3} style={{ margin: 0, marginLeft: "10px" }}>
        Goods Management
      </Title>
    </Header>
  );
};

export default LoginHeader;
