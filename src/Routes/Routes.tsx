import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { ROUTES } from '../constants/constants';
import { useAppSelector } from '../hooks';

interface RoutesInterface {
  children: ReactElement;
}

export const PrivateRoute: React.FC<RoutesInterface> = ({ children }) => {
  const { isAuth } = useAppSelector((state) => state.user);
  if (!isAuth) {
    return <Navigate to={ROUTES.welcomePage} />;
  }
  return children;
};

export const AuthRoute: React.FC<RoutesInterface> = ({ children }) => {
  const { isAuth } = useAppSelector((state) => state.user);
  if (isAuth) {
    return <Navigate to={ROUTES.boards} />;
  }
  return children;
};
