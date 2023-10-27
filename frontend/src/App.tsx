import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AdminPanel from './adminPanel/AdminPanel';
import PublicApp from './publicApp/PublicApp';
import { theme } from './assets/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PublicApp />} />
          <Route path='/admin' element={<AdminPanel />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
