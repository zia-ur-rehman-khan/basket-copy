import React from "react";
import CommonBanner from "components/common/Banner";
import ImageContent from "components/common/ImageWithContent";
import Product from "./Product";
import CommonTextField from "components/common/TextField";
import Commonheading from "components/common/Heading";
import Image from "next/image";
import { Space } from "antd";
import WithUS from "./WithUs";

const Home = () => {
  return (
    <>
      <CommonBanner />
      <ImageContent />
      <Product />
      <WithUS />
    </>
  );
};

export default Home;
