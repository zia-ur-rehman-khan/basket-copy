import React from "react";

import { Col, Row } from "antd";

import Review from "./Review";
import Commonheading from "components/common/Heading";
import CommonButton from "components/common/Button";

const Index = () => {
  const reviews = [
    {
      id: 1,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      authorProfileUrl: "#",
      authorName: "Andy Smith",
    },
    {
      id: 2,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      authorProfileUrl: "#",
      authorName: "Andy Smith",
    },
    {
      id: 3,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      authorProfileUrl: "#",
      authorName: "Andy Smith",
    },
    {
      id: 4,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      authorProfileUrl: "#",
      authorName: "Andy Smith",
    },
    {
      id: 5,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      authorProfileUrl: "#",
      authorName: "Andy Smith",
    },
    {
      id: 6,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      authorProfileUrl: "#",
      authorName: "Andy Smith",
    },
    {
      id: 7,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      authorProfileUrl: "#",
      authorName: "Andy Smith",
    },
    {
      id: 8,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      authorProfileUrl: "#",
      authorName: "Andy Smith",
    },
    {
      id: 9,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      authorProfileUrl: "#",
      authorName: "Andy Smith",
    },
    {
      id: 10,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      authorProfileUrl: "#",
      authorName: "Andy Smith",
    },
    {
      id: 11,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      authorProfileUrl: "#",
      authorName: "Andy Smith",
    },
    {
      id: 12,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      authorProfileUrl: "#",
      authorName: "Andy Smith",
    },
  ];
  return (
    <>
      <div className="product-side">
        <div className="d-flex justify-content-between align-items-center mt-4">
          <Commonheading level={2} heading={"Reviews"} />
          <CommonButton
            child="Give Review"
          />
        </div>
        <Row gutter={[33, 33]} className="mt-5 card-parent" wrap={false}>
          {reviews?.map((_t, key) => (
            <Col
              key={key}
              xxl={{ span: 6 }}
              xl={{ span: 6 }}
              lg={{ span: 10 }}
              md={{ span: 11 }}
              sm={{ span: 15 }}
            >
              <Review productData={_t} key={key} />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Index;
