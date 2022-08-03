import React from "react";
import { PrimaryButton } from "./Common/Button";
import { HeaderContainer, HeaderMobileRight, HeaderRight, HeaderTitle } from "./style";
import { MenuOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import "antd/dist/antd.css";

const menu = (
  <Menu
    items={[
      {
        label: <PrimaryButton title="Login" onClick={() => {}} outlined />,
        key: "0",
      },
      {
        type: "divider",
      },
      {
        label: <PrimaryButton title="Register" onClick={() => {}} />,
        key: "2",
      },
    ]}
  />
);

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>Logo</HeaderTitle>
      <HeaderRight>
        <PrimaryButton title="Login" onClick={() => {}} outlined />
        <PrimaryButton title="Register" onClick={() => {}} />
      </HeaderRight>
      <HeaderMobileRight>
        <Dropdown overlay={menu} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <MenuOutlined />
            </Space>
          </a>
        </Dropdown>
      </HeaderMobileRight>
    </HeaderContainer>
  );
};

export default Header;
