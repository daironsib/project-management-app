import { Navigate } from 'react-router-dom';
import { ROUTES } from '../constants/constants';
import { useAppSelector } from '../hooks';

interface RoutesInterface {
  outlet: JSX.Element;
}

export const PrivateRoute: React.FC<RoutesInterface> = ({ outlet }) => {
  const { isAuth } = useAppSelector((state) => state.user);
  return isAuth ? outlet : <Navigate to={ROUTES.welcomePage} />;
};

export const PublicRoute: React.FC<RoutesInterface> = ({ outlet }) => {
  const { isAuth } = useAppSelector((state) => state.user);
  return isAuth ? <Navigate to={ROUTES.boards} /> : outlet;
};
