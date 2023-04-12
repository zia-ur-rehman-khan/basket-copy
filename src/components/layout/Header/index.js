import { Input } from "antd";
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

const { Search } = Input;

const Header = () => {
  const navList = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Shop" },
    { name: "Event" },
    { name: "Academy" },
    { name: "School" },
  ];
  const { push } = useRouter();

  const navRoute = (url) => {
    push(url);
  };

  return (
    <div className="header">
      <div style={{ width: "75%" }}>
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
      <Space size={35}>
        <Space>
          <Image src={profile} width={20} height={20} alt="logo" />
          <Image src={heart} width={20} height={20} alt="logo" />
          <Image src={cart} width={20} height={20} alt="logo" />
        </Space>
        <Space>
          <CommonButton type="default" child={"Enquire Now"} />
          <CommonButton child={"Sign Up"} />
        </Space>
      </Space>
    </div>
  );
};

export default Header;
