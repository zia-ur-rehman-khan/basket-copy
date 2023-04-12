/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-dupe-keys */
import React from "react";

const CommonTextField = ({
  text,
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
}) => {
  return (
    <div className="paragraph-parent">
      <p
        title={title}
        className={`${className || ""} ${onClick ? "c-pointer" : ""}`}
        // className={className}
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
        {text || children}
      </p>
    </div>
  );
};

export default CommonTextField;
