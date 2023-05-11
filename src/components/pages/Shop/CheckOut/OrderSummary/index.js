import { Space } from "antd";
import { Input, Row, Col, Table } from "antd";
import CommonButton from "components/common/Button";
import Commonheading from "components/common/Heading";
import CommonTextField from "components/common/TextField";
import Image from "next/image";
import React from "react";
import cart from "public/product/cart.png";

// Data
const data = [
  {
    id: 1,
    key: "1",
    productPicture: cart,
    productName: "Iball White Jersey",
    price: 20.0,
    quantity: "05",
  },
  {
    id: 2,
    key: "2",
    productPicture: cart,
    productName: "Iball White Jersey",
    price: 20.0,
    quantity: "05",
  },
  {
    id: 3,
    key: "3",
    productPicture: cart,
    productName: "Iball White Jersey",
    price: 20.0,
    quantity: "05",
  },
];

const { Column } = Table;

const Index = () => {
  return (
    <>
      <Commonheading level={4} heading="Order Summary" className={" mb-2"} />
      <div className="d-flex">
        <Input placeholder="Enter Promo Code" />
        <CommonButton child="Apply" />
      </div>
      <div className="radius mt-3 p-3" style={{ background: "#1D1D1D" }}>
        <Row>
          <Col span={12}>
            <CommonTextField
              text="Products Details"
              fontWeight={600}
              fontSize={"15px"}
            />
          </Col>
          <Col
            span={12}
            className="d-flex flex-column align-content-end align-items-end"
          >
            {" "}
            <CommonButton
              child="Edit"
              classname={"bg-grey "}
              border={"none"}
              color={"#FF6600"}
            />
          </Col>
        </Row>
        <Table
          dataSource={data}
          showHeader={false}
          pagination={false}
          className="shop-cart-table whishlist-table order__table"
        >
          <Column
            title="Product Image"
            dataIndex="productPicture"
            key="key"
            render={(_, record) => (
              <Image
                src={record.productPicture}
                alt=" "
                width={55}
                height={55}
              />
            )}
          />
          <Column title="Product Name" dataIndex="productName" key="key" />
          <Column
            title="Quantity"
            dataIndex="quantity"
            key="key"
            render={(_, record) => <>Qty: {record.quantity}</>}
          />
          <Column
            title="price"
            dataIndex="price"
            key="key"
            render={(_, record) => <>£ {record.price}</>}
          />
        </Table>

        <Space className="mt-3 justify-content-between w-100">
          <Space direction="vertical">
            <CommonTextField text="Tax" />
            <CommonTextField text="Estimated Shipping Cost" />
            <CommonTextField text="Promo Applied" />
            <CommonTextField
              text="Order Total"
              fontWeight={600}
              fontSize={"16.5px"}
            />
          </Space>
          <Space direction="vertical">
            <CommonTextField text="£5.00" />
            <CommonTextField text="£20.00" />
            <CommonTextField text="-£10.00" />
            <CommonTextField
              text="£300.00"
              fontWeight={600}
              fontSize={"16.5px"}
            />
          </Space>
        </Space>
      </div>
    </>
  );
};

export default Index;
