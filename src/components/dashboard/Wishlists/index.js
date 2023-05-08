// Ant D
import { Table } from "antd";

// Next
import Link from "next/link";
import Image from "next/image";

// Images
import bin from "public/profile/bin.svg";
import wishlist from "public/profile/wishlist.png";

// Data
const data = [
  {
    id: 1,
    productPicture: wishlist,
    productName: "Iball White Jersey",
    price: 20.0,
  },
  {
    id: 2,
    productPicture: wishlist,
    productName: "Iball White Jersey",
    price: 20.0,
  },
  {
    id: 3,
    productPicture: wishlist,
    productName: "Iball White Jersey",
    price: 20.0,
  },
  {
    id: 4,
    productPicture: wishlist,
    productName: "Iball White Jersey",
    price: 20.0,
  },
  {
    id: 5,
    productPicture: wishlist,
    productName: "Iball White Jersey",
    price: 20.0,
  },
  {
    id: 6,
    productPicture: wishlist,
    productName: "Iball White Jersey",
    price: 20.0,
  },
];

const { Column } = Table;

const removeItem = (id) => {
  // data(oldValues => {
  //   return oldValues.filter(whishlist => wishlist.id !== id)
  // })
  // data.filter(wishlist => wishlist.id !== id)
  console.log(data.map((dat) => dat.id));
};

const Wishlists = () => {
  return (
    <Table
      dataSource={data}
      className="dashboard__table whishlist-table order__table"
    >
      <Column
        title="SNo"
        dataIndex="id"
        render={(_, record) => (
          <>{record.id < 10 ? <>0{record.id}</> : record.id}</>
        )}
      />
      <Column
        title="Product Picture"
        dataIndex="productPicture"
        render={(_, record) => <Image src={record.productPicture} alt=" " />}
      />
      <Column title="Product Name" dataIndex="productName" key="key" />
      <Column
        title="Price"
        dataIndex="price"
        render={(_, record) => <>£ {record.price.toFixed(2)}</>}
      />
      <Column
        title="View"
        dataIndex="view"
        render={(_, record) => (
          <Link href="/productDetail/1">View Products</Link>
        )}
      />
      <Column
        title="Remove"
        dataIndex="remove"
        render={(_, record) => (
          <button onClick={() => removeItem(record.id)}>
            <Image src={bin} alt="delete" />
          </button>
        )}
      />
    </Table>
  );
};

export default Wishlists;
