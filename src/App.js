
import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import './App.scss';
import '../src/assets/scss/style.scss'


import Home from "./pages/Home"


const SoftwareDevelop = lazy(() => import("./pages/SoftwareDevelop"));
const Introduction = lazy(() => import("./pages/Introduction"));

function App() {
  console.log(process.env.PUBLIC_URL);
  return (
    <Router>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/software-development" element={<SoftwareDevelop />} />
          <Route path="/introduction" element={<Introduction />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
