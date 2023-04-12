import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <div className="main-container">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
