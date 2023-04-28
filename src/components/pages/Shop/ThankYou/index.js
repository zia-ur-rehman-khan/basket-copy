import Image from "next/image";
import Link from "next/link";
import React from "react";

import TempImage from "public/product/product1.png";
import CommonButton from "components/common/Button";
import Commonheading from "components/common/Heading";
import CommonTextField from "components/common/TextField";
import tempImage from "public/event/event1.png";

const Index = () => {
  return (
    <>
      <div className="bg-grey p-5 radius d-flex flex-column align-items-center thankyou_wrapper">
        <Image src={tempImage ?? tempImage} alt="Thank You" priority={true} />

        <CommonTextField
          className={"mt-3"}
          text="Order ID #31654646"
          letterSpacing={"3px"}
          fontSize={"20px"}
        />

        <Commonheading
          className={"mb-3"}
          level={2}
          heading={`Thanks For Shopping`}
        />
        <CommonTextField
          textAlign={"center"}
          text="Donec ac odio tempor orci dapibus. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Eu mi bibendum neque egestas congue quisque egestas diam."
        />
        <div style={{ width: "50%" }}>
          <CommonButton
            classname={"mt-3"}
            child={"Continue"}
            width={"100%"}
            height={"50px"}
          />
        </div>
      </div>
    </>
  );
};

export default Index;
