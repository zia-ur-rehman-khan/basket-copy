import React from "react";

const CommonCard = ({ child, onClick }) => {
  return (
    <div className="common-card c-pointer" onClick={onClick}>
      {child}
    </div>
  );
};

export default CommonCard;
