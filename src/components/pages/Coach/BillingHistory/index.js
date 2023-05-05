// components
import DashboardTitle from "components/dashboard/Title";
import AdminLayout from "components/dashboard/AdminLayout";
import Sort from "components/dashboard/Sort";

// AntD
import { Col, Row, Tabs, Table } from "antd";

// Images
import product from "public/profile/wishlist.png";
import item from "public/profile/item.png";
import Image from "next/image";
import TutorialsBilling from "components/dashboard/TutorialsBilling";

// Data
const data = [
  {
    id: 1,
    key: "1",
    img: product,
    name: "Iball White Jersey",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore ",
    qty: 2,
    date: "24 Nov",
    amount: 20.0,
  },
  {
    id: 2,
    key: "2",
    img: item,
    name: "Iball White Jersey",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore ",
    qty: 2,
    date: "24 Nov",
    amount: 20.0,
  },
  {
    id: 3,
    key: "3",
    img: product,
    name: "Iball White Jersey",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore ",
    qty: 2,
    date: "24 Nov",
    amount: 20.0,
  },
  {
    id: 4,
    key: "4",
    img: item,
    name: "Iball White Jersey",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore ",
    qty: 2,
    date: "24 Nov",
    amount: 20.0,
  },
  {
    id: 5,
    key: "5",
    img: product,
    name: "Iball White Jersey",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore ",
    qty: 2,
    date: "24 Nov",
    amount: 20.0,
  },
  {
    id: 6,
    key: "6",
    img: item,
    name: "Iball White Jersey",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore ",
    qty: 2,
    date: "24 Nov",
    amount: 20.0,
  },
];

const { Column } = Table;

// Tabs Content
const tabItems = [
  {
    key: "1",
    label: `Shopping Billing`,
    children: (
      <Table
        dataSource={data}
        className="dashboard__table order__table billing__table"
      >
        <Column
          title="SNo"
          dataIndex="id"
          key="id"
          render={(_, record) => (
            <>{record.id < 10 ? <>0{record.id}</> : record.id}</>
          )}
        />
        <Column
          title="Name"
          dataIndex="name"
          key="key"
          render={(_, record) => (
            <div className="item">
              <Image src={record.img} alt=" " />
              <span>{record.name}</span>
            </div>
          )}
        />
        <Column title="Description" dataIndex="description" key="key" />
        <Column
          title="Quantity"
          dataIndex="qty"
          key="key"
          render={(_, record) => <span>Qty {record.qty}</span>}
        />
        <Column title="Date" dataIndex="date" key="key" />
        <Column
          title="Amount"
          dataIndex="amount"
          key="key"
          render={(_, record) => <span>£ {record.amount.toFixed(2)}</span>}
        />
      </Table>
    ),
  },
  {
    key: "2",
    label: `Tutorials Billing`,
    children: <TutorialsBilling />,
  },
];

const Index = () => {
  return (
    <AdminLayout>
      <Row>
        <Col span={12}>
          <DashboardTitle title={"Billing History"} />
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

      <Tabs defaultActiveKey="1" items={tabItems} />
    </AdminLayout>
  );
};

export default Index;
