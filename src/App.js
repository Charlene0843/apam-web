
import React, { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
// hash
// import { HashRouter as Router, Routes, Route } from "react-router-dom";

import './App.scss';
import '../src/assets/scss/style.scss'


import Home from "./pages/Home"



const Cooperation = lazy(() => import("./pages/Cooperation"));
const CoreTechnology = lazy(() => import("./pages/CoreTechnology"));
const Introduction = lazy(() => import("./pages/Introduction"));
const Loyalty = lazy(() => import("./pages/Loyalty"));
const Minting = lazy(() => import("./pages/Minting"));
const News = lazy(() => import("./pages/News"));
const NewsPage = lazy(() => import("./pages/NewsPage"));
const Process = lazy(() => import("./pages/Process"));
const SoftwareDevelop = lazy(() => import("./pages/SoftwareDevelop"));
const Web3 = lazy(() => import("./pages/Web3"));

function App() {
  return (

    <Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cooperation" element={<Cooperation />} />
        <Route path="/core-technology" element={<CoreTechnology />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/loyalty" element={<Loyalty />} />
        <Route path="/minting" element={<Minting />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:type" element={<News />} />
        <Route path="/news/:type/:id" element={<NewsPage />} />
        <Route path="/process" element={<Process />} />
        <Route path="/software-development" element={<SoftwareDevelop />} />
        <Route path="/web3" element={<Web3 />} />
      </Routes>
    </Suspense>


    // hash
    // <Router>
    //   <Suspense>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/core-technology" element={<CoreTechnology />} />
    //       <Route path="/introduction" element={<Introduction />} />
    //       <Route path="/Loyalty" element={<Loyalty />} />
    //       <Route path="/news" element={<News />} />
    //       <Route path="/process" element={<Process />} />
    //       <Route path="/software-development" element={<SoftwareDevelop />} />
    //     </Routes>
    //   </Suspense>
    // </Router>
  );
}

export default App;
