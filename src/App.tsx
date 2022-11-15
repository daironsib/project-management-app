import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ROUTES } from './constants/constants';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Registration } from './pages/Registration/Registration';
import { AppBlock, GlobalStyle } from './style';

function App() {
  return (
    <>
      <Header />
      <AppBlock>
        <Routes>
          <Route path={ROUTES.registration} element={<Registration />} />
        </Routes>
      </AppBlock>
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
