import { NavLink } from 'react-router-dom';
import { Box, MenuItem, MenuList, useTheme } from '@mui/material';
import { Bookmark, LiveTv, Theaters } from '@mui/icons-material';
import { Logo } from 'assets/svg/Logo';

export function Nav() {
  const { app } = useTheme();
  const isActive = ({ isActive }: { isActive: boolean }) => ({
    color: isActive ? app.pureWhite : app.greyishBlue,
  });
  return (
    <Box
      sx={{
        maxWidth: 96,
        py: 4,
        px: 3.5,
        backgroundColor: app.semiDarkBlue,
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box sx={{ mb: 9.5 }}>
        <Logo />
      </Box>
      <MenuList sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        <MenuItem
          sx={{
            p: 0,
            width: 20,
            height: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <NavLink to="/" style={isActive}>
            <Theaters
              sx={{
                color: 'inherit',
                fontSize: 30,
                ':hover': { fill: app.red },
              }}
            />
          </NavLink>
        </MenuItem>
        <MenuItem
          sx={{
            p: 0,
            width: 20,
            height: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <NavLink to="/tvshows" style={isActive}>
            <LiveTv
              sx={{
                color: 'inherit',
                fontSize: 30,
                ':hover': { fill: app.red },
              }}
            />
          </NavLink>
        </MenuItem>
        <MenuItem
          sx={{
            p: 0,
            width: 20,
            height: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <NavLink to="/bookmarks" style={isActive}>
            <Bookmark
              sx={{
                color: 'inherit',
                fontSize: 30,
                ':hover': { fill: app.red },
              }}
            />
          </NavLink>
        </MenuItem>
      </MenuList>
    </Box>
  );
}
