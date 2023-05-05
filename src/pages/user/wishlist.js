import dynamic from "next/dynamic";

const DynamicWishlist = dynamic(() =>
  import("components/pages/User/UserWishlist")
);

const Whishlist = () => {
  return <DynamicWishlist />;
};

export default Whishlist;
