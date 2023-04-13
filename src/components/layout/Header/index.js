import { Col, Input, Row } from "antd";
import { Space } from "antd";
import CommonButton from "components/common/Button";
import TextField from "components/common/TextField";
import Image from "next/image";
import React from "react";
import logo from "public/layout/image/logo.png";
import profile from "public/layout/svg/profile.svg";
import heart from "public/layout/svg/heart.svg";
import cart from "public/layout/svg/cart.svg";
import { useRouter } from "next/router";
import { Affix } from "antd";
import { AlignLeftOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import Link from "next/link";
import { Menu } from "antd";
import { List } from "antd";
import CommonTextField from "components/common/TextField";
import { Grid } from "antd";

const { Search } = Input;

const Header = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  const navList = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Shop" },
    { name: "Event", url: "/event" },
    { name: "Academy" },
    { name: "School" },
  ];
  const { push } = useRouter();

  const navRoute = (url) => {
    push(url);
  };

  const id = "";

  return (
    <>
      {/* <Affix offsetTop={0} style={{ zIndex: 16 }}> */}
      {screens.lg ? (
        <div className="header">
          <div className="left-side">
            <Space size={40}>
              <Image src={logo} width={104} height={79} alt="logo" />
              <Space size={26}>
                {navList.map((t, index) => (
                  <TextField
                    onClick={() => navRoute(t.url)}
                    key={index}
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
                    <CommonTextField text={item.name} />
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
