import React from "react";
import { Row, Col, Space, Table, Tag, Image } from "antd";
import Link from "next/link";
import { DeleteOutlined } from "@ant-design/icons";

import CommonButton from "components/common/Button";
import Commonheading from "components/common/Heading";
import { useRouter } from "next/router";

import ProductsTable from "./Product";

const Index = () => {
  const { push } = useRouter();
  const handelRoute = () => {
    push("/checkout");
  };
  return (
    <>
      <div className="review_form p-5" style={{ width: "80%", margin: "auto" }}>
        <Commonheading
          level={2}
          heading={"Shopping Cart"}
          className={" d-flex flex-column align-items-center mb-4"}
        />

        <ProductsTable />

        <Row>
          <Col span={16}></Col>
          <Col span={8}>
            <Row gutter={[10, 10]}>
              <Col>
                <CommonButton
                  child="Refresh Cart"
                  background={"#1D1D1D"}
                  color={"#FFFFF"}
                  border={"none"}
                  icon={<DeleteOutlined />}
                />
              </Col>
              <Col>
                <CommonButton
                  child="Continue Shopping"
                  background={"#8F8F8F"}
                  color={"#FFFFF"}
                  border={"none"}
                />
              </Col>
              <Col>
                <CommonButton
                  child="Clear Cart"
                  background={"#1D1D1D"}
                  color={"#FFFFF"}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row gutter={[20, 20]}>
          <Col span={8}>
            <Commonheading level={5} heading={"Tax"} />
            <Commonheading level={4} heading={"Grand Total"} />
          </Col>
          <Col
            span={8}
            className="d-flex flex-direction-column align-content-end align-items-end"
          >
            <Commonheading level={5} heading={"£5.00"} />
            <Commonheading level={4} heading={"£300.00"} />
          </Col>
          <Col span={8}>
            {" "}
            <CommonButton
              child="Proceed to checkout"
              width={"100%"}
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
