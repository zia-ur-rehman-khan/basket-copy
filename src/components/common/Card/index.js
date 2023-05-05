import React from "react";

const CommonCard = ({ child, onClick, style }) => {
  return (
    <div className="common-card gallery-card c-pointer" style={style} onClick={onClick}>
      {child}
    </div>
  );
};

export default CommonCard;
