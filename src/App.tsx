import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './constants/constants';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Login } from './pages/Login/Login';
import { Registration } from './pages/Registration/Registration';
import { AppBlock, GlobalStyle } from './style';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import './App.css';
import Boards from './pages/Boards/Boards';
import { EditProfile } from './pages/EditProfile/EditProfile';
import { PublicRoute, PrivateRoute } from './Routes/Routes';

function App() {
  return (
    <>
      <Header />
      <AppBlock>
        <Routes>
          <Route path={ROUTES.welcomePage} element={<WelcomePage />} />
          <Route
            path={ROUTES.registration}
            element={<PublicRoute outlet={<Registration />} />}
          />
          <Route
            path={ROUTES.signIn}
            element={<PublicRoute outlet={<Login />} />}
          />
          <Route
            path={ROUTES.editProfile}
            element={<PrivateRoute outlet={<EditProfile />} />}
          />
          <Route
            path={ROUTES.boards}
            element={<PrivateRoute outlet={<Boards />} />}
          />
        </Routes>
      </AppBlock>
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
