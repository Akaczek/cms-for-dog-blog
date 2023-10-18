import React from 'react';
import { ThemeProvider } from 'styled-components';

import Header from './components/Header'
import { theme } from './assets/theme';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  )
}

export default App
