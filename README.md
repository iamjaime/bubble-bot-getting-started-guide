# Documentation Site

A modern, dark-themed documentation website built with React. This site provides step-by-step instructions for getting started and using Bubble Bot.

## Features

- Modern dark theme with beautiful shadows and effects
- Responsive design that works on desktop and mobile
- Easy navigation with a collapsible sidebar
- Step-by-step instructions with clear formatting
- Scroll to specific sections using anchor links

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the docs directory
3. Install dependencies:

```bash
npm install
# or
yarn install
```

### Running the Development Server

To start the development server:

```bash
npm start
# or
yarn start
```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Building for Production

To build the app for production:

```bash
npm run build
# or
yarn build
```

This will create an optimized production build in the `build` folder.

## Project Structure

```
docs/
├── public/             # Static files
├── src/                # Source code
│   ├── components/     # Reusable components
│   ├── pages/          # Page components
│   └── styles/         # CSS styles
├── package.json        # Dependencies and scripts
└── README.md           # This file
```

## Customization

You can customize the theme by editing the CSS variables in `src/styles/index.css`.

## License

This project is licensed under the MIT License. 