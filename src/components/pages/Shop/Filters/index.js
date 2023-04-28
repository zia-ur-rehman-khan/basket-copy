import React from "react";

import { Select } from "antd";
const handleChange = (value) => {
  console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
};

import CommonButton from "components/common/Button";

const Index = () => {
  return (
    <>
      <Select
        labelInValue
        defaultValue={{
          value: "lucy",
          label: "Lucy (101)",
        }}
        style={{
          width: 120,
        }}
        onChange={handleChange}
        options={[
          {
            value: "jack",
            label: "Jack (100)",
          },
          {
            value: "lucy",
            label: "Lucy (101)",
          },
        ]}
      />
      <Select
        labelInValue
        defaultValue={{
          value: "lucy",
          label: "Lucy (101)",
        }}
        style={{
          width: 120,
        }}
        onChange={handleChange}
        options={[
          {
            value: "jack",
            label: "Jack (100)",
          },
          {
            value: "lucy",
            label: "Lucy (101)",
          },
        ]}
      />
      <Select
        labelInValue
        defaultValue={{
          value: "lucy",
          label: "Lucy (101)",
        }}
        style={{
          width: 120,
        }}
        onChange={handleChange}
        options={[
          {
            value: "jack",
            label: "Jack (100)",
          },
          {
            value: "lucy",
            label: "Lucy (101)",
          },
        ]}
      />
      <Select
        labelInValue
        defaultValue={{
          value: "lucy",
          label: "Lucy (101)",
        }}
        style={{
          width: 120,
        }}
        onChange={handleChange}
        options={[
          {
            value: "jack",
            label: "Jack (100)",
          },
          {
            value: "lucy",
            label: "Lucy (101)",
          },
        ]}
      />
      <CommonButton child="Reset Filters" />
    </>
  );
};

export default Index;
