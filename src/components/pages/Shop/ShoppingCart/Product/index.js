import React from "react";
import { Row, Col, Space, Table, Tag } from "antd";
import Link from "next/link";
import { DeleteOutlined } from "@ant-design/icons";

import CommonButton from "components/common/Button";

import bin from "public/profile/bin.svg";
import cart from "public/product/cart.png";

import Commonheading from "components/common/Heading";
import { useRouter } from "next/router";
import CommonTextField from "components/common/TextField";
import Image from "next/image";

const { Column } = Table;

// Data
const data = [
  {
    id: 1,
    key: "1",
    productPicture: cart,
    productName: "Iball White Jersey",
    price: 20.0,
    quantity: "05",
    subtotal: "100.00",
  },
  {
    id: 2,
    key: "2",
    productPicture: cart,
    productName: "Iball White Jersey",
    price: 20.0,
    quantity: "05",
    subtotal: "100.00",
  },
  {
    id: 3,
    key: "3",
    productPicture: cart,
    productName: "Iball White Jersey",
    price: 20.0,
    quantity: "05",
    subtotal: "100.00",
  },
  {
    id: 4,
    key: "4",
    productPicture: cart,
    productName: "Iball White Jersey",
    price: 20.0,
    quantity: "05",
    subtotal: "100.00",
  },
  {
    id: 5,
    key: "5",
    productPicture: cart,
    productName: "Iball White Jersey",
    price: 20.0,
    quantity: "05",
    subtotal: "100.00",
  },
  {
    id: 6,
    key: "6",
    productPicture: cart,
    productName: "Iball White Jersey",
    price: 20.0,
    quantity: "05",
    subtotal: "100.00",
  },
];

const Index = () => {
  const { push } = useRouter();

  return (
    <Table
      pagination={false}
      dataSource={data}
      className="shop-cart-table whishlist-table order__table"
    >
      <Column
        title="Product Image"
        dataIndex="productPicture"
        key="key"
        render={(_, record) => (
          <Image src={record?.productPicture} alt="" width={55} height={55} />
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
        render={(_, record) => (
          <Space>
            <CommonButton
              child={"-"}
              background={"#454545"}
              border={"none"}
              height="22px"
              width="22px"
              padding="0px"
            />
            <CommonTextField text={"05"} />
            <CommonButton
              background={"#FF6600"}
              child={"+"}
              height="22px"
              width="22px"
              padding="0px"
            />
          </Space>
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
            <Image src={bin} alt="delete" width={13} height={15} />
          </button>
        )}
      />
    </Table>
  );
};

export default Index;
