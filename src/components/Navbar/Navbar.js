import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Avatar, Typography } from '@material-ui/core';
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
      <Toolbar sx={{width: "100%"}}>
        <div className="navbar-left">
          <Avatar id='avatar' alt="School Logo" src="/path/to/school-logo.png" />
          <Typography id='name' variant="h6" style={{ marginLeft: '10px' }}>
            School Name
          </Typography>
        </div>
        <div className="navbar-right">
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
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;