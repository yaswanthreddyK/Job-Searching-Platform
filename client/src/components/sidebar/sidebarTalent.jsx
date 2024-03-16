import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Button } from '@mui/material';
import { AccountCircle, Dashboard, People, Settings, Mail, Message } from '@mui/icons-material';
import {  NavLink, useLocation } from 'react-router-dom';
import "./Sidebar.css"
const SidebarTalent = () => {
  const location = useLocation()
  return (
    <Drawer
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          position: 'relative',
          height: "100vh",
          paddingTop: "3em"
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List>

        <NavLink to=".">
        <ListItem button>
          <ListItemIcon>
            <AccountCircle className='icon'/>
          </ListItemIcon>
          <ListItemText primary="My Profile"/>
        </ListItem>
        </NavLink>

          <NavLink to="dashboard">
        <ListItem button>
          <ListItemIcon>
            <Dashboard className='icon'/>
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
          </NavLink>
          <NavLink to="proposals">
        <ListItem button>
          <ListItemIcon>
            <People className='icon'/>
          </ListItemIcon>
          {/* Todo: */}
          <ListItemText primary="Proposals" />
        </ListItem>
          </NavLink>

          <NavLink to="invites">
        <ListItem button>
          <ListItemIcon>
            <Mail className='icon'/>
          </ListItemIcon>
          <ListItemText primary="Invites" />
        </ListItem>
          </NavLink>
          <NavLink to="messages">
        <ListItem button>
          <ListItemIcon>
            <Message className='icon'/>
          </ListItemIcon>
          <ListItemText primary="Messages" />
        </ListItem>
        </NavLink>
      </List>
      <Divider />
      <List>
        
        <NavLink to="settings">
        <ListItem button>
          <ListItemIcon>
            <Settings className='icon'/>
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        </NavLink>
        
      </List>
      <Divider />
    </Drawer>
  );
}

export default SidebarTalent;
