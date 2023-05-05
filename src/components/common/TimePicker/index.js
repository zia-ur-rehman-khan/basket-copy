/* eslint-disable react/prop-types */

import moment from "moment";
import { TimePicker } from "antd";

const CommonTimePicker = ({
  placeholder,
  name,
  className,
  maxLength,
  showCount,
  addonBefore,
  type,
  onChange,
  onBlur,
  value,
  errors,
  touch,
  height = "45px",
  width = "100%",
}) => {
  return (
    <div className="date-time-parent">
      <TimePicker
        style={{ height, width }}
        type={type}
        name={name}
        addonBefore={addonBefore}
        showCount={showCount}
        maxLength={maxLength}
        className={`common-time-input  ${className || ""}`}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        defaultOpenValue={moment("00:00:00", "HH:mm:ss")}
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

export default CommonTimePicker;
