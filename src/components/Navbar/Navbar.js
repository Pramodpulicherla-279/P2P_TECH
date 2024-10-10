import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Avatar, Typography, Button, Menu, MenuItem } from '@material-ui/core';
import { CalendarToday, Notifications, ExitToApp } from '@material-ui/icons';
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
    <AppBar id="navbar" position="absolute">
      <Toolbar>
        <Avatar id="avatar" alt="User Name" src="/path/to/avatar.jpg" />
        <Typography variant="h6" id="titlename">
          Title Name
        </Typography>
        <IconButton id="icon" onClick={handleMenuOpen}>
          <CalendarToday />
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
        <Button id="logout_btn" startIcon={<ExitToApp />}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;