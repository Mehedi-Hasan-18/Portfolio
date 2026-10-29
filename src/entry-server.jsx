import { Suspense } from "react";
import { renderToString } from "react-dom/server";
import { Route, Routes, StaticRouter } from "react-router-dom";
import Main from "./Components/Main";
import Home from "./Components/Home/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import ProjectDetails from "./Components/ProjectDetails";

export function render(path) {
  return renderToString(
    <StaticRouter location={path}>
      <Suspense fallback={null}>
        <Routes>
          <Route element={<Main />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project/:projectId" element={<ProjectDetails />} />
          </Route>
        </Routes>
      </Suspense>
    </StaticRouter>,
  );
}
