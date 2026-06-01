import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SelectEgg from "./pages/SelectEgg";
import Timer from "./pages/Timer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/select" element={<SelectEgg />} />
      <Route path="/timer" element={<Timer />} />
    </Routes>
  );
}
export default App;
