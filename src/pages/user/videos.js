import dynamic from "next/dynamic";

const DynamicVideos = dynamic(() => import("components/pages/User/UserVideos"));

const Videos = () => {
  return <DynamicVideos />;
};

export default Videos;
