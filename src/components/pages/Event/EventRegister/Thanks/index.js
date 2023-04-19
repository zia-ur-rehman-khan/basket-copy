import Image from "next/image";
import React from "react";
import thanksImage from "public/event/thanks.png";
import CommonHeading from "components/common/Heading";
import CommonInputField from "components/common/Input";
import CommonButton from "components/common/Button";
import CommonTextField from "components/common/TextField";
import { Space } from "antd";
import { useRouter } from "next/router";
const Thanks = () => {
  const { push } = useRouter();

  const handelRoute = () => {
    push("/event");
  };

  return (
    <div className="bg-grey common-padding radius d-flex flex-column align-items-center">
      <Image src={thanksImage} alt="Thank You" priority={true} />
      <CommonHeading heading={"Thanks For Registering"} />
      <CommonTextField
        textAlign={"center"}
        text="Donec ac odio tempor orci dapibus. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Eu mi bibendum neque egestas congue quisque egestas diam."
      />
      <div style={{ width: "50%" }}>
        <CommonButton
          classname={"mt-3"}
          child={"Continue"}
          onClick={handelRoute}
        />
      </div>
    </div>
  );
};

export default Thanks;
