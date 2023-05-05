import dynamic from "next/dynamic";

const DynamicUpdatePassword = dynamic(() =>
  import("components/pages/Coach/UpdatePassword")
);

const ChangePassword = () => {
  return <DynamicUpdatePassword />;
};

export default ChangePassword;
