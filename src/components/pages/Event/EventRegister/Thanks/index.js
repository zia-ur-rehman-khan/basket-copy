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
  const { push, query } = useRouter();
  const { m } = query;

  const handelRoute = () => {
    if (m) {
      push("/about");
    } else {
      push("/event");
    }
  };

  return (
    <div className="bg-grey common-padding radius d-flex flex-column align-items-center">
      <Image src={thanksImage} alt="Thank You" priority={true} />
      <CommonHeading
        className={"mb-3"}
        level={2}
        heading={`Thanks For ${
          m === "member" ? "Buying Membership" : "Registering"
        }`}
      />
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
