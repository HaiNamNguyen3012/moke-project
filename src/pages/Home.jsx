import Layout from "antd/es/layout/layout";

import "../style/Home.scss";
import { Header } from "../component/Header/Header";
import { Col, Flex, Image, Menu, Rate, Row } from "antd";
import React, { useEffect, useState } from "react";
import {
  AlignLeftOutlined,
  RightOutlined,
  TagOutlined,
} from "@ant-design/icons";
import { getAllCategoriesList, getAllProducts } from "../service/HomeService";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const [modalRegisterOpen, setModalRegisterOpen] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getAllProducts(setProducts, setIsLoading);
    getAllCategoriesList(setCategories);
  }, []);

  const categoryList = categories.map((category) => {
    return {
      key: `sub ${category.id}`,
      label: category.name,
      icon: React.createElement(RightOutlined),
    };
  });
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
              items={categoryList}
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
          <div className="product-list">
            {isLoading && <div>Loading...</div>}
            {!isLoading && products.length === 0 && <p>No products found.</p>}
            {!isLoading &&
              products.length > 0 &&
              products.map((product) => (
                <div className="product">
                  <div className="content">
                    <img src={product.image}></img>
                    <h1>{product.name}</h1>
                    <p id="id">ID: {product.id}</p>
                    <Rate value={product.rate} />
                    <p id="price">${product.price}</p>
                  </div>
                </div>
              ))}
          </div>
        </Row>
      </div>
    </Layout>
  );
};
