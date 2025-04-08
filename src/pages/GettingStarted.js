import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Step from '../components/Step';
import SubStep from '../components/SubStep';

const GettingStarted = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div>
      <h1 className="page-title">Getting Started</h1>
      <p>Follow these steps to get set up and begin trading.</p>

      <div className="section">
        <Step number="1" title="Downloading NinjaTrader" id="step1">
          <p>Start by downloading the NinjaTrader platform to your computer.</p>
          
          <SubStep title="Download Links">
            <p>Use the following link to download NinjaTrader:</p>
            <p><a href="https://ninjatrader.com/download" target="_blank" rel="noopener noreferrer">NinjaTrader Download Page</a></p>
            <p>Make sure to select the correct version for your operating system (Windows).</p>
          </SubStep>
          
          <SubStep title="Video Tutorial">
            <p>Watch this video guide for downloading NinjaTrader:</p>
            <div className="video-container">
              <iframe src="https://drive.google.com/file/d/13_kzuROUGHkreg99S6qAmWvpHkvF7YiW/preview" width="640" height="480" allow="autoplay"></iframe>
            </div>
          </SubStep>
        </Step>

        <Step number="2" title="Installing NinjaTrader" id="step2">
          <p>Follow these steps to properly install NinjaTrader on your system.</p>
          
          <SubStep title="Installation Process">
            <p>After downloading, run the installer and follow these steps:</p>
            <ol>
              <li>Double-click the NinjaTrader installer file</li>
              <li>Accept the license agreement</li>
              <li>Choose the installation directory</li>
              <li>Complete the installation process</li>
              <li>Launch NinjaTrader</li>
            </ol>
          </SubStep>
          
          <SubStep title="Video Tutorial">
            <p>Watch this video tutorial for detailed installation instructions:</p>
            <div className="video-container">
              <iframe src="https://drive.google.com/file/d/1Vu6TwqYyq506wWhSDnyt7qGZQiwu4Dja/preview" width="640" height="480" allow="autoplay"></iframe>
            </div>
          </SubStep>
        </Step>

        <Step number="3" title="How to Find Your Machine ID" id="step3">
          <p>Learn how to locate your unique Machine ID, which is required for licensing.</p>
          
          <SubStep title="Finding Machine ID">
            <p>To find your Machine ID in NinjaTrader:</p>
            <ol>
              <li>Launch NinjaTrader</li>
              <li>Click on the 'Help' menu</li>
              <li>Select 'About'</li>
              <li>Your Machine ID will be displayed in the window that appears</li>
              <li>Copy this ID and keep it in a safe place</li>
            </ol>
          </SubStep>
          
          <SubStep title="Video Tutorial">
            <p>Watch this video for a visual guide on finding your Machine ID:</p>
            <div className="video-container">
              <iframe src="https://drive.google.com/file/d/1RO8VWnYVDkxmVgkCDBGOsJqC6SWmp7cZ/preview" width="640" height="480" allow="autoplay"></iframe>
            </div>
          </SubStep>
        </Step>

        <Step number="4" title="Prop Firm Overview" id="step4">
          <p>Understand how proprietary trading firms work and what to expect.</p>
          
          <SubStep title="What is a Prop Firm?">
            <p>Proprietary trading firms (prop firms) provide traders with capital to trade with in exchange for a profit split. Key points:</p>
            <ul>
              <li>Access to larger trading capital</li>
              <li>Various account sizes available</li>
              <li>Profit-sharing structure</li>
              <li>Risk management rules and guidelines</li>
              <li>Evaluation process to prove trading skill</li>
            </ul>
          </SubStep>
          
          <SubStep title="Video Overview">
            <p>Watch this comprehensive overview of prop firm trading:</p>
            <div className="video-container">
              <iframe src="https://drive.google.com/file/d/19e7dNfIjBSy76sqTMdMxyL5SDDUKzv9f/preview" width="640" height="480" allow="autoplay"></iframe>
            </div>
          </SubStep>
        </Step>
      </div>
    </div>
  );
};

export default GettingStarted; 