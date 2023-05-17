import React, { useEffect, useState } from "react";
import logo from "public/logo.png";
import Image from "next/image";
import CommonHeading from "components/common/Heading";
import CommonTextField from "components/common/TextField";
import { Col, Row } from "antd";
import CommonInputField from "components/common/Input";
import { Input } from "antd";
import { Space } from "antd";
import CommonButton from "components/common/Button";

const { TextArea } = Input;

const CommingSoon = () => {
  const [data, setData] = useState(null);
  const [displayPage, setDisplayPage] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      countDownDate();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const countDownDate = function () {
    let timeleft = new Date("2023/6/1").getTime() - new Date().getTime();

    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    setData({ days, hours, minutes, seconds });
  };

  const disappearWrapper = () => {
    setDisplayPage(false);
  };

  return (
    <div className="coming_soon_bg">
      <div
        className="coming_soon_wrapper"
        onClick={disappearWrapper}
        style={{ border: `${displayPage ? "2px solid #000000" : ""}` }}
      >
        <div className="one_sided_handle_left">
          <div className="handle"></div>
          <div className="hook"></div>
        </div>
        <div className="one_sided_handle_right">
          <div className="handle"></div>
          <div className="hook"></div>
        </div>
        <div className="coming_soon_time">
          <CommonHeading
            level={3}
            heading={"iBall Website, iBall App"}
            color={"#000000"}
          />
          <CommonHeading heading={"Coming Soon"} color={"#000000"} />
          <Space>
            {data?.hours ? (
              <>
                <Space direction="vertical">
                  <CommonHeading
                    heading={`${data?.days} - `}
                    color={"#000000"}
                  />
                  <CommonTextField text={"days"} color={"#000000"} />
                </Space>
                <Space direction="vertical">
                  <CommonHeading
                    heading={`${data?.hours} - `}
                    color={"#000000"}
                  />
                  <CommonTextField text={"hours"} color={"#000000"} />
                </Space>
                <Space direction="vertical">
                  <CommonHeading
                    heading={`${data?.minutes} - `}
                    color={"#000000"}
                  />
                  <CommonTextField text={"Minutes"} color={"#000000"} />
                </Space>
                <Space direction="vertical">
                  <CommonHeading
                    heading={`${data?.seconds}`}
                    color={"#000000"}
                  />
                  <CommonTextField text={"Seconds"} color={"#000000"} />
                </Space>
              </>
            ) : (
              <CommonHeading heading={"Loading..."} />
            )}
          </Space>
        </div>
        <div className="coming_soon_message">
          <CommonHeading heading={"STAY TUNED"} color={"#000000"} />
        </div>
        <div className="double_sided_handle_left">
          <div className="hook_top"></div>
          <div className="handle"></div>
          <div className="hook_bottom"></div>
        </div>
        <div className="double_sided_handle_right">
          <div className="hook_top"></div>
          <div className="handle"></div>
          <div className="hook_bottom"></div>
        </div>
      </div>
    </div>
    // <Space
    //   size={20}
    //   direction="vertical"
    //   className="w-100 align-items-center mt-5 mb-5"
    // >
    //   <Image src={logo} alt="" width={324} height={193} />
    //   <Space direction="vertical" className="align-items-center">
    //     <CommonHeading heading={"COMING SOON"} />
    //     <CommonTextField
    //       text={"At What We Do…"}
    //       fontSize={"24px"}
    //       fontWeight={600}
    //     />
    //   </Space>
    //   <Space>
    //     {data?.hours ? (
    //       <>
    //         <Space direction="vertical">
    //           <CommonHeading heading={`${data?.days} - `} />
    //           <CommonTextField text={"days"} />
    //         </Space>
    //         <Space direction="vertical">
    //           <CommonHeading heading={`${data?.hours} - `} />
    //           <CommonTextField text={"hours"} />
    //         </Space>
    //         <Space direction="vertical">
    //           <CommonHeading heading={`${data?.minutes} - `} />
    //           <CommonTextField text={"Minutes"} />
    //         </Space>
    //         <Space direction="vertical">
    //           <CommonHeading heading={`${data?.seconds}`} />
    //           <CommonTextField text={"Seconds"} />
    //         </Space>
    //       </>
    //     ) : (
    //       <CommonHeading heading={"Loading..."} />
    //     )}
    //   </Space>

    //   <Space size={20} direction="vertical" className="align-items-center">
    //     <CommonTextField
    //       text={"Contact Form"}
    //       fontWeight={600}
    //       color="var(--primary-color)"
    //     />
    //     <CommonTextField
    //       text={"Get In Touch"}
    //       fontSize={"35px"}
    //       fontWeight={600}
    //     />
    //     <Row gutter={[14, 14]} className="signUp-main">
    //       <Col span={24}>
    //         <CommonInputField placeholder="Your Name" />
    //       </Col>
    //       <Col span={24}>
    //         <CommonInputField placeholder="Email" />
    //       </Col>
    //       <Col span={24}>
    //         <CommonInputField placeholder="Contact" type={"number"} />
    //       </Col>
    //       <Col span={24}>
    //         <TextArea placeholder="Message" rows={4} />
    //       </Col>
    //       <Col span={24}>
    //         <CommonButton child="Send" />
    //       </Col>
    //     </Row>
    //   </Space>
    // </Space>
  );
};

export default CommingSoon;
