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
import { useNavigate, useLocation } from 'react-router-dom';
import '../assets/fonts.css';

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: 'Home', targetId: 'home' },
    { label: 'My Art', targetId: 'art' },
    { label: 'How to Buy', targetId: 'how-to-buy' },
    { label: 'About Me', targetId: 'about-me' },
    { label: 'Blogs', targetId: 'blogs' },
    { label: 'Contact', targetId: 'contact' },
  ];

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleScroll = (id: string) => {
    handleClose();
    if (location.pathname !== '/') {
      navigate('/#' + id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#F9F5F2',
        color: '#2C2C2C',
        boxShadow: 'none',
      }}
    >
      <Toolbar>
        <Typography variant="h5" sx={{ flexGrow: 1, fontFamily: 'Mulegh', color: '#2C2C2C' }}>
          Empirical Colours
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              edge="end"
              onClick={handleMenuClick}
              sx={{ color: '#2C2C2C' }}
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
                color: '#2C2C2C',
                mx: 1,
                fontFamily: "'Fira Sans', sans-serif",
                fontWeight: 400,
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.1)',
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
