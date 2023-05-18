import AdminLayout from "components/dashboard/AdminLayout";
import DashboardTitle from "components/dashboard/Title";
import Upload from "components/dashboard/Upload";
import React from "react";

const EditVideo = () => {
  return (
    <AdminLayout>
      <DashboardTitle title={"Edit Video"} />
      <Upload />
    </AdminLayout>
  );
};

export default EditVideo;
