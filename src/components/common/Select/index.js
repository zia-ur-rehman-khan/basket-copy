/* eslint-disable react/prop-types */
import React from "react";
import { Input } from "antd";
import { Select } from "antd";

const CommonSelect = ({
  name,
  className,
  type,
  onChange,
  onBlur,
  value,
  errors,
  touch,
  height,
  options,
  width,
  defaultValue,
}) => {
  return (
    <div className="select-parent">
      <Select
        defaultValue={defaultValue}
        options={options}
        width={width}
        style={{ height }}
        type={type}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {errors && touch && (
        <p
          style={{
            color: "red",
            fontSize: "13px",
            marginBottom: "0",
          }}
        >
          {errors[name]}
        </p>
      )}
    </div>
  );
};

export default CommonSelect;
