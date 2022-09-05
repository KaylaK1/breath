// Main entry point of application - referenced in webpack.config.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import {} from 'styled-components/cssprop';

// The components we render based on user selection
import App from './App';
import StyledSiteHeader from './components/HeaderBar';
import SinglePersonView from './components/SinglePersonView';

import { ThemeProvider } from 'styled-components';
import { siteTheme } from './site-theme';

// BrowserRouter allows modification of the URL, Routes matches url paths to components
// 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={siteTheme}>
      <StyledSiteHeader className=''/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='people' element={<SinglePersonView data={{
            id: 0,
            name: '',
            location: ''
          }} className={''} />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
