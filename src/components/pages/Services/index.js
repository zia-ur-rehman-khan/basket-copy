import { Space } from "antd";
import CommonBanner from "components/common/Banner";
import CommonButton from "components/common/Button";
import Commonheading from "components/common/Heading";
import ImageContent from "components/common/ImageWithContent";
import CommonTextField from "components/common/TextField";
import contentImage from "public/service/contentImage.png";
import contentVideo from "public/achievement/contentVideo.png";
import banner from "public/school/detailBanner.png";
import { BulbOutlined } from "@ant-design/icons";

import React from "react";
import { List } from "antd";
import MemberShip from "../Event/AcademyPage/MemberShip";
import { useRouter } from "next/router";

const Service = () => {
  const { push } = useRouter();

  const data = [
    {
      title: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
      title: "adipiscing elit, sed do eiusmod tempor incididunt",
    },
    {
      title: "Ut labore et dolore magna aliqua Sed id semper ",
    },
    {
      title: "Risus in hendrerit gravida rutrum fames turpis",
    },
  ];

  const handelRoute = () => {
    push({
      pathname: "/register",
      query: {
        t: "payment",
        m: "member",
      },
    });
  };

  return (
    <div className="service-main">
      <CommonBanner src={banner} heading={"Services"} />

      <ImageContent
        responsive={{
          imageSmall: 24,
          imagelarge: 12,
          contentSmall: 24,
          contentlarge: 12,
        }}
        src={contentImage}
        content={
          <>
            <CommonTextField
              fontSize="15px"
              text="Our Services"
              className={"text-uppercase"}
            />
            <Commonheading
              className={"mt-1"}
              level={2}
              heading="What iBall  Offers"
            />
            <Space direction="vertical" size={24} className="mt-4">
              <CommonTextField text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident." />
              <List
                dataSource={data}
                renderItem={(item) => (
                  <List.Item>{<CommonTextField text={item.title} />}</List.Item>
                )}
              />
            </Space>
          </>
        }
      />

      <ImageContent
        responsive={{
          imageSmall: 24,
          imagelarge: 12,
          contentSmall: 24,
          contentlarge: 10,
        }}
        component={
          <>
            <CommonTextField
              fontSize="15px"
              text="Our Memberships"
              className={"text-uppercase"}
            />
            <Commonheading
              className={"mt-1"}
              level={2}
              heading="Why You Should buy Our Memberships"
            />
            <Space direction="vertical" size={24} className="mt-4">
              <CommonTextField text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident." />
              <CommonButton
                child="Get Started"
                type="primary"
                onClick={handelRoute}
                width="30%"
              />
            </Space>
          </>
        }
        content={<MemberShip />}
      />
    </div>
  );
};

export default Service;
