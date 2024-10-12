import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem } from '@material-ui/core';
import { Event, Notifications, ExitToApp } from '@material-ui/icons';
import './Navbar.css';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar id="navbar">
      <Toolbar>
        <IconButton id="icon" onClick={handleMenuOpen}>
          <Event />
        </IconButton>
        <Menu
          id="calendar-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          PaperProps={{
            style: {
              width: '180px', // Adjust the width as needed
            },
          }}
        >
          <MenuItem onClick={handleMenuClose}>School Events</MenuItem>
          <MenuItem onClick={handleMenuClose}>Holidays</MenuItem>
        </Menu>
        <IconButton id="icon">
          <Notifications />
        </IconButton>
        <IconButton id="logout_icon">
          <ExitToApp />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;