import dynamic from "next/dynamic";

const DynamicWallet = dynamic(() => import("components/pages/User/UserWallet"));

const Wallet = () => {
  return <DynamicWallet />;
};

export default Wallet;
