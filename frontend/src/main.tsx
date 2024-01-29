import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import App from './App';
import './index.css';
import { theme } from './assets/theme';
import { AuthProvider } from './lib/context/authContext';
import { PagesProvider } from './lib/context/pagesContext';
import { DogsProvider } from './lib/context/dogsContext';
import { UsersProvider } from './lib/context/usersContext';
import { EditComponentProvider } from './lib/context/editComponentContext';
import { GalleriesProvider } from './lib/context/galleriesContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <PagesProvider>
          <DogsProvider>
            <UsersProvider>
              <EditComponentProvider>
                <GalleriesProvider>
                  <App />
                </GalleriesProvider>
              </EditComponentProvider>
            </UsersProvider>
          </DogsProvider>
        </PagesProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
