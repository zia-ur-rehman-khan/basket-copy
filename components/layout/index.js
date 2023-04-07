import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import logo from "public/layout/image/logo.png";
import { Button, Input, Space } from "antd";
import profile from "public/layout/svg/profile.svg";
import heart from "public/layout/svg/heart.svg";
import cart from "public/layout/svg/cart.svg";

import TextField from "components/common/textField";
import CommonButton from "components/common/button";
const { Search } = Input;

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div>
        <div style={{ display: "flex", padding: "0 43px" }}>
          <div style={{ width: "75%" }}>
            <Space size={40}>
              <Image src={logo} width={104} height={79} alt="logo" />
              <Space size={26}>
                <TextField name={"Home"} />
                <TextField name={"About"} />
                <TextField name={"Shop"} />
                <TextField name={"Event"} />
                <TextField name={"Academy"} />
                <TextField name={"School"} />
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
              <CommonButton
                background={"none"}
                border={"1px solid #FF6600"}
                child={"Enquire Now"}
                color="#FF6600"
              />
              <CommonButton background={"#FF6600"} child={"Sign Up"} />
            </Space>
          </Space>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
