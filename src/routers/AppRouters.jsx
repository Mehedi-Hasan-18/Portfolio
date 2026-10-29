import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../Components/Main";

const Home = lazy(() => import("../Components/Home/Home"));
const About = lazy(() => import("../Components/About"));
const Contact = lazy(() => import("../Components/Contact"));
const ProjectDetails = lazy(() => import("../Components/ProjectDetails"));

const AppRouters = () => {
  return (
    <Suspense fallback={<main className="min-h-screen" aria-label="Loading page" />}>
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/:projectId" element={<ProjectDetails />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouters;
