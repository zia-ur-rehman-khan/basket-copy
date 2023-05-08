import { useState, useRef } from "react";
import { Button, Form, Input, Row, Col } from "antd";

import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import Image from "next/image";
import CommonInputField from "components/common/Input";
import CommonButton from "components/common/Button";

const { TextArea } = Input;

const Upload = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef();
  const filePicekerRef = useRef(null);

  function previewFile(e) {
    const reader = new FileReader();
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      reader.readAsDataURL(selectedFile);
    }
    reader.onload = (readerEvent) => {
      if (selectedFile.type.includes("image")) {
        setImagePreview(readerEvent.target.result);
      } else if (selectedFile.type.includes("video")) {
        setVideoPreview(readerEvent.target.result);
      }
    };
  }
  function clearFiles() {
    setImagePreview(null);
    setVideoPreview(null);
  }

  const handleVideo = () => {
    setPlayVideo((prev) => !prev);

    if (playVideo) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };
  return (
    <Row gutter={30}>
      <Col
        lg={{ span: 12 }}
        md={{ span: 24 }}
        sm={{ span: 24 }}
        xs={{ span: 24 }}
      >
        <Form className="dashboard__form">
          <Row gutter={20}>
            <Col span={24}>
              <Form.Item
                name="video-title"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <CommonInputField placeholder="Enter Video Title" type="text" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name="video-description"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <TextArea placeholder="Enter Video Description" rows={4} />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <CommonButton
              type="default"
              onClick={() => filePicekerRef.current.click()}
              child={"Browse Video"}
              color="#FF6600"
            />
          </Form.Item>
          <Form.Item>
            <CommonButton child={"Upload Video"} htmlType="submit" />
          </Form.Item>
        </Form>
        <div className="btn-container">
          <input
            ref={filePicekerRef}
            accept="image/*, video/*"
            onChange={previewFile}
            type="file"
            hidden
          />
          {/* <button className="btn" onClick={() => filePicekerRef.current.click()}>Choose</button> */}
          {/* <button className="btn" onClick={clearFiles}>x</button> */}
        </div>
      </Col>
      <Col
        lg={{ span: 12 }}
        md={{ span: 24 }}
        sm={{ span: 24 }}
        xs={{ span: 24 }}
      >
        <div className="preview">
          {imagePreview != null && (
            <Image src={imagePreview} alt="" layout="fill" />
          )}
          {videoPreview != null && (
            <div className="uploaded__video-wrapp">
              <video src={videoPreview} ref={videoRef} controls={false}></video>
              <button onClick={handleVideo}>
                {playVideo ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
              </button>
            </div>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default Upload;
