import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import TopNavbar from "./TopNavbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <TopNavbar />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
