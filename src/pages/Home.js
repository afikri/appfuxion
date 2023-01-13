import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import {
  Box,
  Card,
  CardMedia,
  Stack,
} from "@mui/material";

const Home = () => {
  return (
    <Box bgcolor={"background.default"}>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Box flex={4} p={{ xs: 0, md: 2 }}>
          <Card>
            <CardMedia
              component="img"
              height="20%"
              image="https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Paella dish"
            />
          </Card>
        </Box>
      </Stack>
    </Box>
  );
};

export default Home;
