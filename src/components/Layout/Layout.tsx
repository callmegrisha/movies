import { Outlet } from 'react-router-dom';
import { Nav } from '../Nav';
import { Content } from '../Content';

export function Layout() {
  return (
    <>
      <Nav />
      <Content>
        <Outlet />
      </Content>
    </>
  );
}
