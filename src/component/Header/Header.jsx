import { Button, Col, Input, Row } from "antd";
import {
  AlignLeftOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import SearchIcon from "@mui/icons-material/Search";
import "../../style/Header.scss";
const selectBefore = (
  <div>
    <AlignLeftOutlined />
    Categories
  </div>
);
export const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="contact-bar">
          <ul className="links">
            <li>
              <a href="#" className="link">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Contacts
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Store
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Track Orders
              </a>
            </li>
          </ul>
        </nav>
        <nav className="navigation-bar">
          <Row className="element" justify="start">
            <Col span={3}>
              <h1>
                <a href="#" className="link">
                  Shop App
                </a>
              </h1>
            </Col>
            <Col span={18} className="search-input">
              <Input
                addonBefore={selectBefore}
                addonAfter={<SearchIcon />}
                defaultValue="Search Item"
                className="search"
              />
            </Col>
            <Col span={3} className="button-group">
              <Button icon={<ShoppingCartOutlined className="button" />} />
              <Button icon={<UserOutlined className="button" />} />
            </Col>
          </Row>
        </nav>
      </header>
    </>
  );
};
