import React from "react";
import { Row, Col, Space, Table, Tag, Column, Image } from "antd";
import Link from "next/link";
import { DeleteOutlined } from "@ant-design/icons";

import CommonButton from "components/common/Button";
import Commonheading from "components/common/Heading";

// import "https://image.spreadshirtmedia.com/content/q_auto,f_auto,w_210/CMS/SSP/product_image_shirt_kids.png" from "public/product/product1.png";

// Data
const data = [
  {
    id: 1,
    key: "1",
    productPicture:
      "https://image.spreadshirtmedia.com/content/q_auto,f_auto,w_210/CMS/SSP/product_image_shirt_kids.png",
    productName: "Iball White Jersey",
    price: 20.0,
    quantity: "05",
    subtotal: "100.00",
  },
  {
    id: 2,
    key: "2",
    productPicture:
      "https://image.spreadshirtmedia.com/content/q_auto,f_auto,w_210/CMS/SSP/product_image_shirt_kids.png",
    productName: "Iball White Jersey",
    price: 20.0,
    quantity: "05",
    subtotal: "100.00",
  },
  {
    id: 3,
    key: "3",
    productPicture:
      "https://image.spreadshirtmedia.com/content/q_auto,f_auto,w_210/CMS/SSP/product_image_shirt_kids.png",
    productName: "Iball White Jersey",
    price: 20.0,
    quantity: "05",
    subtotal: "100.00",
  },
  {
    id: 4,
    key: "4",
    productPicture:
      "https://image.spreadshirtmedia.com/content/q_auto,f_auto,w_210/CMS/SSP/product_image_shirt_kids.png",
    productName: "Iball White Jersey",
    price: 20.0,
    quantity: "05",
    subtotal: "100.00",
  },
  {
    id: 5,
    key: "5",
    productPicture:
      "https://image.spreadshirtmedia.com/content/q_auto,f_auto,w_210/CMS/SSP/product_image_shirt_kids.png",
    productName: "Iball White Jersey",
    price: 20.0,
    quantity: "05",
    subtotal: "100.00",
  },
  {
    id: 6,
    key: "6",
    productPicture:
      "https://image.spreadshirtmedia.com/content/q_auto,f_auto,w_210/CMS/SSP/product_image_shirt_kids.png",
    productName: "Iball White Jersey",
    price: 20.0,
    quantity: "05",
    subtotal: "100.00",
  },
];

const Index = () => {
  return (
    <>
      <div className="review_form p-5" style={{ width: "80%", margin: "auto" }}>
        <Commonheading
          level={2}
          heading={"Shopping Cart"}
          className={" d-flex flex-column align-items-center mb-4"}
        />

        <Table
          dataSource={data}
          className="dashboard__table whishlist-table order__table"
        >
          <Column
            title="Product Image"
            dataIndex="productPicture"
            key="key"
            render={(_, record) => (
              <Image
                src={record.productPicture}
                alt=" "
                width={74}
                height={74}
              />
            )}
          />
          <Column title="Product Name" dataIndex="productName" key="key" />
          <Column
            title="Price"
            dataIndex="price"
            key="key"
            render={(_, record) => <>£ {record.price}</>}
          />
          <Column
            title="Quantity"
            dataIndex="quantity"
            key="key"
            // render={(_, record) => <> {record.quantity}</>}
            render={(_, record) => (
              <>
                <div className="d-flex">
                  <CommonButton
                    child={"-"}
                    background={" #454545"}
                    classname={"m-3 mb-0 mt-0"}
                  />
                  {record?.quantity}
                  <CommonButton
                    child={"+"}
                    background={" #FF6600"}
                    classname={"m-3 mb-0 mt-0"}
                  />
                </div>
              </>
            )}
          />
          <Column
            title="Subtotal"
            dataIndex="subtotal"
            key="key"
            render={(_, record) => <>£ {record.subtotal}</>}
          />
          <Column
            title="Remove"
            dataIndex="remove"
            key="key"
            render={(_, record) => (
              <button onClick={() => removeItem(record.id)}>
                {/* <Image src={bin} /> */}
                <DeleteOutlined />
              </button>
            )}
          />
        </Table>
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
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Index;
