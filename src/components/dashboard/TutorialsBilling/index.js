// Images

import thumb from "public/profile/vid-thumb.png";
import tableOne from "public/profile/table1.png";
import tableTwo from "public/profile/table2.png";
import tableThree from "public/profile/table3.png";
import Image from "next/image";

// AntD
import { Col, Row, Tabs, Table, Column } from "antd";
import { Collapse } from "antd";
import Link from "next/link";
const { Panel } = Collapse;

// Icons
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

// Data
const tutorialBill = [
  {
    id: 1,
    key: "1",
    img: thumb,
    name: "Dribble Tutorial",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore ",
    qty: 2,
    date: "24 Nov",
    amount: 20.0,
    booked: [
      {
        id: 1,
        avatar: tableOne,
        text: "Clinton Gardner Have Booked Your Coaching",
      },
      {
        id: 2,
        avatar: tableTwo,
        text: "Clinton Gardner Have Booked Your Coaching",
      },
      {
        id: 3,
        avatar: tableThree,
        text: "Clinton Gardner Have Booked Your Coaching",
      },
    ],
  },
  {
    id: 2,
    key: "2",
    img: thumb,
    name: "Dribble Tutorial",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore ",
    qty: 2,
    date: "24 Nov",
    amount: 20.0,
    booked: [
      {
        id: 1,
        avatar: tableOne,
        text: "Clinton Gardner Have Booked Your Coaching",
      },
      {
        id: 2,
        avatar: tableTwo,
        text: "Clinton Gardner Have Booked Your Coaching",
      },
      {
        id: 3,
        avatar: tableThree,
        text: "Clinton Gardner Have Booked Your Coaching",
      },
    ],
  },
  {
    id: 3,
    key: "3",
    img: thumb,
    name: "Dribble Tutorial",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore ",
    qty: 2,
    date: "24 Nov",
    amount: 20.0,
    booked: [
      {
        id: 1,
        avatar: tableOne,
        text: "Clinton Gardner Have Booked Your Coaching",
      },
      {
        id: 2,
        avatar: tableTwo,
        text: "Clinton Gardner Have Booked Your Coaching",
      },
      {
        id: 3,
        avatar: tableThree,
        text: "Clinton Gardner Have Booked Your Coaching",
      },
    ],
  },
];

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
    key: "key",
    render: (_, record) => (
      <>{record.id < 10 ? <>0{record.id}</> : record.id}</>
    ),
  },
  {
    title: "Name",
    dataIndex: "name, img",
    key: "key",
    render: (_, record) => (
      <div className="item">
        <Image src={record.img} alt="img" />
        {record.name}
      </div>
    ),
  },
  { title: "Description", dataIndex: "description", key: "key" },
  {
    title: "Quantity",
    dataIndex: "qty",
    key: "key",
    render: (_, record) => <>Qty {record.qty}</>,
  },
  { title: "Date", dataIndex: "date", key: "key" },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "key",
    render: (_, record) => <>£{record.amount.toFixed(2)}</>,
  },
  // {
  //     title: "Action",
  //     dataIndex: "",
  //     key: "x",
  //     render: () => <a>Delete</a>
  // }
];

const TutorialsBilling = () => {
  return (
    <Table
      className="dashboard__table order__table billing__table"
      expandIconColumnIndex={6}
      columns={columns}
      dataSource={tutorialBill}
      pagination={false}
      expandRowByClick
      expandIcon={({ expanded, onExpand, record }) =>
        expanded ? (
          <BsChevronUp
            style={{ float: "right" }}
            onClick={(e) => onExpand(record, e)}
          />
        ) : (
          <BsChevronDown onClick={(e) => onExpand(record, e)} />
        )
      }
      expandable={{
        expandedRowRender: (record) => (
          <div className="nested__table-wrapp">
            <h3 className="nested__table-head">People Who Booked</h3>
            <table className="nested__table">
              {record.booked?.map((book, i) => (
                <tr key={i}>
                  <td>{book?.id}</td>
                  <td>
                    <Image src={book?.avatar} alt=" " />
                  </td>
                  <td>{book?.text}</td>
                  <td>
                    <Link href="#">
                      <a>Veiw Details</a>
                    </Link>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        ),
        rowExpandable: (record) => record.name !== "Not Expandable",
      }}
    />
  );
};

export default TutorialsBilling;
