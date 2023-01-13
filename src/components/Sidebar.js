import React from "react";
import { Map, Article } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <NavLink to="/">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Map />
                </ListItemIcon>
                <ListItemText primary="Map" />
              </ListItemButton>
            </ListItem>
          </NavLink>
          
          <NavLink to="/list">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Article />
                </ListItemIcon>
                <ListItemText primary="Visited Places" />
              </ListItemButton>
            </ListItem>
          </NavLink>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
