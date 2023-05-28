import React from "react";
import Header from "../components/Header";
import Prototypes from "../Prototypes";
import Orders from "../components/Orders";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <>
      <Header />
      <div className={"container"}>
        <Prototypes />
        <Orders />
        <Footer />
      </div>
    </>
  );
};

export default Root;
