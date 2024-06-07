import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Page/Homepage";
import Newspage from "./Page/NewsPage";
import NewsDetails from "../src/components/NewsDetails/NewsDetails";
import React from "react";
function App() {
  return (
    <Router>
  

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/New1" element={<Newspage />} />
        <Route path="/New2" element={<NewsDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
