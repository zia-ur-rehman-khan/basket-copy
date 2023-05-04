import CommonButton from "components/common/Button";
import CommonHeading from "components/common/Heading";
import CommonInputField from "components/common/Input";
import CommonTextField from "components/common/TextField";
import { useRouter } from "next/router";
import React, { useState } from "react";

const NewPassword = () => {
  const { push } = useRouter();

  const handelRoute = () => {
    push("/");
  };

  return (
    <div className="main-forgotPassword">
      <div className="child-forgot">
        <CommonHeading heading={"Create New Password"} fontSize={"45px"} />
        <CommonTextField
          text={
            "Please enter a new password that is at least 8 characters long, including a combination of letters and numbers."
          }
        />
        <CommonInputField placeholder="Password" />
        <CommonInputField placeholder="Confirm Password" />
        <CommonButton child="Submit" onClick={handelRoute} height={"45px"} />
      </div>
    </div>
  );
};

export default NewPassword;
