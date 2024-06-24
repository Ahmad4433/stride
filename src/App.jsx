import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/user/layout/Layout";
import Home from "./components/user/home/Home";
import HowUse from "./components/user/how-to-use/HowUse";
const App = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/use" element={<HowUse />} />
      </Route>
    </Routes>
  );
};

export default App;
