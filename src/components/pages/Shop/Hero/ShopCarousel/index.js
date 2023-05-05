import React from "react";

import Commonheading from "components/common/Heading";
import productBanner from "public/product/productBanner.png";

import Image from "next/image";

const Index = ({ slideData }) => {
  const { id, content } = slideData;
  return (
    <>
      <div>
        <div className="slide">
          <Image src={productBanner} alt="" style={{ borderRadius: "10px" }} />
          <div className="slide_content">
            <Commonheading
              fontSize={"48px"}
              heading={content ?? content}
              className="slide_heading"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
