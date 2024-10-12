import React, { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import './Sidebar.css'; // Import the CSS file

const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  const nestedListItemStyle = {
    backgroundColor: '#faaa72',
  };

  const nestedListItemTextStyle = {
    color: '#181818',
  };

  const listItemHoverStyle = {
    transition: 'background-color 0.3s ease-in-out',
    '&:hover': {
      backgroundColor: '#ff8040',
    },
  };

  return (
    <Box className="sidebar">
      <Box className="profile-card">
        <Avatar alt="User Name" src="/static/images/avatar/1.jpg" className="avatar" />
        <p className="username">User Name</p>
      </Box>
      <List component="nav">
        <ListItem button className="list-item" sx={listItemHoverStyle}>
          <ListItemText primary="Student Fee" className="list-item-text"  />
        </ListItem>
        <ListItem button className="list-item" sx={listItemHoverStyle}>
          <ListItemText primary="Attendance tracking" className="list-item-text"  />
        </ListItem>
        <ListItem button className="list-item" sx={listItemHoverStyle}>
          <ListItemText primary="Teacher Leaves" className="list-item-text"/>
        </ListItem>
        <ListItem button onClick={toggleDropdown} className="list-item" sx={listItemHoverStyle}>
          <ListItemText primary="Academic Management" className="list-item-text" />
          {isDropdownOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={isDropdownOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className="nested list-item" style={nestedListItemStyle} sx={listItemHoverStyle}>
              <ListItemText primary="Schedule Teacher" className="nested-list-item-text" sx={nestedListItemTextStyle} />
            </ListItem>
            <ListItem button className="nested list-item" style={nestedListItemStyle} sx={listItemHoverStyle}>
              <ListItemText primary="Time Table" className="nested-list-item-text" sx={nestedListItemTextStyle} />
            </ListItem>
            <ListItem button className="nested list-item" style={nestedListItemStyle} sx={listItemHoverStyle}>
              <ListItemText primary="Subject Allocation" className="nested-list-item-text" sx={nestedListItemTextStyle} />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button className="list-item" sx={listItemHoverStyle}>
          <ListItemText primary="Student Performance" className="list-item-text"  />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;