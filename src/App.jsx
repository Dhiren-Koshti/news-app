import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LoadingBar from "react-top-loading-bar";
import News from "./components/NewsContainer/News";

export default function App() {
  const apiKey = import.meta.env.VITE_REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);
  return (
    <Router>
      <LoadingBar color="#f11946" progress={progress} />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="general"
              pageSize="6"
              category="general"
            />
          }
        ></Route>
        <Route
          path="/entertainment"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="entertainment"
              pageSize="6"
              category="entertainment"
            />
          }
        ></Route>
        <Route
          path="/sports"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="sports"
              pageSize="6"
              category="sports"
            />
          }
        ></Route>
        <Route
          path="/technology"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="technology"
              pageSize="6"
              category="technology"
            />
          }
        ></Route>
        <Route
          path="/science"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="science"
              pageSize="6"
              category="science"
            />
          }
        ></Route>
      </Routes>
    </Router>
  );
}
