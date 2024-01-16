import { Box } from '@mui/material';
import { Nav } from '../Nav';
import { Content } from '../Content';
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <Box
      sx={{
        p: 4,
        display: 'grid',
        gridTemplateColumns: 'minmax(min-content, auto) 11fr',
        gap: 4.5,
      }}
    >
      <Nav />
      <Content>
        <Outlet />
      </Content>
    </Box>
  );
}
