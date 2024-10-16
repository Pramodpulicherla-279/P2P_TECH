import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Tooltip from '@mui/material/Tooltip';
import { ExpandLess, ExpandMore, CurrencyRupee, Monitor, Person, School, TrendingUp, Menu, ChevronLeft, Home } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import './Sidebar.css'; // Import the CSS file

const Sidebar = ({ visibleItems = [], hideProfile = false }) => { // Add hideProfile prop
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const navigateToHomepage = () => {
    navigate('/');
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
    <Box className={`sidebar ${isSidebarCollapsed ? 'collapsed' : ''}`}>
      {!hideProfile && (
        <Box className={`profile-card ${isSidebarCollapsed ? 'collapsed' : ''}`}>
          <Avatar alt="User Name" src="/static/images/avatar/1.jpg" className="avatar" />
          {!isSidebarCollapsed && <p className="username">School Name</p>}
        </Box>
      )}
      <List component="nav">
        <Tooltip title={isSidebarCollapsed ? "Expand Sidebar" : "Collapse Sidebar"} placement="right">
          <ListItem button className="list-item" sx={listItemHoverStyle} onClick={toggleSidebar}>
            {isSidebarCollapsed ? <Menu /> : <ChevronLeft />}
          </ListItem>
        </Tooltip>
        {visibleItems.includes('home') && (
          <Tooltip title="Home" placement="right">
            <ListItem button className="list-item" sx={listItemHoverStyle} onClick={navigateToHomepage}>
              <Home sx={{ marginRight: 1 }} />
              {!isSidebarCollapsed && <ListItemText primary="Home" className="list-item-text" />}
            </ListItem>
          </Tooltip>
        )}
        {visibleItems.includes('studentFee') && (
          <Tooltip title="Student Fee" placement="right">
            <ListItem button className="list-item" sx={listItemHoverStyle}>
              <CurrencyRupee sx={{ marginRight: 1 }} />
              {!isSidebarCollapsed && <ListItemText primary="Student Fee" className="list-item-text" />}
            </ListItem>
          </Tooltip>
        )}
        {visibleItems.includes('attendanceTracking') && (
          <Tooltip title="Attendance tracking" placement="right">
            <ListItem button className="list-item" sx={listItemHoverStyle}>
              <Monitor sx={{ marginRight: 1 }} />
              {!isSidebarCollapsed && <ListItemText primary="Attendance tracking" className="list-item-text" />}
            </ListItem>
          </Tooltip>
        )}
        {visibleItems.includes('teacherLeaves') && (
          <Tooltip title="Teacher Leaves" placement="right">
            <ListItem button className="list-item" sx={listItemHoverStyle}>
              <Person sx={{ marginRight: 1 }} />
              {!isSidebarCollapsed && <ListItemText primary="Teacher Leaves" className="list-item-text" />}
            </ListItem>
          </Tooltip>
        )}
        {visibleItems.includes('academicManagement') && (
          <Tooltip title="Academic Management" placement="right">
            <ListItem button onClick={toggleDropdown} className="list-item" sx={listItemHoverStyle}>
              <School sx={{ marginRight: 1 }} />
              {!isSidebarCollapsed && <ListItemText primary="Academic Management" className="list-item-text" />}
              {!isSidebarCollapsed && (isDropdownOpen ? <ExpandLess /> : <ExpandMore />)}
            </ListItem>
          </Tooltip>
        )}
        <Collapse in={isDropdownOpen && !isSidebarCollapsed} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Tooltip title="Schedule Teacher" placement="right">
              <ListItem button className="nested list-item" style={nestedListItemStyle} sx={listItemHoverStyle}>
                <ListItemText primary="Schedule Teacher" className="nested-list-item-text" sx={nestedListItemTextStyle} />
              </ListItem>
            </Tooltip>
            <Tooltip title="Time Table" placement="right">
              <ListItem button className="nested list-item" style={nestedListItemStyle} sx={listItemHoverStyle}>
                <ListItemText primary="Time Table" className="nested-list-item-text" sx={nestedListItemTextStyle} />
              </ListItem>
            </Tooltip>
            <Tooltip title="Subject Allocation" placement="right">
              <ListItem button className="nested list-item" style={nestedListItemStyle} sx={listItemHoverStyle}>
                <ListItemText primary="Subject Allocation" className="nested-list-item-text" sx={nestedListItemTextStyle} />
              </ListItem>
            </Tooltip>
          </List>
        </Collapse>
        {visibleItems.includes('studentPerformance') && (
          <Tooltip title="Student Performance" placement="right">
            <ListItem button className="list-item" sx={listItemHoverStyle}>
              <TrendingUp sx={{ marginRight: 1 }} />
              {!isSidebarCollapsed && <ListItemText primary="Student Performance" className="list-item-text" />}
            </ListItem>
          </Tooltip>
        )}
      </List>
    </Box>
  );
};

export default Sidebar;