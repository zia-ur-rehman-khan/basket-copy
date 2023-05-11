import { Input, Row, Col, Table, Image } from "antd";
import CommonButton from "components/common/Button";
import Commonheading from "components/common/Heading";
import React from "react";

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
  },
  {
    id: 2,
    key: "2",
    productPicture:
      "https://image.spreadshirtmedia.com/content/q_auto,f_auto,w_210/CMS/SSP/product_image_shirt_kids.png",
    productName: "Iball White Jersey",
    price: 20.0,
    quantity: "05",
  },
  {
    id: 3,
    key: "3",
    productPicture:
      "https://image.spreadshirtmedia.com/content/q_auto,f_auto,w_210/CMS/SSP/product_image_shirt_kids.png",
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
            <Commonheading
              level={5}
              heading="Products Details"
              className={"mb-4"}
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
          className="dashboard__table whishlist-table order__table"
          showHeader={false}
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

        <div className="mt-3">
          <Row>
            <Col
              span={12}
              className="d-flex flex-column align-content-start align-items-start"
            >
              <Commonheading level={5} heading="Tax" />
              <Commonheading level={5} heading="Estimated Shipping Cost" />
              <Commonheading level={5} heading="Promo Applied" />
              <Commonheading level={4} heading="Order Total" />
            </Col>
            <Col
              span={12}
              className="d-flex flex-column align-content-end align-items-end"
            >
              <Commonheading level={5} heading="£5.00" />
              <Commonheading level={5} heading="£20.00" />
              <Commonheading level={5} heading="-£10.00" />
              <Commonheading level={5} heading="£300.00" />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Index;
