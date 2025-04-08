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
      <p>Follow these steps to set up and use Bubble Bot in your projects.</p>

      <div className="section">
        <Step number="1" title="Setting Up Bubble Bot" id="step1">
          <p>First, you'll need to set up Bubble Bot for your application.</p>
          
          <SubStep title="Registration">
            <p>Register for a Bubble Bot account:</p>
            <ol>
              <li>Go to the <a href="https://bubblebot.example.com/register" target="_blank" rel="noopener noreferrer">Bubble Bot registration page</a></li>
              <li>Fill in your details and create an account</li>
              <li>Verify your email address</li>
            </ol>
          </SubStep>
          
          <SubStep title="Getting API Keys">
            <p>Once registered, you'll need to generate API keys:</p>
            <ol>
              <li>Log in to your Bubble Bot dashboard</li>
              <li>Navigate to Settings → API Keys</li>
              <li>Click "Generate New API Key"</li>
              <li>Save your API key securely as it won't be shown again</li>
            </ol>
          </SubStep>
          
          <SubStep title="Installation">
            <p>Install the Bubble Bot SDK in your project:</p>
            <pre><code>{"npm install bubble-bot-sdk\n# or with yarn\nyarn add bubble-bot-sdk"}</code></pre>
          </SubStep>
        </Step>

        <Step number="2" title="Integration" id="step2">
          <p>Now let's integrate Bubble Bot into your application.</p>
          
          <SubStep title="Basic Setup">
            <p>Import and initialize the Bubble Bot SDK in your application:</p>
            <pre><code>{"// Import the SDK\nimport BubbleBot from 'bubble-bot-sdk';\n\n// Initialize with your API key\nconst bubbleBot = new BubbleBot({\n  apiKey: 'YOUR_API_KEY',\n  environment: 'production', // or 'development'\n  logging: true\n});"}</code></pre>
          </SubStep>
          
          <SubStep title="Configuration">
            <p>Configure Bubble Bot with your preferred settings:</p>
            <pre><code>{"// Configure Bubble Bot\nbubbleBot.configure({\n  theme: 'dark', // or 'light', 'custom'\n  position: 'bottom-right', // or 'bottom-left', 'top-right', 'top-left'\n  initialMessage: 'Hi! How can I help you today?',\n  avatar: 'https://your-domain.com/bot-avatar.png', // optional\n  customStyles: {\n    // Add your custom CSS here if using 'custom' theme\n    primaryColor: '#6200ee',\n    secondaryColor: '#03dac6'\n  }\n});"}</code></pre>
          </SubStep>
        </Step>

        <Step number="3" title="Customization and Usage" id="step3">
          <p>Customize and use Bubble Bot in your application.</p>
          
          <SubStep title="Custom Responses">
            <p>Set up custom responses for specific queries:</p>
            <pre><code>{"// Add custom responses\nbubbleBot.addResponses([\n  {\n    pattern: /pricing|cost|subscription/i,\n    response: 'Our pricing starts at $10/month. You can view all plans at example.com/pricing.'\n  },\n  {\n    pattern: /support|help|contact/i,\n    response: 'For support, please email support@example.com or call us at (123) 456-7890.'\n  },\n  {\n    pattern: /hours|timing|schedule/i,\n    response: 'We are available 24/7 for your convenience!'\n  }\n]);"}</code></pre>
          </SubStep>
          
          <SubStep title="Event Handling">
            <p>Listen for and respond to Bubble Bot events:</p>
            <pre><code>{"// Event handling\nbubbleBot.on('message:received', (message) => {\n  console.log(`User sent: ${message.text}`);\n  // You can add custom logic here\n});\n\nbubbleBot.on('message:sent', (message) => {\n  console.log(`Bot sent: ${message.text}`);\n  // Track bot responses if needed\n});\n\nbubbleBot.on('conversation:started', () => {\n  // Maybe track this in analytics\n  console.log('New conversation started');\n});\n\nbubbleBot.on('conversation:ended', () => {\n  // Send a follow-up email or survey\n  console.log('Conversation ended');\n});"}</code></pre>
          </SubStep>
          
          <SubStep title="Advanced Features">
            <p>Implement advanced features like file uploads and rich messages:</p>
            <pre><code>{"// Enable file uploads\nbubbleBot.enableFileUploads({\n  maxSize: 5, // max file size in MB\n  allowedTypes: ['image/jpeg', 'image/png', 'application/pdf'],\n  uploadEndpoint: 'https://your-domain.com/api/uploads'\n});\n\n// Send rich messages\nbubbleBot.sendRichMessage({\n  type: 'card',\n  title: 'Check out our latest feature!',\n  description: 'We just launched something awesome.',\n  image: 'https://your-domain.com/feature-image.jpg',\n  buttons: [\n    {\n      text: 'Learn More',\n      url: 'https://your-domain.com/features'\n    },\n    {\n      text: 'Dismiss',\n      action: 'dismiss'\n    }\n  ]\n});"}</code></pre>
          </SubStep>
        </Step>
      </div>
    </div>
  );
};

export default BubbleBot; 