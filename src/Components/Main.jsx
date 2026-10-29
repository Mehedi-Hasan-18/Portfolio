import Navber from "./Home/Navber";
import Footer from "./Home/Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const AnalyticsConsent = () => {
  const [visible, setVisible] = useState(true);

  const choose = (allowed) => {
    setVisible(false);
    if (allowed) {
      window.dispatchEvent(
        new CustomEvent("portfolio:analytics-consent", { detail: true }),
      );
    }
  };

  if (!visible) return null;

  return (
    <aside
      role="dialog"
      aria-label="Analytics preferences"
      className="fixed bottom-4 right-4 z-[70] max-w-sm rounded-xl border border-white/15 bg-zinc-900 p-4 text-sm text-zinc-200 shadow-xl"
    >
      <p className="mb-3">
        Allow Microsoft Clarity to collect anonymous usage analytics?
      </p>
      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => choose(true)}
          className="rounded-md bg-white px-3 py-1.5 font-semibold text-zinc-950"
        >
          Allow analytics
        </button>
        <button
          type="button"
          onClick={() => choose(false)}
          className="rounded-md border border-white/20 px-3 py-1.5"
        >
          Decline
        </button>
      </div>
    </aside>
  );
};

const Main = () => {
  return (
    <div className="min-h-screen w-full relative">
      <header>
        <Navber />
      </header>
      <Outlet />
      <Footer></Footer>
      <AnalyticsConsent />
    </div>
  );
};

export default Main;
