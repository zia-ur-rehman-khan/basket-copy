import React from "react";
import Register from "./Register";
import { useRouter } from "next/router";
import Payment from "./Payment";

const EventRegister = () => {
  const { query } = useRouter();

  const _render = () => {
    if (query.t === "payment") {
      return <Payment />;
    } else {
      return <Register />;
    }
  };

  return <div>{_render()}</div>;
};

export default EventRegister;
