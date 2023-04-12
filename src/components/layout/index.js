import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <div className="main-container">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
