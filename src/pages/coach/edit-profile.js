import dynamic from "next/dynamic";

const DynamicProfileEdit = dynamic(() =>
  import("components/pages/Coach/ProfileEdit")
);

const EditProfile = () => {
  return <DynamicProfileEdit />;
};

export default EditProfile;
