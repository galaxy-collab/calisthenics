import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaSignOutAlt } from "react-icons/fa";
import { GameContext } from "../contexts/GameContext";
import CoinDisplay from "./CoinDisplay";

/**
 * Header Component
 * Navigation bar with coin display and logout functionality
 * Includes accessible navigation links and user information
 */
function Header() {
  const { username, logout } = useContext(GameContext);
  const [expanded, setExpanded] = useState(false);

  const handleLogout = () => {
    logout();
    setExpanded(false);
  };

  const closeNav = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      expanded={expanded}
      onToggle={setExpanded}
      expand="lg"
      className="continental-navbar"
      variant="dark"
      role="navigation"
      aria-label="Main navigation"
    >
      <Container fluid>
        <Navbar.Brand className="navbar-brand-continental">
          <span className="brand-icon" aria-hidden="true">◈</span>
          <span className="brand-text">THE CONTINENTAL</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="continental-navbar-nav" aria-label="Toggle navigation menu" />
        
        <Navbar.Collapse id="continental-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link
              as={NavLink}
              to="/concierge"
              className="nav-link-continental"
              onClick={closeNav}
              aria-label="Navigate to Concierge desk"
            >
              Concierge
            </Nav.Link>
            
            <Nav.Link
              as={NavLink}
              to="/room"
              className="nav-link-continental"
              onClick={closeNav}
              aria-label="Navigate to Hotel Room"
            >
              Hotel Room
            </Nav.Link>
            
            <Nav.Link
              as={NavLink}
              to="/lounge"
              className="nav-link-continental"
              onClick={closeNav}
              aria-label="Navigate to Lounge"
            >
              Lounge
            </Nav.Link>
            
            <div className="navbar-divider" aria-hidden="true"></div>
            
            <div className="user-info">
              <span className="username-display" aria-label={`Current user: ${username}`}>
                {username}
              </span>
              <CoinDisplay />
            </div>
            
            <Nav.Link
              onClick={handleLogout}
              className="nav-link-logout"
              aria-label="Logout from The Continental"
            >
              <FaSignOutAlt aria-hidden="true" />
              <span className="ms-2">Checkout</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;