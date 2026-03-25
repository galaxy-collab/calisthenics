import React, { useContext } from "react";
import { ProgressBar } from "react-bootstrap";
import { GameContext } from "../contexts/GameContext";

/**
 * ReputationTracker Component
 * Displays faction reputation levels with progress bars
 * Provides visual feedback on standing with different organizations
 */
function ReputationTracker() {
  const { reputation } = useContext(GameContext);

  const factions = [
    { key: "highTable", name: "High Table", icon: "◈" },
    { key: "bowery", name: "Bowery King", icon: "♔" },
    { key: "ruska", name: "Ruska Roma", icon: "☩" },
    { key: "camorra", name: "Camorra", icon: "⚔" }
  ];

  /**
   * Get status color based on reputation level
   */
  const getStatusColor = (value) => {
    if (value >= 75) return "success";
    if (value >= 50) return "info";
    if (value >= 25) return "warning";
    return "danger";
  };

  /**
   * Get status text based on reputation level
   */
  const getStatusText = (value) => {
    if (value >= 75) return "Allied";
    if (value >= 50) return "Friendly";
    if (value >= 25) return "Neutral";
    return "Hostile";
  };

  return (
    <section className="reputation-tracker" aria-labelledby="reputation-heading">
      <h2 id="reputation-heading" className="section-title">
        Faction Standing
      </h2>
      
      <div className="reputation-list">
        {factions.map((faction) => {
          const value = reputation[faction.key];
          const status = getStatusText(value);
          
          return (
            <article key={faction.key} className="reputation-item">
              <div className="reputation-header">
                <div className="faction-info">
                  <span className="faction-icon" aria-hidden="true">
                    {faction.icon}
                  </span>
                  <h3 className="faction-name">{faction.name}</h3>
                </div>
                <span 
                  className={`reputation-status status-${getStatusColor(value)}`}
                  aria-label={`Status: ${status}`}
                >
                  {status}
                </span>
              </div>
              
              <ProgressBar
                now={value}
                variant={getStatusColor(value)}
                className="reputation-bar"
                aria-label={`${faction.name} reputation: ${value} out of 100`}
                aria-valuenow={value}
                aria-valuemin={0}
                aria-valuemax={100}
              />
              
              <div className="reputation-value" aria-hidden="true">
                {value}/100
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default ReputationTracker;