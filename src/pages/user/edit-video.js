import UserLayout from "components/dashboard/UserLayout";
import DashboardTitle from "components/dashboard/Title";
import Upload from "components/dashboard/Upload";
import React from "react";

const UploadVideo = () => {
  return (
    <UserLayout>
      <DashboardTitle title={"Edit Video"} />
      <Upload />
    </UserLayout>
  );
};

export default UploadVideo;
