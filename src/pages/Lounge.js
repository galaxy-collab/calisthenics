import React, { useContext, useState } from "react";
import { Container, Row, Col, Card, Button, Form, ListGroup, Badge } from "react-bootstrap";
import { FaGlassMartini, FaUsers, FaComments } from "react-icons/fa";
import { GameContext } from "../contexts/GameContext";

/**
 * Lounge Component
 * Social interaction hub for networking and communication
 * Displays connections, allows messaging, and shows social status
 */
function Lounge() {
  const { connections, username, addConnection } = useContext(GameContext);
  const [newConnectionName, setNewConnectionName] = useState("");
  const [selectedConnection, setSelectedConnection] = useState(null);
  const [messages, setMessages] = useState([
    {
      id: 1,
      from: "Charon",
      text: "Good evening. The concierge desk has several new contracts available.",
      timestamp: "10 minutes ago"
    },
    {
      id: 2,
      from: "Winston Scott",
      text: "Welcome to The Continental. Should you need anything, do not hesitate to ask.",
      timestamp: "1 hour ago"
    }
  ]);
  const [newMessage, setNewMessage] = useState("");

  /**
   * Handle adding a new connection
   */
  const handleAddConnection = (e) => {
    e.preventDefault();
    
    if (!newConnectionName.trim()) {
      return;
    }

    const newContact = {
      name: newConnectionName,
      role: "Associate",
      status: "neutral",
      trust: 50
    };

    addConnection(newContact);
    setNewConnectionName("");
  };

  /**
   * Handle sending a message
   */
  const handleSendMessage = (e) => {
    e.preventDefault();
    
    if (!newMessage.trim() || !selectedConnection) {
      return;
    }

    const message = {
      id: Date.now(),
      from: username,
      to: selectedConnection.name,
      text: newMessage,
      timestamp: "Just now"
    };

    setMessages((prev) => [message, ...prev]);
    setNewMessage("");
  };

  /**
   * Get status badge variant
   */
  const getStatusVariant = (status) => {
    switch (status.toLowerCase()) {
      case "allied":
        return "success";
      case "neutral":
        return "info";
      case "hostile":
        return "danger";
      default:
        return "secondary";
    }
  };

  /**
   * Get trust level color
   */
  const getTrustColor = (trust) => {
    if (trust >= 80) return "#4caf50";
    if (trust >= 60) return "#2196f3";
    if (trust >= 40) return "#ff9800";
    return "#f44336";
  };

  return (
    <Container className="lounge-page page-fade-in">
      <header className="page-header" role="banner">
        <div className="page-header-content">
          <FaGlassMartini className="page-icon" aria-hidden="true" />
          <h1 className="page-title">The Lounge</h1>
        </div>
        <p className="page-subtitle">
          "A place for civilized discourse and discreet conversations."
        </p>
      </header>

      <Row className="mt-4">
        <Col lg={4} className="mb-4">
          <section aria-labelledby="connections-heading">
            <Card className="lounge-card">
              <Card.Header className="card-header-gold">
                <FaUsers className="me-2" aria-hidden="true" />
                <span id="connections-heading">Your Network</span>
              </Card.Header>
              <Card.Body>
                <ListGroup variant="flush" className="connections-list">
                  {connections.map((connection) => (
                    <ListGroup.Item
                      key={connection.id}
                      className={`connection-item ${selectedConnection?.id === connection.id ? "selected" : ""}`}
                      onClick={() => setSelectedConnection(connection)}
                      role="button"
                      aria-label={`Select ${connection.name}, ${connection.role}`}
                      tabIndex={0}
                      onKeyPress={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          setSelectedConnection(connection);
                        }
                      }}
                    >
                      <div className="connection-info">
                        <div className="connection-header">
                          <strong className="connection-name">{connection.name}</strong>
                          <Badge bg={getStatusVariant(connection.status)} className="status-badge">
                            {connection.status}
                          </Badge>
                        </div>
                        <small className="connection-role">{connection.role}</small>
                        <div className="trust-meter" aria-label={`Trust level: ${connection.trust}%`}>
                          <div
                            className="trust-fill"
                            style={{
                              width: `${connection.trust}%`,
                              backgroundColor: getTrustColor(connection.trust)
                            }}
                            aria-hidden="true"
                          ></div>
                        </div>
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>

                <Form onSubmit={handleAddConnection} className="add-connection-form mt-3">
                  <Form.Group controlId="newConnection">
                    <Form.Label className="visually-hidden">Add new connection</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Add new contact..."
                      value={newConnectionName}
                      onChange={(e) => setNewConnectionName(e.target.value)}
                      className="form-control-dark"
                      aria-label="New connection name"
                    />
                  </Form.Group>
                  <Button
                    type="submit"
                    variant="outline-light"
                    className="mt-2 w-100"
                    size="sm"
                    aria-label="Add connection to network"
                  >
                    Add to Network
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </section>
        </Col>

        <Col lg={8}>
          <section aria-labelledby="messages-heading">
            <Card className="lounge-card messages-card">
              <Card.Header className="card-header-gold">
                <FaComments className="me-2" aria-hidden="true" />
                <span id="messages-heading">Secure Messages</span>
              </Card.Header>
              <Card.Body>
                {selectedConnection ? (
                  <div className="message-interface">
                    <div className="selected-contact-banner" role="status" aria-live="polite">
                      <strong>{selectedConnection.name}</strong>
                      <span className="contact-role"> - {selectedConnection.role}</span>
                    </div>

                    <div className="messages-container" role="log" aria-label="Message history">
                      {messages
                        .filter((msg) => 
                          msg.from === selectedConnection.name || 
                          msg.to === selectedConnection.name
                        )
                        .map((message) => (
                          <article key={message.id} className="message-item">
                            <div className="message-header">
                              <strong className="message-sender">{message.from}</strong>
                              <span className="message-time">{message.timestamp}</span>
                            </div>
                            <p className="message-text">{message.text}</p>
                          </article>
                        ))}
                      
                      {messages.filter((msg) => 
                        msg.from === selectedConnection.name || 
                        msg.to === selectedConnection.name
                      ).length === 0 && (
                        <p className="no-messages">
                          No messages with {selectedConnection.name}. Start a conversation.
                        </p>
                      )}
                    </div>

                    <Form onSubmit={handleSendMessage} className="message-form">
                      <Form.Group controlId="messageInput">
                        <Form.Label className="visually-hidden">Type your message</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          placeholder="Type your message..."
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          className="form-control-dark"
                          aria-label="Message content"
                        />
                      </Form.Group>
                      <Button
                        type="submit"
                        variant="outline-light"
                        className="mt-2"
                        disabled={!newMessage.trim()}
                        aria-label={`Send message to ${selectedConnection.name}`}
                      >
                        Send Message
                      </Button>
                    </Form>
                  </div>
                ) : (
                  <div className="no-selection" role="status">
                    <p className="text-center text-muted mt-5">
                      Select a contact to view messages and start a conversation.
                    </p>
                  </div>
                )}
              </Card.Body>
            </Card>
          </section>

          <section className="lounge-info mt-4" role="complementary" aria-label="Lounge information">
            <Card className="info-card">
              <Card.Body>
                <h3 className="info-title">The Continental Lounge</h3>
                <p className="info-text">
                  A sanctuary for those in our profession. Here, business is strictly prohibited. 
                  The lounge serves as a neutral ground for networking, information exchange, 
                  and maintaining the delicate balance of our world.
                </p>
                <div className="lounge-rules">
                  <h4 className="rules-heading">Lounge Etiquette:</h4>
                  <ul className="rules-list">
                    <li>All conversations are confidential</li>
                    <li>Respect the sanctity of neutral ground</li>
                    <li>Weapons must remain holstered</li>
                    <li>Discretion is expected at all times</li>
                  </ul>
                </div>
              </Card.Body>
            </Card>
          </section>
        </Col>
      </Row>
    </Container>
  );
}

export default Lounge;