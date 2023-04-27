import React, { useRef } from "react";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";

const CommonVideoPreview = ({ src }) => {
  const videoRef = useRef();

  const handleVideo = () => {
    setPlayVideo((prev) => !prev);

    if (playVideo) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  return (
    <div className="uploaded-video-wrapp">
      <video src={src} ref={videoRef} controls={true}></video>
      <button onClick={handleVideo}>
        {playVideo ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
      </button>
    </div>
  );
};

export default CommonVideoPreview;
