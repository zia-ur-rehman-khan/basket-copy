import CommonHeading from "components/common/Heading";
import React from "react";
const DashboardTitle = ({ title }) => {
  return (
    <CommonHeading heading={title} level={3} mb={30} />
  );
};

export default DashboardTitle;
