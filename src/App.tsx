import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './constants/constants';
import { Login } from './pages/Login/Login';
import { Registration } from './pages/Registration/Registration';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path={ROUTES.registration} element={<Registration />} />
        <Route path={ROUTES.login} element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
