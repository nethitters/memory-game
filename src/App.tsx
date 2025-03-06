import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MultiplayerGame from "./modes/MultiplayerGame";
import SurvivalGame from "./modes/SurvivalGame";
import OnlineGame from "./modes/OnlineGame";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/multiplayer" element={<MultiplayerGame />} />
      <Route path="/survival" element={<SurvivalGame />} />
      <Route path="/online" element={<OnlineGame />} />
    </Routes>
  );
}
