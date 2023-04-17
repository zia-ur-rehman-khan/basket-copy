import { Typography } from "antd";
import React from "react";
const { Title } = Typography;

const Commonheading = ({
  heading,
  children,
  font,
  fontSize,
  color = "#ffffff",
  mb = 0,
  mt = 0,
  onClick,
  textAlign,
  fontWeight,
  fontFamily,
  letterSpacing,
  textDecoration,
  paddingLeft,
  className,
  title,
  lineHeight,
  level,
}) => {
  return (
    <div className="heading-parent">
      <Title
        level={level}
        title={title}
        className={`${className || ""} ${onClick ? "cp" : ""}`}
        style={{
          margin: 0,
          padding: 0,
          fontFamily: font,
          fontSize,
          color,
          marginBottom: mb,
          marginTop: mt,
          textAlign,
          fontFamily,
          fontWeight,
          letterSpacing,
          lineHeight,
          paddingLeft,
          textDecoration,
          whiteSpace: "pre-wrap",
        }}
        onClick={onClick}
      >
        {heading || children}
      </Title>
    </div>
  );
};

export default Commonheading;
