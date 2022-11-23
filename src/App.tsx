import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './constants/constants';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { AppBlock, GlobalStyle } from './style';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { lazy } from 'react';
import './App.css';

const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));
const Boards = lazy(() => import('./pages/Boards/Boards'));
const Registration = lazy(() => import('./pages/Registration/Registration'));
const Login = lazy(() => import('./pages/Login/Login'));
const EditProfile = lazy(() => import('./pages/EditProfile/EditProfile'));

function App() {
  return (
    <>
      <Header />
      <AppBlock>
        <Routes>
          <Route path={'/'} element={<PrivateRoute />}>
            <Route path={ROUTES.welcomePage} element={<WelcomePage />} />
            <Route path={ROUTES.registration} element={<Registration />} />
            <Route path={ROUTES.signIn} element={<Login />} />
            <Route path={ROUTES.editProfile} element={<EditProfile />} />
            <Route path={ROUTES.boards} element={<Boards />} />
          </Route>
        </Routes>
      </AppBlock>
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
