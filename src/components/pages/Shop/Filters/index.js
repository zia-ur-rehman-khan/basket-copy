import React from "react";

import { Select } from "antd";
const handleChange = (value) => {
  console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
};

import CommonButton from "components/common/Button";
import CommonSelect from "components/common/Select";
import { Space } from "antd";

const Index = () => {
  return (
    <Space wrap>
      <CommonSelect
        placeholder="Price : Min | Max"
        options={[
          { value: "jack", label: "America" },
          { value: "lucy", label: "canada" },
          { value: "Yiminghe", label: "USA" },
        ]}
      />
      <CommonSelect
        placeholder="Merchandise type : Lorem"
        options={[
          { value: "jack", label: "America" },
          { value: "lucy", label: "canada" },
          { value: "Yiminghe", label: "USA" },
        ]}
      />
      <CommonSelect
        placeholder="Colour : All"
        options={[
          { value: "jack", label: "America" },
          { value: "lucy", label: "canada" },
          { value: "Yiminghe", label: "USA" },
        ]}
      />
      <CommonSelect
        placeholder="Sort by : All"
        options={[
          { value: "jack", label: "America" },
          { value: "lucy", label: "canada" },
          { value: "Yiminghe", label: "USA" },
        ]}
      />
      <CommonButton child="Reset Filters" height={"40px"} />
    </Space>
  );
};

export default Index;
