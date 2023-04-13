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

const { Search } = Input;

const Header = () => {
  const [isMobile, setIsMobile] = React.useState(false);

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
    <>
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
      <Affix offsetTop={0} style={{ zIndex: 16 }}>
        <div className="top-header">
          <div className="header-wrapper">
            <AlignLeftOutlined
              className="side-nav-icon"
              onClick={() => setIsMobile(true)}
            />
            {/* <div className="logo">
             {IconLogo}
             &nbsp; &nbsp;
             {TextLogo}
           </div> */}
            {/* <Link href="/">
           <div className="logo">
             {IconLogo}
             &nbsp; &nbsp;
             {TextLogo}
           </div>
         </Link> */}
          </div>
        </div>
      </Affix>
      <Drawer
        title=""
        placement="left"
        onClose={() => setIsMobile(false)}
        visible={isMobile}
        width="75%"
        className="side-drawer"
      >
        <Menu
          theme="dark"
          // triggerSubMenuAction="click"
          mode="inline"
          // className={
          //   currentRoute.includes("services")
          //     ? "active-submenu submenu-container"
          //     : "submenu-container"
          // }
          defaultSelectedKeys={["SubMenu"]}
        >
          <Menu.SubMenu
            title="Services"
            popupClassName="submenu-popup-class"
            className="menu-container"
            // popupOffset={[0, 0]}
            key="SubMenu"
          >
            <Row gutter={[16, 16]}>
              <Col xs={24} lg={8}>
                <Link href="/services/botox-dermal-filler">
                  <a
                  // className={
                  //   id === "botox-dermal-filler" ? "active" : "non-active"
                  // }
                  >
                    <Image
                      src="/icons/dermal-filler.svg"
                      className="submenu-icon mobile-icon"
                      alt="icon"
                      preview={false}
                    />
                    Botox/Dermal Fillers
                  </a>
                </Link>
              </Col>
              <Col xs={24} lg={8}>
                <Link
                  href="/services/bioidentical-hormone-replacement-therapy"
                  className="submenu-link"
                >
                  <a
                  // className={
                  //   id?.includes("hormone-replacement")
                  //     ? "active"
                  //     : "non-active"
                  // }
                  >
                    <Image
                      src="/icons/hormonal-therapy.svg"
                      className="submenu-icon mobile-icon"
                      alt="icon"
                      preview={false}
                    />
                    Bioidentical Hormone Replacement Therapy
                  </a>
                </Link>
              </Col>
              <Col xs={24} lg={8}>
                <Link href="/services/peptide-therapy" className="submenu-link">
                  <a
                    className={
                      id?.includes("peptide") ? "active" : "non-active"
                    }
                  >
                    <Image
                      src="/icons/slim-body.svg"
                      className="submenu-icon mobile-icon"
                      alt="icon"
                      preview={false}
                    />
                    Peptide Therapy (Sermorelin/ Ipamorelin)
                  </a>
                </Link>
              </Col>
              <Col xs={24} lg={8}>
                <Link
                  href="/services/botox-dermal-filler-parties"
                  className="submenu-link"
                >
                  <a
                    className={
                      id === "botox-dermal-filler-parties"
                        ? "active"
                        : "non-active"
                    }
                  >
                    <Image
                      src="/icons/dermal-filler-parties.svg"
                      className="submenu-icon mobile-icon"
                      alt="icon"
                      preview={false}
                    />
                    Botox / Dermal Filler Parties
                  </a>
                </Link>
              </Col>
              <Col xs={24} lg={8}>
                <Link
                  href="/services/tesosterone-therapy"
                  className="submenu-link"
                >
                  <a
                    className={
                      id?.includes("tesosterone") ? "active" : "non-active"
                    }
                  >
                    <Image
                      src="/icons/hormonal-ring.svg"
                      className="submenu-icon mobile-icon"
                      alt="icon"
                      preview={false}
                    />
                    {/* {HormonalRingIcon} */}
                    Testosterone Therapy
                  </a>
                </Link>
              </Col>
              <Col xs={24} lg={8}>
                <Link
                  href="/services/micronutrient-testing"
                  className="submenu-link"
                >
                  <a
                    className={
                      id?.includes("micronutrient") ? "active" : "non-active"
                    }
                  >
                    <Image
                      src="/icons/flask.svg"
                      className="submenu-icon mobile-icon"
                      alt="icon"
                      preview={false}
                    />
                    {/* {FlaskIcon} */}
                    Mobile Labs/ Micronutrient Testing
                  </a>
                </Link>
              </Col>
              <Col xs={24} lg={8}>
                <Link href="/services/IV-therapy" className="submenu-link">
                  <a
                    className={
                      id?.includes("IV-therapy") ? "active" : "non-active"
                    }
                  >
                    <Image
                      src="/icons/iv-bag.svg"
                      className="submenu-icon mobile-icon"
                      alt="icon"
                      preview={false}
                    />
                    {/* {IVBagIcon} */}
                    IV therapy
                  </a>
                </Link>
              </Col>
              <Col xs={24} lg={8}>
                <Link
                  href="/services/medical-weight-loss"
                  className="submenu-link"
                >
                  <a
                    className={
                      id?.includes("medical-weight-loss")
                        ? "active"
                        : "non-active"
                    }
                  >
                    <Image
                      src="/icons/diet.svg"
                      className="submenu-icon mobile-icon"
                      alt="icon"
                      preview={false}
                    />
                    {/* {DietIcon} */}
                    Medical Weight Loss
                  </a>
                </Link>
              </Col>
              <Col xs={24} lg={8}>
                <Link href="/services/xeo" className="submenu-link">
                  <a className={id?.includes("xeo") ? "active" : "non-active"}>
                    <Image
                      src="/icons/xeo-icon.svg"
                      className="submenu-icon mobile-icon"
                      alt="icon"
                      preview={false}
                    />
                    {/* {DietIcon} */}
                    XEO
                  </a>
                </Link>
              </Col>
              <Col xs={24} lg={8}>
                <Link href="/services/secret-RF" className="submenu-link">
                  <a
                    className={
                      id?.includes("secret-RF") ? "active" : "non-active"
                    }
                  >
                    <Image
                      src="/icons/secretRf-icon.svg"
                      className="submenu-icon mobile-icon"
                      alt="icon"
                      preview={false}
                    />
                    {/* {DietIcon} */}
                    SecretRf
                  </a>
                </Link>
              </Col>
            </Row>
          </Menu.SubMenu>
        </Menu>
      </Drawer>
    </>
  );
};

export default Header;
