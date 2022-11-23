import { Suspense } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { Loading } from '../components/Loading/Loading';
import { ROUTES } from '../constants/constants';
import { useAppSelector } from '../hooks';

export const PrivateRoute: React.FC = () => {
  const { isAuth } = useAppSelector((state) => state.user);
  const { pathname } = useLocation();
  if (
    isAuth &&
    (pathname === ROUTES.signIn || pathname === ROUTES.registration)
  ) {
    return <Navigate to={ROUTES.boards} />;
  }
  if (
    !isAuth &&
    (pathname === ROUTES.editProfile || pathname === ROUTES.boards)
  ) {
    return <Navigate to={ROUTES.welcomePage} />;
  }
  return (
    <Suspense fallback={<Loading isLoading={true} />}>
      <Outlet />
    </Suspense>
  );
};
