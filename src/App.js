import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import BasicCard from "./pages/landingPage";
import MasonryImageList from "./pages/galleryPage";

function App() {
  return (
    <React.Fragment>

     <main>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Navigate to="/firststep" />}> </Route>
          <Route path="/firststep" element={<BasicCard />} />
          <Route path="/second" element={<MasonryImageList />} />

          </Routes>
      </BrowserRouter>
         
     </main>
  </React.Fragment>

);
}

export default App;
