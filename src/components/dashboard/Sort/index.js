// Ant D
import { Select } from "antd";
import CommonSelect from "components/common/Select";

const index = () => {
  return (
    <div className="sort__dropdown">
      <span className="color__light">Filter :</span>
      <CommonSelect
        defaultValue="Select"
        options={[
          { value: "Newest", label: "Newest" },
          { value: "Old", label: "Old" },
        ]}
        width={"120px"}
        height={"38px"}
      />
    </div>
  );
};

export default index;
