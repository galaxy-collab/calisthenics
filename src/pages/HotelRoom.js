import React, { useContext } from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { FaDoorOpen, FaShieldAlt } from "react-icons/fa";
import { GameContext } from "../contexts/GameContext";
import ReputationTracker from "../components/ReputationTracker";

/**
 * HotelRoom Component
 * Player inventory and character status display
 * Shows collected items, weapons, and personal effects
 */
function HotelRoom() {
  const { username, inventory } = useContext(GameContext);

  /**
   * Get rarity badge variant based on item rarity
   */
  const getRarityVariant = (rarity) => {
    switch (rarity.toLowerCase()) {
      case "common":
        return "secondary";
      case "rare":
        return "primary";
      case "legendary":
        return "warning";
      default:
        return "light";
    }
  };

  /**
   * Get rarity display name
   */
  const getRarityName = (rarity) => {
    return rarity.charAt(0).toUpperCase() + rarity.slice(1);
  };

  return (
    <Container className="hotel-room-page page-fade-in">
      <header className="page-header" role="banner">
        <div className="page-header-content">
          <FaDoorOpen className="page-icon" aria-hidden="true" />
          <h1 className="page-title">Your Suite</h1>
        </div>
        <p className="page-subtitle">
          "Welcome back, {username}. Your accommodations are ready."
        </p>
      </header>

      <Row className="mt-4">
        <Col lg={8} className="mb-4">
          <section aria-labelledby="inventory-heading">
            <h2 id="inventory-heading" className="section-title mb-4">
              <FaShieldAlt className="me-2" aria-hidden="true" />
              Personal Inventory
            </h2>

            <Row xs={1} md={2} className="g-4">
              {inventory.map((item) => (
                <Col key={item.id}>
                  <Card className="inventory-card" role="article" aria-label={`Inventory item: ${item.name}`}>
                    <Card.Body>
                      <div className="inventory-header">
                        <h3 className="inventory-item-name">{item.name}</h3>
                        <Badge bg={getRarityVariant(item.rarity)} className="rarity-badge">
                          {getRarityName(item.rarity)}
                        </Badge>
                      </div>
                      
                      <p className="inventory-description">{item.description}</p>
                      
                      {item.quantity && (
                        <div className="inventory-quantity">
                          <span className="quantity-label">Quantity:</span>
                          <span className="quantity-value">{item.quantity}</span>
                        </div>
                      )}

                      {item.rarity === "legendary" && (
                        <div className="legendary-glow" aria-hidden="true"></div>
                      )}
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            {inventory.length === 0 && (
              <Card className="empty-inventory">
                <Card.Body>
                  <p className="text-center text-muted">
                    Your inventory is empty. Complete missions to acquire items.
                  </p>
                </Card.Body>
              </Card>
            )}
          </section>
        </Col>

        <Col lg={4}>
          <ReputationTracker />
        </Col>
      </Row>

      <aside className="room-amenities" role="complementary" aria-label="Room amenities">
        <h2 className="section-title mb-3">Suite Amenities</h2>
        <ul className="amenities-list">
          <li>24-hour concierge service</li>
          <li>Secure weapons storage</li>
          <li>Private armory access</li>
          <li>Encrypted communications</li>
          <li>Medical services on call</li>
          <li>Tailoring and wardrobe</li>
        </ul>
      </aside>
    </Container>
  );
}

export default HotelRoom;