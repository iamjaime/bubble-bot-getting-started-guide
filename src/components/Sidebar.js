import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [gettingStartedOpen, setGettingStartedOpen] = useState(false);
  const [bubbleBotOpen, setBubbleBotOpen] = useState(false);

  const toggleGettingStarted = () => {
    setGettingStartedOpen(!gettingStartedOpen);
  };

  const toggleBubbleBot = () => {
    setBubbleBotOpen(!bubbleBotOpen);
  };

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-logo">
        <h1>Documentation</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li className="nav-item">
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              onClick={() => isOpen && toggleSidebar()}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <div className="nav-link" onClick={toggleGettingStarted} style={{ cursor: 'pointer' }}>
              Getting Started {gettingStartedOpen ? '▼' : '▶'}
            </div>
            <ul className={`sub-nav ${gettingStartedOpen ? 'open' : ''}`}>
              <li className="nav-item">
                <NavLink 
                  to="/getting-started" 
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                  onClick={() => isOpen && toggleSidebar()}
                >
                  Overview
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/getting-started#step1" 
                  className="nav-link"
                  onClick={() => isOpen && toggleSidebar()}
                >
                  1. Downloading NinjaTrader
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/getting-started#step2" 
                  className="nav-link"
                  onClick={() => isOpen && toggleSidebar()}
                >
                  2. Installing NinjaTrader
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/getting-started#step3" 
                  className="nav-link"
                  onClick={() => isOpen && toggleSidebar()}
                >
                  3. Find Your Machine ID
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/getting-started#step4" 
                  className="nav-link"
                  onClick={() => isOpen && toggleSidebar()}
                >
                  4. Prop Firm Overview
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/getting-started#step5" 
                  className="nav-link"
                  onClick={() => isOpen && toggleSidebar()}
                >
                  5. Trading Overview
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <div className="nav-link" onClick={toggleBubbleBot} style={{ cursor: 'pointer' }}>
              Bubble Bot {bubbleBotOpen ? '▼' : '▶'}
            </div>
            <ul className={`sub-nav ${bubbleBotOpen ? 'open' : ''}`}>
              <li className="nav-item">
                <NavLink 
                  to="/bubble-bot" 
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                  onClick={() => isOpen && toggleSidebar()}
                >
                  Overview
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/bubble-bot#step1" 
                  className="nav-link"
                  onClick={() => isOpen && toggleSidebar()}
                >
                  Step 1
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/bubble-bot#step2" 
                  className="nav-link"
                  onClick={() => isOpen && toggleSidebar()}
                >
                  Step 2
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/bubble-bot#step3" 
                  className="nav-link"
                  onClick={() => isOpen && toggleSidebar()}
                >
                  Step 3
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar; 