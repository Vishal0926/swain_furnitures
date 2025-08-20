import { Routes, Route } from "react-router-dom";
import Home from "./Components/home";
import LivingRoom from "./Pages/livingroom";
import DiningRoom from "./Pages/diningroom";
import Bedroom from "./Pages/bedroom";
import About from "./Pages/about";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/livingroom" element={<LivingRoom />} />
      <Route path="/diningroom" element={<DiningRoom />} />
      <Route path="/bedroom" element={<Bedroom />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
