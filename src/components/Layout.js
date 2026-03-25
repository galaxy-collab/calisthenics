import React from "react";
import Header from "./Header";

/**
 * Layout Component
 * Provides consistent layout structure for authenticated pages
 * Includes header navigation and main content area
 */
function Layout({ children }) {
  return (
    <div className="layout-wrapper">
      <Header />
      <main className="main-content" role="main">
        {children}
      </main>
      <footer className="continental-footer" role="contentinfo">
        <p className="footer-text">
          "The Continental Hotel - New York" | Courtesy. Professionalism. No Business on Continental Grounds.
        </p>
      </footer>
    </div>
  );
}

export default Layout;