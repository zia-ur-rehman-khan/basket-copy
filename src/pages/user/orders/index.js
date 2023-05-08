// Components
import DashboardTitle from "components/dashboard/Title";
import UserLayout from "components/dashboard/UserLayout";
import Sort from "components/dashboard/Sort";

// Ant D
import { Col, Row, Table } from "antd";

// React Icons
import { BsFillCheckCircleFill } from "react-icons/bs";
import Link from "next/link";

// Data
const data = [
  {
    id: 1,
    key: "1",
    orderNo: "#1084598423154",
    date: "04-12-21",
    status: "Confirm",
    paymentStatus: "Paid",
    total: 590.0,
    details: `/user/orders`,
  },
  {
    id: 2,
    key: "2",
    orderNo: "#1084598423154",
    date: "04-12-21",
    status: "Confirm",
    paymentStatus: "Paid",
    total: 590.0,
    details: `/user/orders`,
  },
  {
    id: 3,
    key: "3",
    orderNo: "#1084598423154",
    date: "04-12-21",
    status: "Confirm",
    paymentStatus: "Paid",
    total: 590.0,
    details: `/user/orders`,
  },
  {
    id: 4,
    key: "4",
    orderNo: "#1084598423154",
    date: "04-12-21",
    status: "Confirm",
    paymentStatus: "Paid",
    total: 590.0,
    details: `/user/orders`,
  },
  {
    id: 5,
    key: "5",
    orderNo: "#1084598423154",
    date: "04-12-21",
    status: "Confirm",
    paymentStatus: "Paid",
    total: 590.0,
    details: `/user/orders`,
  },
  {
    id: 6,
    key: "6",
    orderNo: "#1084598423154",
    date: "04-12-21",
    status: "Confirm",
    paymentStatus: "Paid",
    total: 590.0,
    details: `/user/orders`,
  },
];

const { Column } = Table;

const MyOrders = () => {
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
      <Table dataSource={data} className="dashboard__table order__table">
        <Column
          title="SNo"
          dataIndex="key"
          key="key"
          render={(_, record) => (
            <>{record.id < 10 ? <>0{record.id}</> : record.id}</>
          )}
        />
        <Column title="OrderNo" dataIndex="orderNo" key="key" />
        <Column title="Order Date" dataIndex="date" key="key" />
        <Column title="Status" dataIndex="status" key="key" />
        <Column
          title="Payment Status"
          dataIndex="paymentStatus"
          key="key"
          render={(_, record) => (
            <>
              <span className="color__green">
                {record.paymentStatus} <BsFillCheckCircleFill />
              </span>
            </>
          )}
        />
        <Column
          title="Total"
          dataIndex="total"
          key="key"
          render={(_, record) => (
            <>${record.total}</>
          )}
        />
        <Column
          title="Details"
          dataIndex="key"
          key="key"
          render={(_, record) => (
            <Link href={`${record.details}/${record.id}`}>View Details</Link>
          )}
        />
      </Table>
    </UserLayout>
  );
};

export default MyOrders;
