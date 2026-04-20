import React from "react";
import Navber from "./Home/Navber";
import Footer from "./Home/Footer";
import { Outlet } from "react-router-dom";

import Chatbot from "./Chatbot";
import SplashCursor from "./SplashCursor";
import LightRays from "./LightRays";

const Main = () => {
  return (
    <div className="min-h-screen w-full relative">
      <SplashCursor
        DENSITY_DISSIPATION={2}
        VELOCITY_DISSIPATION={1.5}
        PRESSURE={0.1}
        CURL={3}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={6000}
        COLOR_UPDATE_SPEED={6}
        SHADING
        RAINBOW_MODE={false}
        COLOR="#3935b9"
      />
      {/* Background Effect */}
      <div
        className="fixed inset-0 top-0 left-0 w-screen h-screen pointer-events-none"
        style={{ zIndex: -1 }}
      >
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          className="custom-rays"
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />
      </div>
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
