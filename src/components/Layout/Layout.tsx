import { Outlet, Navigate } from 'react-router-dom';
import { Nav } from '../Nav';
import { Content } from '../Content';

export function Layout() {
  const isAuth = false;
  return isAuth ? (
    <>
      <Nav />
      <Content>
        <Outlet />
      </Content>
    </>
  ) : (
    <Navigate to="/login" />
  );
}
