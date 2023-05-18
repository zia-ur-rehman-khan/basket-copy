import dynamic from "next/dynamic";

const DynamicCreateSession = dynamic(() =>
  import("components/pages/Coach/EditSession")
);

const CreateSession = () => {
  return <DynamicCreateSession />;
};
export default CreateSession;
