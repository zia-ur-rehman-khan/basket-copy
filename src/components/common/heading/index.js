/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-dupe-keys */
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
  );
};

export default Commonheading;
