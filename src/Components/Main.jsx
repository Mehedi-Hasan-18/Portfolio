import React from "react";
import Navber from "./Home/Navber";
import Footer from "./Home/Footer";
import { Outlet } from "react-router-dom";

import Chatbot from "./Chatbot";

const Main = () => {
  return (
    <div className="min-h-screen w-full relative">
      {/* Azure Depths
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, #000000 40%, #010133 100%)",
        }}
      /> */}
      <Navber></Navber>
      <Outlet />
      <Footer></Footer>
      {/* Floating Chatbot */}
      <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 1000 }}>
        <Chatbot />
      </div>
    </div>
  );
};

export default Main;
