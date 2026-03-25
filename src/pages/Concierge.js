import React, { useContext, useState } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { FaBriefcase } from "react-icons/fa";
import { GameContext } from "../contexts/GameContext";
import MissionCard from "../components/MissionCard";

/**
 * Concierge Component
 * Mission selection and management interface
 * Displays available contracts and handles mission acceptance
 */
function Concierge() {
  const { completeMission, spendCoins, coins } = useContext(GameContext);
  const [notification, setNotification] = useState(null);

  // Available missions with detailed information
  const missions = [
    {
      id: 1,
      title: "The Businessman",
      description: "A high-ranking corporate executive has violated the rules. Neutralize discreetly during the charity gala.",
      target: "Marcus Antonelli",
      difficulty: "Medium",
      duration: "3 hours",
      reward: 8,
      cost: 2,
      faction: "highTable",
      factionName: "High Table",
      reputationGain: 15
    },
    {
      id: 2,
      title: "The Traitor",
      description: "An informant has been leaking information to rival organizations. Eliminate before they can escape the city.",
      target: "Viktor Petrov",
      difficulty: "Hard",
      duration: "6 hours",
      reward: 15,
      cost: 3,
      faction: "ruska",
      factionName: "Ruska Roma",
      reputationGain: 25
    },
    {
      id: 3,
      title: "The Collector",
      description: "Retrieve stolen artifacts from a private collection. No witnesses, no noise.",
      target: "Art Collection",
      difficulty: "Easy",
      duration: "2 hours",
      reward: 5,
      cost: 1,
      faction: "bowery",
      factionName: "Bowery King",
      reputationGain: 10
    },
    {
      id: 4,
      title: "The Enforcer",
      description: "A rival faction's enforcer is making moves in our territory. Send a message they won't forget.",
      target: "Giovanni Russo",
      difficulty: "Hard",
      duration: "5 hours",
      reward: 12,
      cost: 3,
      faction: "camorra",
      factionName: "Camorra",
      reputationGain: 20
    },
    {
      id: 5,
      title: "The Guardian",
      description: "Protect a high-value asset during transportation. Expect interference from multiple parties.",
      target: "Asset Protection",
      difficulty: "Medium",
      duration: "4 hours",
      reward: 10,
      cost: 2,
      faction: "highTable",
      factionName: "High Table",
      reputationGain: 15
    },
    {
      id: 6,
      title: "The Ghost",
      description: "Track down a phantom operative who has been eliminating our contacts. Extreme caution advised.",
      target: "Unknown Operative",
      difficulty: "Hard",
      duration: "8 hours",
      reward: 20,
      cost: 4,
      faction: "ruska",
      factionName: "Ruska Roma",
      reputationGain: 30
    }
  ];

  /**
   * Handle mission acceptance
   * Deducts cost and marks mission as completed
   */
  const handleAcceptMission = (mission) => {
    if (coins < mission.cost) {
      setNotification({
        type: "danger",
        message: "Insufficient coins to accept this contract."
      });
      return;
    }

    const success = spendCoins(mission.cost);
    if (success) {
      // Simulate mission completion
      setTimeout(() => {
        completeMission(mission);
        setNotification({
          type: "success",
          message: `Contract completed. ${mission.reward} coins earned. Reputation with ${mission.factionName} increased.`
        });
      }, 1500);

      setNotification({
        type: "info",
        message: `Contract accepted. ${mission.cost} coins deducted. Good hunting.`
      });
    }

    // Clear notification after 5 seconds
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  return (
    <Container className="concierge-page page-fade-in">
      <header className="page-header" role="banner">
        <div className="page-header-content">
          <FaBriefcase className="page-icon" aria-hidden="true" />
          <h1 className="page-title">Concierge Desk</h1>
        </div>
        <p className="page-subtitle">
          "How may I be of service?"
        </p>
      </header>

      {notification && (
        <Alert
          variant={notification.type}
          className="notification-alert"
          dismissible
          onClose={() => setNotification(null)}
          role="alert"
          aria-live="polite"
        >
          {notification.message}
        </Alert>
      )}

      <section aria-labelledby="available-contracts">
        <h2 id="available-contracts" className="section-title mb-4">
          Available Contracts
        </h2>
        
        <Row xs={1} md={2} lg={3} className="g-4">
          {missions.map((mission) => (
            <Col key={mission.id}>
              <MissionCard mission={mission} onAccept={handleAcceptMission} />
            </Col>
          ))}
        </Row>
      </section>

      <aside className="concierge-note" role="complementary" aria-label="Important notice">
        <p className="note-text">
          <em>"Please note: All contracts are binding. Once accepted, there is no turning back. Discretion is paramount."</em>
        </p>
      </aside>
    </Container>
  );
}

export default Concierge;