import Layout from "antd/es/layout/layout";

import "../style/Home.scss";
import Input from "antd/es/input/Input";
import { Header } from "../component/Header/Header";
import { Col, Image, Row } from "antd";
import Sider from "antd/es/layout/Sider";
import { AlignLeftOutlined } from "@ant-design/icons";

export const Home = () => {
  return (
    <Layout className="layout">
      <Header />
      <Row gutter={[24, 16]} className="main">
        <Col span={8} className="categories">nfdjdnfdjfnd</Col>
        <Col span={16} className="main-content">
          <Row>
            <Image src=''></Image>
          </Row>
        </Col>
      </Row>
    </Layout>
  );
};
