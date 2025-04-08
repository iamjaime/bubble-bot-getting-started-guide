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
      <p>Follow these steps to get set up and running quickly.</p>

      <div className="section">
        <Step number="1" title="Installation" id="step1">
          <p>Begin by installing the required dependencies for your project.</p>
          
          <SubStep title="Prerequisites">
            <p>Make sure you have the following installed before proceeding:</p>
            <ul>
              <li>Node.js (v14 or later)</li>
              <li>npm or yarn</li>
              <li>Git</li>
            </ul>
          </SubStep>
          
          <SubStep title="Clone the Repository">
            <p>Clone the repository to your local machine:</p>
            <pre><code>{"git clone https://github.com/your-username/your-repo.git\ncd your-repo"}</code></pre>
          </SubStep>
          
          <SubStep title="Install Dependencies">
            <p>Install all required dependencies:</p>
            <pre><code>{"npm install\n# or with yarn\nyarn install"}</code></pre>
          </SubStep>
        </Step>

        <Step number="2" title="Configuration" id="step2">
          <p>Configure your environment settings.</p>
          
          <SubStep title="Environment Variables">
            <p>Create a .env file in the root directory with the following variables:</p>
            <pre><code>{"API_URL=https://api.example.com\nAPI_KEY=your_api_key\nDEBUG=false"}</code></pre>
          </SubStep>
          
          <SubStep title="Configuration File">
            <p>Adjust the configuration in config.js according to your needs:</p>
            <pre><code>{"// config.js\nexport default {\n  theme: 'dark',\n  language: 'en',\n  timeout: 30000,\n  features: {\n    analytics: true,\n    notifications: true\n  }\n}"}</code></pre>
          </SubStep>
        </Step>

        <Step number="3" title="Running the Application" id="step3">
          <p>Start the application and begin using it.</p>
          
          <SubStep title="Development Mode">
            <p>To run the application in development mode:</p>
            <pre><code>{"npm run dev\n# or with yarn\nyarn dev"}</code></pre>
            <p>This will start the development server at <code>http://localhost:3000</code>.</p>
          </SubStep>
          
          <SubStep title="Production Build">
            <p>To create a production build:</p>
            <pre><code>{"npm run build\nnpm run start\n# or with yarn\nyarn build\nyarn start"}</code></pre>
          </SubStep>
          
          <SubStep title="Testing">
            <p>Run tests to ensure everything is working correctly:</p>
            <pre><code>{"npm test\n# or with yarn\nyarn test"}</code></pre>
          </SubStep>
        </Step>
      </div>
    </div>
  );
};

export default GettingStarted; 