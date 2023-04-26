import { Col, Row } from "antd";
import CommonButton from "components/common/Button";
import Commonheading from "components/common/Heading";

import BlogCard from "./BlogCard";
import React from "react";
import { useRouter } from "next/router";

const Blog = ({ array, noMore }) => {
  const { push } = useRouter();

  const handelRoute = () => {
    push("/blog");
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mt-5">
        <Commonheading level={2} heading={"Read Our Blogs"} />
        {!noMore && <CommonButton child="View More" onClick={handelRoute} />}
      </div>
      <Row gutter={[33, 33]} justify={"center"} className="mt-5 card-parent">
        {array.map((_t, key) => (
          <Col
            key={key}
            xxl={{ span: 6 }}
            xl={{ span: 6 }}
            lg={{ span: 8 }}
            md={{ span: 12 }}
            sm={{ span: 16 }}
          >
            <BlogCard src={_t} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Blog;
