import React, { useCallback, useRef } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { Box, Card, Stack } from "@mui/material";
const libraries = ["places"];

const mapContainerStyle = {
  height: "70vh",
  width: "80vw",
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const center = {
  lat: -6.1754,
  lng: 106.8272,
};

const Home = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const mapRef = useRef();

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <Box bgcolor={"background.default"}>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Box flex={4} p={{ xs: 0, md: 2 }}>
          <Card>
            <GoogleMap
              id="map"
              mapContainerStyle={mapContainerStyle}
              zoom={15}
              center={center}
              options={options}
              onLoad={onMapLoad}
            ></GoogleMap>
          </Card>
        </Box>
      </Stack>
    </Box>
  );
};

export default Home;
