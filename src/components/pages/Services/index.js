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
      <CommonBanner src={banner} heading={"Road Map"} />

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
            <CommonTextField fontSize="20px" text="OUR  SERVICES" />
            <Commonheading level={2} heading="What iBall  Offers" />
            <Space direction="vertical" size={24}>
              <CommonTextField text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed id semper risus in hendrerit gravida rutrum. Fames ac turpis egestas sed tempus. Fringilla est ullamcorper eget nulla facilisi etiam. Urna condimentum mattis pellentesque id nibh tortor id aliquet lectus." />
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
            <CommonTextField fontSize="20px" text="OUR MEMBERSHIPS" />
            <Commonheading
              level={2}
              heading="Why You Should buy Our Memberships"
            />
            <Space direction="vertical" size={24}>
              <CommonTextField text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed id semper risus in hendrerit gravida rutrum. Fames ac turpis egestas sed tempus. Fringilla est ullamcorper eget nulla facilisi etiam. Urna condimentum mattis pellentesque id nibh tortor id aliquet lectus. Diam volutpat commodo sed egestas egestas fringilla phasellus. Odio pellentesque diam volutpat commodo sed. Id aliquet lectus proin nibh nisl. Vehicula ipsum a arcu cursus. Ut etiam sit amet nisl purus in. Ut tellus elementum sagittis vitae et leo duis ut. Eu volutpat odio facilisis mauris sit." />
              <CommonButton
                child={"Get Started"}
                width="50%"
                onClick={handelRoute}
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
