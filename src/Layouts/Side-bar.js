import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { useLocation } from 'react-router-dom';
import logoEnsias from './../assets/logoEnsias.png';
import {
  SubjectOutlined,
  LocalParkingRounded,
  LocationCityRounded,
  AnnouncementRounded,
  AddBoxRounded,
  DoNotDisturbOnRounded,
} from "@mui/icons-material";


export default function SideBar({
  drawerWidth,
  handleDrawerToggle,
  navigate,
  mobileOpen,
  display,
  variant,
}) {
  const location = useLocation();
  const menuItem = [
    {
      text: "Home",
      icon: <SubjectOutlined color="secondary" />,
      path: "/Home",
    },
    {
      text: "Service Parking",
      icon: <LocalParkingRounded color="secondary" />,
      path: "/PageParking",
    },
    {
      text: "Service Internat",
      icon: <LocationCityRounded color="secondary" />,
      path: "/PageInternat",
    },
    {
      text: "consulter Annoncement",
      icon: <AnnouncementRounded color="secondary" />,
      path: "/PageAnnonce",
    },
    {
      text: "Annoncement",
      icon: <AddBoxRounded color="secondary" />,
      path: "/PageAddAnnonce",
    },
    {
      text: "Reclamation",
      icon: <DoNotDisturbOnRounded color="secondary" />,
      path: "/pageReclamation",
    },
  ];
  const drawer = (
    <div>
      <List>
        <ListItem>
          <Box
          >
            <Card sx={{mx:6, maxWidth: drawerWidth }}>
              <CardMedia sx={{ maxWidth: drawerWidth }}
                component="img"
                src={logoEnsias}
                alt="My Image"
              />
            </Card>
          </Box>
        </ListItem>
        {menuItem.map((item) => (
          <ListItem
          sx={{backgroundColor: location.pathname === item.path ? "#384358" : ""}}
            button
            key={item.text}
            onClick={() => {
              handleDrawerToggle();
              return navigate(item.path);
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text}></ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Drawer
      variant={variant}
      open={mobileOpen}
      onClose={handleDrawerToggle}
      sx={{
        display: display,
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        bg: "neutral.800",
        p: 4,
      }}
      // ModalProps={{
      //   keepMounted: true, // Better open performance on mobile.
      // }}

      PaperProps={{
        sx: {
          backgroundColor: "#003041", //424242  424F60  4f372d
          color: "common.white",
          width: 280,
        },
      }}
    >
      {drawer}
    </Drawer>
  );
}
