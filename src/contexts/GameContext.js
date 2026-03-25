import React, { createContext, useState, useEffect } from "react";

export const GameContext = createContext();

/**
 * GameProvider Component
 * Manages global state for The Continental Hotel application
 * Including authentication, currency, inventory, and reputation
 */
export function GameProvider({ children }) {
  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");

  // Currency and inventory
  const [coins, setCoins] = useState(12);
  const [inventory, setInventory] = useState([
    { id: 1, name: "Marker", description: "A blood oath", rarity: "legendary" },
    { id: 2, name: "Gold Coin", description: "Continental currency", rarity: "common", quantity: 12 },
    { id: 3, name: "Armored Suit", description: "Bulletproof Italian craftsmanship", rarity: "rare" }
  ]);

  // Faction reputation system
  const [reputation, setReputation] = useState({
    highTable: 75,
    bowery: 60,
    ruska: 85,
    camorra: 45
  });

  // Completed missions
  const [completedMissions, setCompletedMissions] = useState([]);

  // Social connections
  const [connections, setConnections] = useState([
    { id: 1, name: "Winston Scott", role: "Manager", status: "allied", trust: 95 },
    { id: 2, name: "Charon", role: "Concierge", status: "allied", trust: 100 },
    { id: 3, name: "The Bowery King", role: "Information Broker", status: "neutral", trust: 70 }
  ]);

  // Load saved state from localStorage
  useEffect(() => {
    const savedState = localStorage.getItem("continentalState");
    if (savedState) {
      try {
        const parsed = JSON.parse(savedState);
        if (parsed.isAuthenticated) {
          setIsAuthenticated(parsed.isAuthenticated);
          setUsername(parsed.username || "");
          setCoins(parsed.coins || 12);
          setInventory(parsed.inventory || []);
          setReputation(parsed.reputation || {});
          setCompletedMissions(parsed.completedMissions || []);
          setConnections(parsed.connections || []);
        }
      } catch (error) {
        console.error("Error loading saved state:", error);
      }
    }
  }, []);

  // Save state to localStorage
  useEffect(() => {
    if (isAuthenticated) {
      const state = {
        isAuthenticated,
        username,
        coins,
        inventory,
        reputation,
        completedMissions,
        connections
      };
      localStorage.setItem("continentalState", JSON.stringify(state));
    }
  }, [isAuthenticated, username, coins, inventory, reputation, completedMissions, connections]);

  /**
   * Handle user login
   */
  const login = (name) => {
    setIsAuthenticated(true);
    setUsername(name);
  };

  /**
   * Handle user logout and clear state
   */
  const logout = () => {
    setIsAuthenticated(false);
    setUsername("");
    setCoins(12);
    setInventory([
      { id: 1, name: "Marker", description: "A blood oath", rarity: "legendary" },
      { id: 2, name: "Gold Coin", description: "Continental currency", rarity: "common", quantity: 12 },
      { id: 3, name: "Armored Suit", description: "Bulletproof Italian craftsmanship", rarity: "rare" }
    ]);
    setReputation({
      highTable: 75,
      bowery: 60,
      ruska: 85,
      camorra: 45
    });
    setCompletedMissions([]);
    localStorage.removeItem("continentalState");
  };

  /**
   * Add coins to player balance
   */
  const addCoins = (amount) => {
    setCoins((prev) => prev + amount);
  };

  /**
   * Deduct coins from player balance
   */
  const spendCoins = (amount) => {
    if (coins >= amount) {
      setCoins((prev) => prev - amount);
      return true;
    }
    return false;
  };

  /**
   * Add item to inventory
   */
  const addToInventory = (item) => {
    setInventory((prev) => [...prev, { ...item, id: Date.now() }]);
  };

  /**
   * Remove item from inventory
   */
  const removeFromInventory = (itemId) => {
    setInventory((prev) => prev.filter((item) => item.id !== itemId));
  };

  /**
   * Complete a mission and update state
   */
  const completeMission = (mission) => {
    setCompletedMissions((prev) => [...prev, mission.id]);
    addCoins(mission.reward);
    
    // Update reputation based on mission faction
    if (mission.faction) {
      setReputation((prev) => ({
        ...prev,
        [mission.faction]: Math.min(100, prev[mission.faction] + mission.reputationGain)
      }));
    }
  };

  /**
   * Update reputation for a specific faction
   */
  const updateReputation = (faction, change) => {
    setReputation((prev) => ({
      ...prev,
      [faction]: Math.max(0, Math.min(100, prev[faction] + change))
    }));
  };

  /**
   * Add a new connection
   */
  const addConnection = (connection) => {
    setConnections((prev) => [...prev, { ...connection, id: Date.now() }]);
  };

  const value = {
    isAuthenticated,
    username,
    coins,
    inventory,
    reputation,
    completedMissions,
    connections,
    login,
    logout,
    addCoins,
    spendCoins,
    addToInventory,
    removeFromInventory,
    completeMission,
    updateReputation,
    addConnection
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}