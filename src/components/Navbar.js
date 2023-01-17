import React, { useRef, useState, useCallback } from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

import user from "../images/fikri_iom.jpeg";
import {
  AppBar,
  Avatar,
  Box,
  InputBase,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";

import { Autocomplete } from "@react-google-maps/api";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "100%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const Navbar = () => {
  const mapRef = useRef();
  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(15);
  }, []);
  
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Google Map Dashboard
        </Typography>
        <Autocomplete  >
          <Search>
            <InputBase sx={{ width:500}} placeholder="Search Places..." />
          </Search>
        </Autocomplete>
        <Icons>
          <Avatar sx={{ width: 30, height: 30 }} src={user} onClick={""} />
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
