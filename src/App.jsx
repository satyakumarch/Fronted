import "./App.css";
import React from "react";
import { Toaster } from "react-hot-toast";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from  "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Success from "./Pages/Success";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/success" element={<Success/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Toaster/>
      </Router>
    </>
  );
};

export default App;
