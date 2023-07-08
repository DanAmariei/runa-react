import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import RunaCalcPage from "./pages/RunaCalcPage";
import SingleRunaPage from "./pages/SingleRunaPage";
import CristaleEterice from "./pages/CristaleEterice";
import Calatorii from "./pages/Calatorii";
import FormuleRunice from "./pages/FormuleRunice";

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/runa/:id" element={<SingleRunaPage />} />
        <Route path="/runa-calculator" element={<RunaCalcPage />} />
        <Route path="/Calatorii" element={<Calatorii />} />
        <Route path="/formulerunice" element={<FormuleRunice />} />
        <Route path="/CristaleEterice" element={<CristaleEterice />} />
      </Routes>
    </>
  );
}

export default App;
