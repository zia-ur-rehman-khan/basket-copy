import React from "react";
import { Row, Col, Space, Table } from "antd";
import refresh from "public/product/refresh.svg";

import CommonButton from "components/common/Button";
import Commonheading from "components/common/Heading";
import { useRouter } from "next/router";

import ProductsTable from "./Product";
import CommonTextField from "components/common/TextField";
import Image from "next/image";

const Index = () => {
  const { push } = useRouter();
  const handelRoute = () => {
    push("/checkout");
  };

  return (
    <>
      <div className="shopping-cart-main">
        <Commonheading
          level={1}
          heading={"Shopping Cart"}
          className={" d-flex flex-column align-items-center mb-4"}
        />

        <ProductsTable />
        <Row gutter={[40, 20]} className="mt-3 mb-5">
          <Col
            xxl={{ span: 12 }}
            xl={{ span: 12 }}
            lg={{ span: 12 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
          >
            <Space className="w-100 justify-content-between h-100 align-items-end">
              <Space direction="vertical">
                <CommonTextField text={"Tax"} />
                <CommonTextField
                  text={"Grand Total"}
                  fontWeight={600}
                  fontSize={"16.5px"}
                />
              </Space>
              <Space direction="vertical" className="align-items-end">
                <CommonTextField text={"£5.00"} />
                <CommonTextField
                  text={"£300.00"}
                  fontWeight={600}
                  fontSize={"16.5px"}
                />
              </Space>
            </Space>
          </Col>
          <Col
            xxl={{ span: 12 }}
            xl={{ span: 12 }}
            lg={{ span: 12 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
          >
            <Row gutter={[10, 10]}>
              <Col
                span={8}
                className="d-flex justify-content-center align-items-center"
              >
                <div className="d-flex" style={{ gap: "10px" }}>
                  <Image src={refresh} alt="" width={15} height={15} />
                  <CommonTextField text={"Refresh Cart"} />
                </div>
              </Col>

              <Col span={8}>
                <CommonButton
                  child="Continue Shopping"
                  background={"#8F8F8F"}
                  color={"#FFFFF"}
                  border={"none"}
                />
              </Col>
              <Col span={8}>
                <CommonButton
                  color="var(--primary-color)"
                  child="Clear Cart"
                  background={"#1D1D1D"}
                />
              </Col>
            </Row>
            <CommonButton
              child="Proceed to checkout"
              classname={"mt-3"}
              onClick={handelRoute}
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Index;
