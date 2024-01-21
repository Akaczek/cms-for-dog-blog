import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AdminPanel from './adminPanel/AdminPanel';
import PublicApp from './publicApp/PublicApp';
import LoginPage from './adminPanel/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PublicApp />} />
        <Route path='/admin' element={<AdminPanel />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
