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
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown } from "antd/lib";
import Link from "next/link";

const { Search } = Input;

const Header = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const { push, asPath, query } = useRouter();
  const { type } = query;

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

  const handelRoute = (t) => {
    push(t);
  };

  const items = [
    {
      key: "1",
      label: (
        <TextField
          className={`${type === "academy" ? "primary" : ""} header-text`}
          onClick={() => handelRoute("/event/academy")}
          text={"Academy/Club"}
        />
      ),
    },
    {
      key: "2",
      label: (
        <TextField
          className={`${type === "school" ? "primary" : ""} header-text`}
          onClick={() => handelRoute("/event/school")}
          text={"School"}
        />
      ),
    },
    {
      key: "3",
      label: (
        <TextField
          className={`${type === "birthday" ? "primary" : ""} header-text`}
          onClick={() => handelRoute("/event/birthday")}
          text={"Birthday"}
        />
      ),
    },
    {
      key: "4",
      label: (
        <TextField
          className={`${type === "community" ? "primary" : ""} header-text`}
          onClick={() => handelRoute("/event/community")}
          text={"Community"}
        />
      ),
    },
    {
      key: "5",
      label: (
        <TextField
          className={`${type === "community" ? "primary" : ""} header-text`}
          onClick={() => handelRoute("/event/camps")}
          text={"Camps"}
        />
      ),
    },
  ];

  return (
    <>
      <div className="header">
        <div className="left-side">
          <Space size={40}>
            <Image
              src={logo}
              width={104}
              height={79}
              alt="logo"
              className="c-pointer"
              onClick={() => handelRoute("/")}
            />
            <Space size={26}>
              {navList.map((t, index) => (
                <>
                  {t.name === "Event" ? (
                    <Dropdown
                      overlayClassName={"event-dropDown"}
                      menu={{
                        items,
                      }}
                    >
                      <Space>
                        <TextField
                          className={`${
                            isActive(t.url) ? "primary" : ""
                          } header-text`}
                          onClick={() => handelRoute(t.url)}
                          text={t.name}
                        />
                        <DownOutlined />
                      </Space>
                    </Dropdown>
                  ) : (
                    <TextField
                      className={`${
                        isActive(t.url) ? "primary" : ""
                      } header-text`}
                      onClick={() => handelRoute(t.url)}
                      text={t.name}
                    />
                  )}
                </>
              ))}
            </Space>
            <Search
              placeholder="search"
              // onSearch={onSearch}
              enterButton
            />
          </Space>
        </div>
        <div className="right-side">
          <Space size={35}>
            <Space>
              <Image
                src={profile}
                width={20}
                height={20}
                alt="logo"
                className="c-pointer"
                onClick={() => handelRoute("/user")}
              />
              <Image
                src={heart}
                width={20}
                height={20}
                alt="logo"
                className="c-pointer"
                onClick={() => handelRoute("/user/wishlist")}
              />
              <Image
                src={cart}
                width={20}
                height={20}
                alt="logo"
                className="c-pointer"
                onClick={() => handelRoute("/cart")}
              />
            </Space>
            <Space direction={screens.xl ? "horizontal" : "vertical"}>
              <CommonButton
                type="default"
                child={"Enquire Now"}
                onClick={() => handelRoute("/contact-us")}
              />
              <CommonButton
                child={"Sign Up"}
                onClick={() => handelRoute("/sign-up")}
              />
            </Space>
          </Space>
        </div>
      </div>

      <Space className="pb-3 pt-3 mobile">
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
