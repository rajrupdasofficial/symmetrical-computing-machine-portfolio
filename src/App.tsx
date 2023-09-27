import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blogs";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blog />} />
      </Routes>
    </React.Fragment>
  );
};
export default App;
