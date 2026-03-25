import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Alert, Badge } from "react-bootstrap";
import { FaUser, FaKey, FaBolt } from "react-icons/fa";
import { GameContext } from "../contexts/GameContext";

/**
 * Lobby Component
 * Authentication page with cinematic entrance animation
 * Handles user login to enter The Continental
 */
function Lobby() {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useContext(GameContext);
  
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [isEntering, setIsEntering] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/concierge");
    }
  }, [isAuthenticated, navigate]);

  /**
   * Handle quick demo access
   */
  const handleQuickAccess = () => {
    const demoNames = ["John Wick", "Sofia", "Cassian", "Zero", "Caine"];
    const randomName = demoNames[Math.floor(Math.random() * demoNames.length)];
    setName(randomName);
    setCode("1234");
    
    // Auto-submit after brief delay
    setTimeout(() => {
      handleLogin(randomName, "1234");
    }, 500);
  };

  /**
   * Handle form submission and authentication
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(name, code);
  };

  /**
   * Handle login logic
   */
  const handleLogin = (userName, userCode) => {
    setError("");

    if (!userName.trim()) {
      setError("A name is required for entry.");
      return;
    }

    if (!userCode.trim()) {
      setError("An access code is required.");
      return;
    }

    // Accept any code in this demo (just needs to be 4+ characters)
    if (userCode.length >= 4) {
      setIsEntering(true);
      
      // Cinematic entrance delay
      setTimeout(() => {
        login(userName);
        navigate("/concierge");
      }, 2000);
    } else {
      setError("Access code must be at least 4 characters.");
    }
  };

  return (
    <div className={`lobby-container ${isEntering ? "entering" : ""}`}>
      <Container className="lobby-content">
        <article className="lobby-card" role="region" aria-labelledby="lobby-title">
          <div className="lobby-header">
            <div className="continental-emblem" aria-hidden="true">
              ◈
            </div>
            <h1 id="lobby-title" className="lobby-title">
              THE CONTINENTAL
            </h1>
            <p className="lobby-subtitle">New York</p>
          </div>

          {isEntering ? (
            <div className="entering-animation" role="status" aria-live="polite">
              <div className="loader" aria-hidden="true"></div>
              <p className="entering-text">Welcome to The Continental, {name}...</p>
            </div>
          ) : (
            <>
              {/* Demo Access Notice */}
              <Alert variant="warning" className="demo-notice">
                <div className="demo-notice-header">
                  <FaBolt className="me-2" aria-hidden="true" />
                  <strong>Demo Mode</strong>
                </div>
                <p className="mb-2">
                  This is a demonstration. <strong>ANY name and code work!</strong>
                </p>
                <ul className="demo-instructions">
                  <li>Enter <strong>any name</strong> (e.g., "John Wick", "Your Name")</li>
                  <li>Enter <strong>any code</strong> with 4+ characters (e.g., "1234", "demo")</li>
                </ul>
                <Button
                  variant="success"
                  size="sm"
                  className="mt-2 w-100"
                  onClick={handleQuickAccess}
                  aria-label="Quick demo access with pre-filled credentials"
                >
                  <FaBolt className="me-2" aria-hidden="true" />
                  Quick Demo Access (Auto-Fill)
                </Button>
              </Alert>

              <Form onSubmit={handleSubmit} className="lobby-form" aria-label="Login form">
                {error && (
                  <Alert variant="danger" className="error-alert" role="alert">
                    {error}
                  </Alert>
                )}

                <Form.Group className="mb-4" controlId="guestName">
                  <Form.Label className="form-label-gold">
                    <FaUser className="me-2" aria-hidden="true" />
                    Guest Name
                    <Badge bg="info" className="ms-2">Any Name Works</Badge>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name (e.g., John Wick)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control-continental"
                    aria-required="true"
                    aria-describedby="name-help"
                  />
                  <Form.Text id="name-help" className="form-text-continental">
                    Your identity within these walls - try "John Wick" or use your own name
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-4" controlId="accessCode">
                  <Form.Label className="form-label-gold">
                    <FaKey className="me-2" aria-hidden="true" />
                    Access Code
                    <Badge bg="info" className="ms-2">Any Code 4+ Chars</Badge>
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter access code (e.g., 1234, demo)"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="form-control-continental"
                    aria-required="true"
                    aria-describedby="code-help"
                  />
                  <Form.Text id="code-help" className="form-text-continental">
                    Any code with 4 or more characters - try "1234" or "demo"
                  </Form.Text>
                </Form.Group>

                <Button
                  type="submit"
                  variant="outline-light"
                  className="btn-check-in"
                  aria-label="Check in to The Continental"
                >
                  Check In
                </Button>
              </Form>
            </>
          )}

          <div className="lobby-rules" role="complementary" aria-label="Hotel rules">
            <p className="rules-text">
              <em>"Welcome to The Continental. Enjoy your stay."</em>
            </p>
            <ul className="rules-list">
              <li>No business on Continental grounds</li>
              <li>All services require gold coins</li>
              <li>Courtesy and professionalism expected</li>
            </ul>
          </div>
        </article>
      </Container>
    </div>
  );
}

export default Lobby;