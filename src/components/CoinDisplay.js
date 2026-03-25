import React, { useContext } from "react";
import { FaCoins } from "react-icons/fa";
import { GameContext } from "../contexts/GameContext";

/**
 * CoinDisplay Component
 * Shows current coin balance with icon
 * Accessible with proper ARIA labels
 */
function CoinDisplay() {
  const { coins } = useContext(GameContext);

  return (
    <div className="coin-display" aria-label={`Current balance: ${coins} gold coins`}>
      <FaCoins className="coin-icon" aria-hidden="true" />
      <span className="coin-amount">{coins}</span>
    </div>
  );
}

export default CoinDisplay;