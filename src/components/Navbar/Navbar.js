import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Avatar, Typography, Drawer, Box, Button } from '@material-ui/core';
import { Event, Notifications, ExitToApp } from '@material-ui/icons';
import './Navbar.css';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <AppBar id="navbar">
      <Toolbar sx={{ width: "100%" }}>
        <div className="navbar-left">
          <Button onClick={toggleDrawer(true)} style={{ display: 'flex', alignItems: 'center', textTransform: 'none' }}>
            <Avatar id='avatar' alt="School Logo" src="/path/to/school-logo.png" />
            <Typography id='name' variant="h6" style={{ marginLeft: '10px' }}>
              School Name
            </Typography>
          </Button>
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
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 500 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <div className="profile-card">
            <Avatar id='profile-avatar' alt="School Logo" src="/path/to/school-logo.png" />
            <Typography id='profile-name' variant="h6" style={{ marginLeft: '10px' }}>
              School Name
            </Typography>
            {/* <Typography id='profile-description' variant="body1" style={{ marginLeft: '10px' }}> */}
            {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum            </Typography> */}
          </div>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;