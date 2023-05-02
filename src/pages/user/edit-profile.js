import dynamic from "next/dynamic";

const DynamicEditInfo = dynamic(() => import("components/pages/User/InfoEdit"))

const EditInformation = () => {
  return (
    <DynamicEditInfo />
  );
};

export default EditInformation;
