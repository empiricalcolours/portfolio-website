import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // Label and target id
  const navItems = [
    { label: 'Home', targetId: 'home' },
    { label: 'My Art', targetId: 'art' },
    { label: 'Contact', targetId: 'contact' },
  ];

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    handleClose();
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'white',
        color: 'black',
        boxShadow: 'none',
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Empirical Colours
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              edge="end"
              onClick={handleMenuClick}
              sx={{ color: 'black' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {navItems.map((item) => (
                <MenuItem
                  key={item.label}
                  onClick={() => handleScroll(item.targetId)}
                >
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          navItems.map((item) => (
            <Button
              key={item.label}
              onClick={() => handleScroll(item.targetId)}
              sx={{
                color: 'black',
                mx: 1,
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                },
              }}
            >
              {item.label}
            </Button>
          ))
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
