import React, { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import './Sidebar.css'; // Import the CSS file

const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <Box className="sidebar">
      <List component="nav">
        <ListItem button className="list-item">
          <ListItemText primary="Student Fee" className="list-item-text" />
        </ListItem>
        <ListItem button className="list-item">
          <ListItemText primary="Attendance tracking" className="list-item-text" />
        </ListItem>
        <ListItem button className="list-item">
          <ListItemText primary="Teacher Leaves" className="list-item-text" />
        </ListItem>
        <ListItem button onClick={toggleDropdown} className="list-item">
          <ListItemText primary="Academic Management" className="list-item-text" />
          {isDropdownOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={isDropdownOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className="nested list-item">
              <ListItemText primary="Schedule Teacher" className="list-item-text" />
            </ListItem>
            <ListItem button className="nested list-item">
              <ListItemText primary="Time Table" className="list-item-text" />
            </ListItem>
            <ListItem button className="nested list-item">
              <ListItemText primary="Subject Allocation" className="list-item-text" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button className="list-item">
          <ListItemText primary="Student Performance" className="list-item-text" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;