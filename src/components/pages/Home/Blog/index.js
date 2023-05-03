import { Col, Row } from "antd";
import CommonButton from "components/common/Button";
import Commonheading from "components/common/Heading";

import BlogCard from "./BlogCard";
import React from "react";
import { useRouter } from "next/router";
import CommonDraggableCarousal from "components/common/DraggableCarousal";

const Blog = ({ array, noMore }) => {
  const { push } = useRouter();

  const handelRoute = () => {
    push("/blog");
  };

  return (
    <div className="blog-main-card">
      <div className="d-flex justify-content-between align-items-center ">
        <Commonheading level={2} heading={"Read Our Blogs"} />
        {!noMore && <CommonButton child="View More" onClick={handelRoute} />}
      </div>

      <CommonDraggableCarousal>
        {array.map((_t, key) => (
          <BlogCard src={_t} key={key} />
        ))}
      </CommonDraggableCarousal>
    </div>
  );
};

export default Blog;
