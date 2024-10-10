import React from 'react';
import { AppBar, Toolbar, IconButton, Avatar, Typography, Button } from '@material-ui/core';
import { CalendarToday, Notifications, ExitToApp } from '@material-ui/icons';
import './Navbar.css';

const Navbar = () => {
  return (
    <AppBar id="navbar" position="absolute">
      <Toolbar>
        <Avatar id="avatar" alt="User Name" src="/path/to/avatar.jpg" />
        <Typography variant="h6" id="titlename" >
          Title Name
        </Typography>
        <IconButton id="icon">
          <CalendarToday />
        </IconButton>
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