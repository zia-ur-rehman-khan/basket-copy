import dynamic from "next/dynamic";

const DynamicCreateSession = dynamic(() =>
  import("components/pages/Coach/CreateSession")
);

const CreateSession = () => {
  return <DynamicCreateSession />;
};
``;
export default CreateSession;
