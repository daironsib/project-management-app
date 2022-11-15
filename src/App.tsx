import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ROUTES } from './constants/constants';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Registration } from './pages/Registration/Registration';

function App() {
  return (
    <>
      <Header />
      <div className='app'>
        <Routes>
          <Route path={ROUTES.registration} element={<Registration />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
