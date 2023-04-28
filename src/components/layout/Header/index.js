import { AlignLeftOutlined } from "@ant-design/icons";
import { Drawer, Grid, Input, List, Space } from "antd";
import CommonButton from "components/common/Button";
import {
  default as CommonTextField,
  default as TextField,
} from "components/common/TextField";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "public/layout/image/logo.png";
import cart from "public/layout/svg/cart.svg";
import heart from "public/layout/svg/heart.svg";
import profile from "public/layout/svg/profile.svg";
import React from "react";

const { Search } = Input;

const Header = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const { push, asPath } = useRouter();

  const isActive = (href) => {
    return asPath === href || asPath.startsWith(`${href}/`);
  };

  const navList = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Shop", url: "/shop" },
    { name: "Event", url: "/event" },
    { name: "Academy", url: "/academy" },
    { name: "School", url: "/school" },
  ];

  const navRoute = (url) => {
    push(url);
  };

  return (
    <>
      {screens.lg ? (
        <div className="header">
          <div className="left-side">
            <Space size={40}>
              <Image src={logo} width={104} height={79} alt="logo" />
              <Space size={26}>
                {navList.map((t, Index) => (
                  <TextField
                    className={`${
                      isActive(t.url) ? "primary" : ""
                    } header-text`}
                    onClick={() => navRoute(t.url)}
                    key={Index}
                    text={t.name}
                  />
                ))}
              </Space>
              <Search
                placeholder="input search text"
                // onSearch={onSearch}
                enterButton
              />
            </Space>
          </div>
          <div className="right-side">
            <Space size={35}>
              <Space>
                <Image src={profile} width={20} height={20} alt="logo" />
                <Image src={heart} width={20} height={20} alt="logo" />
                <Image src={cart} width={20} height={20} alt="logo" />
              </Space>
              <Space direction={screens.xl ? "horizontal" : "vertical"}>
                <CommonButton type="default" child={"Enquire Now"} />
                <CommonButton child={"Sign Up"} />
              </Space>
            </Space>
          </div>
        </div>
      ) : (
        <Space className="pb-3 pt-3">
          <AlignLeftOutlined
            className="side-nav-icon"
            onClick={() => setIsMobile(true)}
          />
          <Search
            placeholder="input search text"
            // onSearch={onSearch}
            enterButton
          />
        </Space>
      )}
      <Drawer
        title={<Image src={logo} width={104} height={79} alt="logo" />}
        placement="left"
        onClose={() => setIsMobile(false)}
        open={isMobile}
        width="50%"
        className="side-drawer"
      >
        <List
          dataSource={navList}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={
                  <a href={item.url}>
                    <CommonTextField
                      className={isActive(item.url) ? "primary" : ""}
                      text={item.name}
                    />
                  </a>
                }
              />
            </List.Item>
          )}
        />
        <Space className="mt-3" size={[30, 10]} wrap>
          <Space>
            <Image src={profile} width={20} height={20} alt="logo" />
            <Image src={heart} width={20} height={20} alt="logo" />
            <Image src={cart} width={20} height={20} alt="logo" />
          </Space>
          <Space wrap>
            <CommonButton type="default" child={"Enquire Now"} />
            <CommonButton child={"Sign Up"} />
          </Space>
        </Space>
      </Drawer>
    </>
  );
};

export default Header;
