import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1 className="page-title">Documentation</h1>
      <p>Welcome to the documentation site. Here you'll find instructions and guides to help you get started.</p>
      
      <div className="section">
        <h2 className="section-title">Available Guides</h2>
        <div className="step">
          <div className="step-header">
            <h3 className="step-title">Getting Started</h3>
          </div>
          <div className="step-content">
            <p>Learn how to download and install NinjaTrader, find your Machine ID, and understand prop firm trading basics.</p>
            <ul>
              <li>Downloading NinjaTrader</li>
              <li>Installing NinjaTrader</li>
              <li>How to Find Your Machine ID</li>
              <li>Prop Firm Overview</li>
            </ul>
            <Link to="/getting-started" className="button">View Guide</Link>
          </div>
        </div>
        
        <div className="step">
          <div className="step-header">
            <h3 className="step-title">Getting Started With Bubble Bot</h3>
          </div>
          <div className="step-content">
            <p>Learn how to set up and use the Bubble Bot features.</p>
            <Link to="/bubble-bot" className="button">View Guide</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 