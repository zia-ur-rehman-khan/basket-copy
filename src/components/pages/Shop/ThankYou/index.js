import Image from "next/image";
import Link from "next/link";
import React from "react";

import TempImage from "public/product/product1.png";
import CommonButton from "components/common/Button";
import Commonheading from "components/common/Heading";

const index = () => {
  return (
    <>
      <div className="product-side">
        <div className="thankyou_wrapper">
          <Image src={TempImage ?? TempImage} alt="Picture " />
          <Commonheading level={5} heading={"Order ID #31654646"} />
          <Commonheading level={3} heading={"Thanks For Shopping"} />

          <Commonheading
            level={5}
            heading={
              "Donec ac odio tempor orci dapibus. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Eu mi bibendum neque egestas congue quisque egestas diam."
            }
          />
          <Link href={`productDetail/1`}>
            <CommonButton
              child="Continue"
              classname="product-details"
              width={160}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default index;
