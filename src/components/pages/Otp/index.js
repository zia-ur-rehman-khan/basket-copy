import { Input } from "antd";
import CommonButton from "components/common/Button";
import CommonHeading from "components/common/Heading";
import CommonInputField from "components/common/Input";
import CommonTextField from "components/common/TextField";
import { useRouter } from "next/router";
import React, { useState } from "react";
import OTPInput from "react-otp-input";

const OTP = () => {
  const [otp, setOtp] = useState("");

  const { push } = useRouter();

  const handelRoute = () => {
    push("/new-password");
  };

  return (
    <div className="main-forgotPassword">
      <div className="child-forgot">
        <CommonHeading heading={"Enter OTP"} />
        <CommonTextField
          text={
            "We've sent a one-time password to your phone number/email. Please enter the code below to verify your account."
          }
        />
        <div className="otp-parent">
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderInput={(props) => <Input {...props} />}
          />
        </div>
        <CommonButton child="Submit" onClick={handelRoute} height={"45px"} />
      </div>
    </div>
  );
};

export default OTP;
