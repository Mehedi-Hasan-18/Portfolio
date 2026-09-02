import React from "react";
import Navber from "./Home/Navber";
import Footer from "./Home/Footer";
import { Outlet } from "react-router-dom";

import Chatbot from "./Chatbot";

const Main = () => {
  return (
    <div className="min-h-screen w-full relative">
      <Navber></Navber>
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default Main;
