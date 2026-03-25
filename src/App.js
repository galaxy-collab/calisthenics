import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { GameContext } from "./contexts/GameContext";
import Layout from "./components/Layout";
import Lobby from "./pages/Lobby";
import Concierge from "./pages/Concierge";
import HotelRoom from "./pages/HotelRoom";
import Lounge from "./pages/Lounge";

/**
 * Main App Component
 * Handles routing and authentication flow for The Continental Hotel
 */
function App() {
  const { isAuthenticated } = useContext(GameContext);

  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route
          path="/concierge"
          element={
            isAuthenticated ? (
              <Layout>
                <Concierge />
              </Layout>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route
          path="/room"
          element={
            isAuthenticated ? (
              <Layout>
                <HotelRoom />
              </Layout>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route
          path="/lounge"
          element={
            isAuthenticated ? (
              <Layout>
                <Lounge />
              </Layout>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;