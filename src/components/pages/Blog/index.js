import React from "react";
import blog1 from "public/blog/blog1.png";
import blog2 from "public/blog/blog2.png";
import blog3 from "public/blog/blog3.png";
import blog4 from "public/blog/blog4.png";
import blog5 from "public/blog/blog5.png";
import blog6 from "public/blog/blog6.png";
import blog7 from "public/blog/blog7.png";
import banner from "public/school/detailBanner.png";

import Blog from "../Home/Blog";
import CommonBanner from "components/common/Banner";

const Blogs = () => {
  const array = [
    blog1,
    blog7,
    blog5,
    blog2,
    blog6,
    blog3,
    blog4,
    blog1,
    blog2,
    blog6,
    blog5,
    blog3,
  ];

  return (
    <>
      <CommonBanner src={banner} heading={"Blogs"} />
      <div className="common-padding">
        <Blog array={array} noMore />
      </div>
    </>
  );
};

export default Blogs;
