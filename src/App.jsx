import React, { useEffect } from "react";
import MainPage from "./pages/MainPage";
import EachWork from "./pages/EachWork";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/:id" element={<EachWork />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
