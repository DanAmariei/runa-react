import { useState } from "react";
import Navigation from "./components/Navigation";
import RunaImage from "./components/RunaImage";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import RunaCalcPage from "./pages/RunaCalcPage";
import SingleRunaPage from "./pages/SingleRunaPage";

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/runa/:id" element={<SingleRunaPage />} />
        <Route path="/runa-calculator" element={<RunaCalcPage />} />
      </Routes>
    </>
  );
}

export default App;
