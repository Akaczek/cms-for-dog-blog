import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import AdminPanel from './adminPanel/AdminPanel';
import PublicApp from './publicApp/PublicApp';
import LoginPage from './adminPanel/LoginPage';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
  }
`;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='admin/*'
          element={
            <>
              <GlobalStyle />
              <AdminPanel />
            </>
          }
        />
        <Route path='login' element={<LoginPage />} />
        <Route path='*' element={<PublicApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
