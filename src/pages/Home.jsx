import Layout from "antd/es/layout/layout";

import "../style/Home.scss";
import { Header } from "../component/Header/Header";
import { Col, Image, Menu, Row } from "antd";
import React from "react";
import {
  AlignLeftOutlined,
  RightOutlined,
  TagOutlined,
} from "@ant-design/icons";

const items = [
  "Computer",
  "Hand Tools",
  "Machine Tools",
  "Power Tools",
  "Storage Tools",
  "Clothes",
  "Electrical",
  "Building Tools",
  "Food",
  "Drinks",
].map((name, index) => {
  const key = String(index + 1);
  return {
    key: `sub ${key}`,
    label: name,
    icon: React.createElement(RightOutlined),
  };
});

export const Home = () => {
  return (
    <Layout className="layout">
      <Header />
      <div className="main-element">
        <Row gutter={[16, 16]} className="main">
          <Col span={6} className="categories">
            <h1>
              <AlignLeftOutlined />
              Categories
            </h1>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              items={items}
              className="categories-menu"
            />
          </Col>
          <Col span={18} className="main-content">
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Image src="https://anphat.com.vn/media/banner/15_Novfdd498b2d2f6442f6a5d7b2671b4fb0f.jpg" />
              </Col>
              <Col span={8}>
                <Image src="https://anphat.com.vn/media/banner/15_Novfdd498b2d2f6442f6a5d7b2671b4fb0f.jpg" />
              </Col>
              <Col span={8}>
                <Image src="https://anphat.com.vn/media/banner/15_Novfdd498b2d2f6442f6a5d7b2671b4fb0f.jpg" />
              </Col>
              <Col span={8}>
                <Image src="https://anphat.com.vn/media/banner/15_Novfdd498b2d2f6442f6a5d7b2671b4fb0f.jpg" />
              </Col>
            </Row>
          </Col>
          <Col span={6} className="freeship">
            <Row className="content">
              <Col span={4} className="left">
                <TagOutlined />
              </Col>
              <Col span={20} className="right">
                <p>FREE SHIPPING</p>
                <p>For orders from 50%</p>
              </Col>
            </Row>
          </Col>
          <Col span={6} className="freeship">
            <Row className="content">
              <Col span={4} className="left">
                <TagOutlined />
              </Col>
              <Col span={20} className="right">
                <p>FREE SHIPPING</p>
                <p>For orders from 50%</p>
              </Col>
            </Row>
          </Col>
          <Col span={6} className="freeship">
            <Row className="content">
              <Col span={4} className="left">
                <TagOutlined />
              </Col>
              <Col span={20} className="right">
                <p>FREE SHIPPING</p>
                <p>For orders from 50%</p>
              </Col>
            </Row>
          </Col>
          <Col span={6} className="freeship">
            <Row className="content">
              <Col span={4} className="left">
                <TagOutlined />
              </Col>
              <Col span={20} className="right">
                <p>FREE SHIPPING</p>
                <p>For orders from 50%</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};
