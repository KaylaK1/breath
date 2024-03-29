// Main entry point of application - referenced in webpack.config.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import {} from 'styled-components/cssprop';
import App from './App';
// import './index.css';
import { ThemeProvider } from 'styled-components';
import { siteTheme } from './site-theme';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={siteTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
