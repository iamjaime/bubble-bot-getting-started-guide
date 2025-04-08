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
            <p>Learn the basics and set up your environment.</p>
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