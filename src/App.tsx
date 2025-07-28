import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MultiplayerGame from "./modes/MultiplayerGame";
import SurvivalGame from "./modes/SurvivalGame";
import OnlineGame from "./modes/OnlineGame";
import PageLayout from "./components/PageLayout";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PageLayout>
            <LandingPage />
          </PageLayout>
        }
      />
      <Route
        path="/multiplayer"
        element={
          <PageLayout>
            <MultiplayerGame />
          </PageLayout>
        }
      />
      <Route
        path="/survival"
        element={
          <PageLayout>
            <SurvivalGame />
          </PageLayout>
        }
      />
      <Route
        path="/online"
        element={
          <PageLayout>
            <OnlineGame />
          </PageLayout>
        }
      />
    </Routes>
  );
}
