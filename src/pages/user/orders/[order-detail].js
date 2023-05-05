// Components
import DashboardTitle from "components/dashboard/Title";
import UserLayout from "components/dashboard/UserLayout";
import Sort from "components/dashboard/Sort";
import OrderRow from "components/dashboard/OrderRow";

// Ant D
import { Col, Row } from "antd";

// Images
import orderOne from "public/profile/ordered1.png";
import orderTwo from "public/profile/ordered2.png";
import CommonTextField from "components/common/TextField";
import CommonHeading from "components/common/Heading";

// Data
const ordersData = [
  {
    id: 1,
    img: orderOne,
    itemName: "Iball White Jersey",
    qty: 2,
    price: 20.0,
  },
  {
    id: 2,
    img: orderOne,
    itemName: "Iball White Jersey",
    qty: 2,
    price: 20.0,
  },
  {
    id: 3,
    img: orderTwo,
    itemName: "Iball White Jersey",
    qty: 2,
    price: 20.0,
  },
];

const orderSummary = [
  {
    id: 1,
    text: "Tax",
    amount: 5.0,
  },
  {
    id: 2,
    text: "Estimated Shipping Cost",
    amount: 5.0,
  },
  {
    id: 3,
    text: "Promo Applied",
    amount: 5.0,
  },
];

const orderTotal = orderSummary
  .map((total) => total.amount)
  .reduce((acc, cur) => acc + cur, 0)
  .toFixed(2);

const OrderDetail = () => {
  return (
    <UserLayout>
      <Row>
        <Col span={12}>
          <DashboardTitle title="My Orders" />
        </Col>
        <Col
          span={12}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: "3rem",
          }}
        >
          <Sort />
        </Col>
      </Row>

      <div className="orders__wrapp">
        {ordersData.map((orders) => (
          <OrderRow
            key={orders.id}
            image={orders.img}
            qty={orders.qty}
            price={orders.price.toFixed(2)}
            name={orders.itemName}
          />
        ))}
        <div className="orders__total-wrapp">
          {orderSummary?.map((summary) => (
            <div className="total__row">
              <span>
                <CommonTextField text={summary?.text} />
              </span>
              <span>
                <CommonTextField text={`$${summary?.amount.toFixed(2)}`} />
              </span>
            </div>
          ))}
          <div className="total__row">
            <span>
              <CommonHeading level={4} heading={"Order Total"} />
            </span>
            <span>
              <CommonHeading level={4} heading={`$${orderTotal}`} />
            </span>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default OrderDetail;
