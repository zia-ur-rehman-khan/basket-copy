import React from "react";
import { Row, Col, Space, Table, Tag } from "antd";
import CommonButton from "components/common/Button";
import Commonheading from "components/common/Heading";

const columns = [
  {
    title: "Product Image",
    dataIndex: "ProductImage",
    key: "ProductImage",
  },
  {
    title: "Product Name",
    dataIndex: "ProductName",
    key: "ProductName",
  },
  {
    title: "Price",
    dataIndex: "Price",
    key: "Price",
  },
  {
    title: "Quantity",
    dataIndex: "Quantity",
    key: "Quantity",
  },
  {
    title: "Subtotal",
    dataIndex: "Subtotal",
    key: "Subtotal",
  },
  {
    title: "Remove Item",
    dataIndex: "RemoveItem",
    key: "RemoveItem",
  },
];

const data = [
  {
    key: "1",
    ProductImage: "Product Image",
    ProductName: "Iball White Jersey",
    Price: "£20.00",
    Quantity: "2",
    Subtotal: "£100.00",
    RemoveItem: "❌",
  },
  {
    key: "2",
    ProductImage: "Product Image",
    ProductName: "Iball White Jersey",
    Price: "£20.00",
    Quantity: "2",
    Subtotal: "£100.00",
    RemoveItem: "❌",
  },
  {
    key: "3",
    ProductImage: "Product Image",
    ProductName: "Iball White Jersey",
    Price: "£20.00",
    Quantity: "2",
    Subtotal: "£100.00",
    RemoveItem: "❌",
  },
  {
    key: "4",
    ProductImage: "Product Image",
    ProductName: "Iball White Jersey",
    Price: "£20.00",
    Quantity: "2",
    Subtotal: "£100.00",
    RemoveItem: "❌",
  },
  {
    key: "5",
    ProductImage: "Product Image",
    ProductName: "Iball White Jersey",
    Price: "£20.00",
    Quantity: "2",
    Subtotal: "£100.00",
    RemoveItem: "❌",
  },
  {
    key: "6",
    ProductImage: "Product Image",
    ProductName: "Iball White Jersey",
    Price: "£20.00",
    Quantity: "2",
    Subtotal: "£100.00",
    RemoveItem: "❌",
  },
  {
    key: "7",
    ProductImage: "Product Image",
    ProductName: "Iball White Jersey",
    Price: "£20.00",
    Quantity: "2",
    Subtotal: "£100.00",
    RemoveItem: "❌",
  },
];

const index = () => {
  return (
    <>
      <div className="product-side">
        <div className="d-flex justify-content-between align-items-center mt-5">
          <Commonheading level={2} heading={"Shopping Cart"} />
          {/* <CommonButton child="View More" /> */}
        </div>
        <div className="cart_wrapper">
          <Table columns={columns} dataSource={data} pagination={false} />
          <Row>
            <Col span={16}></Col>
            <Col span={8}>
              <Row>
                <Col>
                  <CommonButton
                    child="Refresh Cart"
                    classname="product-price"
                    // topClass="load-products"
                  />
                </Col>
                <Col>
                  <CommonButton
                    child="Refresh Cart"
                    classname="product-price"
                    // topClass="load-products"
                  />
                </Col>
                <Col>
                  <CommonButton
                    child="Refresh Cart"
                    classname="product-price"
                    // topClass="load-products"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <Commonheading level={5} heading={"Tax"} />
              <Commonheading level={4} heading={"Grand Total"} />
            </Col>
            <Col span={8}>
              <Commonheading level={5} heading={"£5.00"} />
              <Commonheading level={4} heading={"£300.00"} />
            </Col>
            <Col span={8}>
              {" "}
              <CommonButton
                child="Proceed to checkout"
                classname="product-price"
                // topClass="load-products"
              />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default index;
