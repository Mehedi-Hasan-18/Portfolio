import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home/Home";
import Main from "../Components/Main";
import About from "../Components/About";
import Contact from "../Components/Contact";
import ProjectDetails from "../Components/ProjectDetails";

const AppRouters = () => {
  return (
    <div>
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="about/" element={<About />}></Route>
          <Route path="contact/" element={<Contact />}></Route>
          <Route path="project/:projectId" element={<ProjectDetails />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default AppRouters;
