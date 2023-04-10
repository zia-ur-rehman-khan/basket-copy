/* eslint-disable react/prop-types */
import { Button } from "antd";
import React from "react";

const CommonButton = ({
  child,
  classname,
  topClass,
  width,
  height,
  background,
  borderRadius = "6px",
  border,
  color = "#ffffff",
  onClick,
  htmlType,
  disabled,
  type,
}) => {
  return (
    <div className={topClass}>
      <Button
        type={type}
        style={{
          width,
          height,
          background,
          borderRadius,
          color,
          border,
        }}
        className={classname}
        onClick={onClick}
        htmlType={htmlType}
        disabled={disabled}
      >
        {child}
      </Button>
    </div>
  );
};

export default CommonButton;
