import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Step from '../components/Step';
import SubStep from '../components/SubStep';

const BubbleBot = () => {
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
      <h1 className="page-title">Getting Started With Bubble Bot</h1>
      <p>Learn how to set up and use Bubble Bot.</p>

      <div className="section">
        <Step number="1" title="Getting Started with Bubble Bot" id="step1">
          <p>Learn how to use the Bubble Bot for semi-automated trading assistance.</p>
          
          <SubStep title="What is Bubble Bot?">
            <p>Bubble Bot is a semi-automated trading assistant that helps you identify potential trading opportunities and manage your positions.</p>
            
          </SubStep>
          
          <SubStep title="Trading Potential">
            <p>Trading consistently, even with small daily gains, can lead to significant annual results:</p>
            <div className="trading-image">
              <img src="/images/motivation.png" alt="Trading profit potential showing daily amounts converting to yearly earnings" width="100%" />
            </div>
            <p className="image-caption">A little progress each day adds up to big results over the 252 trading days in a year.</p>
          </SubStep>
          
          <SubStep title="Video Tutorial">
            <p>Watch this comprehensive guide to get started with Bubble Bot:</p>
            <div className="video-container">
              <iframe 
                src="https://drive.google.com/file/d/1hO9a_Ynlb6qewEPXzlZi2e8afyTEP7tl/preview" 
                width="640" 
                height="480" 
                allow="autoplay"
                title="Bubble Bot Tutorial Video"
              ></iframe>
            </div>
          </SubStep>
          
          <SubStep title="Next Steps">
            <p>After watching the video, you should be able to:</p>
            <ol>
              <li>Set up Bubble Bot with your NinjaTrader installation</li>
              <li>Configure the bot according to your trading preferences</li>
              <li>Understand how to interpret the bot's signals</li>
              <li>Start using Bubble Bot in your trading workflow</li>
            </ol>
            <p>If you have any questions or need further assistance, please contact our support team on discord.</p>
          </SubStep>
        </Step>
      </div>
    </div>
  );
};

export default BubbleBot; 