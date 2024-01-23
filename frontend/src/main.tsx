import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import App from './App';
import './index.css';
import { theme } from './assets/theme';
import { AuthProvider } from './lib/context/authContext';
import { PagesProvider } from './lib/context/pagesContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <PagesProvider>
          <App />
        </PagesProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
