import React, { useState, useContext } from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { FaSkull, FaClock, FaCoins } from "react-icons/fa";
import { GameContext } from "../contexts/GameContext";

/**
 * MissionCard Component
 * Displays mission details with animated reveal
 * Handles mission acceptance and completion
 */
function MissionCard({ mission, onAccept }) {
  const { completedMissions, coins } = useContext(GameContext);
  const [isRevealed, setIsRevealed] = useState(false);
  
  const isCompleted = completedMissions.includes(mission.id);
  const canAfford = coins >= mission.cost;

  /**
   * Handle mission card reveal animation
   */
  const handleReveal = () => {
    if (!isRevealed && !isCompleted) {
      setIsRevealed(true);
    }
  };

  /**
   * Get difficulty badge variant
   */
  const getDifficultyVariant = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case "easy":
        return "success";
      case "medium":
        return "warning";
      case "hard":
        return "danger";
      default:
        return "secondary";
    }
  };

  return (
    <Card
      className={`mission-card ${isRevealed ? "revealed" : ""} ${isCompleted ? "completed" : ""}`}
      onClick={handleReveal}
      role="article"
      aria-label={`Mission: ${mission.title}`}
    >
      <Card.Body>
        {!isRevealed && !isCompleted ? (
          <div className="mission-sealed" aria-label="Sealed mission briefing - click to reveal">
            <div className="seal-icon" aria-hidden="true">
              ◈
            </div>
            <p className="seal-text">CONFIDENTIAL</p>
            <p className="seal-instruction">Click to open briefing</p>
          </div>
        ) : (
          <div className="mission-content">
            <div className="mission-header">
              <h3 className="mission-title">{mission.title}</h3>
              <Badge bg={getDifficultyVariant(mission.difficulty)} className="difficulty-badge">
                {mission.difficulty}
              </Badge>
            </div>

            <p className="mission-description">{mission.description}</p>

            <div className="mission-details">
              <div className="mission-detail-item">
                <FaSkull className="detail-icon" aria-hidden="true" />
                <span>Target: <strong>{mission.target}</strong></span>
              </div>

              <div className="mission-detail-item">
                <FaClock className="detail-icon" aria-hidden="true" />
                <span>Duration: <strong>{mission.duration}</strong></span>
              </div>

              <div className="mission-detail-item">
                <FaCoins className="detail-icon" aria-hidden="true" />
                <span>Reward: <strong>{mission.reward} Coins</strong></span>
              </div>
            </div>

            <div className="mission-faction">
              <span className="faction-label">Faction:</span>
              <span className="faction-name">{mission.factionName}</span>
              <span className="reputation-gain">+{mission.reputationGain} Rep</span>
            </div>

            {isCompleted ? (
              <div className="mission-completed-badge">
                <Badge bg="success">✓ Completed</Badge>
              </div>
            ) : (
              <Button
                variant="outline-light"
                className="accept-mission-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  onAccept(mission);
                }}
                disabled={!canAfford}
                aria-label={`Accept mission: ${mission.title}. Cost: ${mission.cost} coins`}
              >
                {canAfford ? `Accept (${mission.cost} Coins)` : "Insufficient Coins"}
              </Button>
            )}
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default MissionCard;