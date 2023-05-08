// Components
import DashboardTitle from "components/dashboard/Title";
import AdminLayout from "components/dashboard/AdminLayout";
import Sort from "components/dashboard/Sort";
import Wishlists from "components/dashboard/Wishlists";

// Ant D
import { Col, Row } from "antd";

const Whishlist = () => {
  return (
    <AdminLayout>
      <DashboardTitle title="My Wishlist" />

      {/* Wishlist */}
      <Wishlists />
      {/* Wishlist */}
    </AdminLayout>
  );
};

export default Whishlist;
