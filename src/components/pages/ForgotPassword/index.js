import CommonButton from "components/common/Button";
import CommonHeading from "components/common/Heading";
import CommonInputField from "components/common/Input";
import CommonTextField from "components/common/TextField";
import { useRouter } from "next/router";
import React, { useState } from "react";
import OTPInput from "react-otp-input";

const ForgotPassword = () => {
  const { push } = useRouter();

  const handelRoute = () => {
    push("/otp");
  };

  return (
    <div className="main-forgotPassword">
      <div className="child-forgot">
        <CommonHeading heading={"Forgot Password"} />
        <CommonTextField
          text={
            "Enter the email address associated with your account and we will send you a password reset link."
          }
        />
        <CommonInputField placeholder="Email" />
        <CommonButton child="Submit" onClick={handelRoute} height={"45px"} />
      </div>
    </div>
  );
};

export default ForgotPassword;
