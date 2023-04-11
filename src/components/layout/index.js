import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="layout_container">
      <div className="main_container">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
