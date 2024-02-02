import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from 'hooks/useAuth.ts';

interface RequireAuthProps {
  children: ReactNode;
}

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const { isAuth } = useAuth();

  if (!isAuth) return <Navigate to="/login" />;

  return children;
};
