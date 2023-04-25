import React from "react";
import Register from "./Register";
import { useRouter } from "next/router";
import Payment from "./Payment";
import CommonHeading from "components/common/Heading";
import Thanks from "./Thanks";

const EventRegister = () => {
  const { query } = useRouter();

  const _render = () => {
    if (query.t === "payment") {
      return <Payment />;
    } else if (query.t === "thanks") {
      return <Thanks />;
    } else {
      return <Register />;
    }
  };

  return <div className="register-main">{_render()}</div>;
};

export default EventRegister;
