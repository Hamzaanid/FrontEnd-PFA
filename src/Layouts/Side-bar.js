import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import PeopleIcon from '@mui/icons-material/People';
import { useLocation } from 'react-router-dom';
import logoEnsias from './../assets/final.png';
import {
  SubjectOutlined,
  LocalParkingRounded,
  LocationCityRounded,
  AnnouncementRounded,
  AddBoxRounded,
  DoNotDisturbOnRounded,
  AssignmentLate,
  HomeWork
} from "@mui/icons-material";

// import useAuth from "../Compenents/Auth/auth";

export default function SideBar({
  drawerWidth,
  handleDrawerToggle,
  navigate,
  mobileOpen,
  display,
  variant,
}) {
  const location = useLocation();
  // const auth = useAuth();

  const menuItem = [
    {
      text: "Home",
      icon: <SubjectOutlined color="dark" />,
      path: "/Home",
      role:'user'
    },
    {
      text: "Service Parking",
      icon: <LocalParkingRounded color="dark" />,
      path: "/PageParking",
      role:'user'
    },
    {
      text: "residence",
      icon: <HomeWork color="dark" />,
      path: "/residence",
      role:'user'
    },
    { 
      text: "Service Internat",
      icon: <LocationCityRounded color="dark" />,
      path: "/PageInternat",
      role:'admin'
    },
    
    {
      text: "Reclamation",
      icon: <DoNotDisturbOnRounded color="dark" />,
      path: "/pageReclamation",
      role:'user'
    },
    {
      text: "ListeReclamations",
      icon: <AssignmentLate color="dark"/>,
      path: "/ListeReclamations",
      role:'admin'
    },
    {
      text: "consulter Annoncement",
      icon: <AnnouncementRounded color="dark" />,
      path: "/PageAnnonce",
      role:'user'
    },
    {
      text: "Annoncement",
      icon: <AddBoxRounded color="dark" />,
      path: "/PageAddAnnonce",
      role:'admin'
    },
    {
      text: "Gestion users",
      icon: <PeopleIcon color="dark" />,
      path: "/GestionUsers",
      role:'admin'
    },
  ];
  const drawer = (
    <div>
      <List>
        <ListItem dense>
          <Box
          sx={{border:"none", mb:2}}
          >
            <Card sx={{maxWidth: 70,border:"none" }}>
              <CardMedia sx={{ maxWidth: 70,border:"none" }}
                component="img"
                src={logoEnsias}
                alt="My Image"
              />
            </Card>
          </Box>
        </ListItem>
        {menuItem.map((item) => (
          
          <ListItem
          dense
          sx={{backgroundColor: location.pathname === item.path ? "#384358" : ""}}
            button
            key={item.text}
            onClick={() => {
              handleDrawerToggle();
              return navigate(item.path);
            }}
          >
            <ListItemIcon sx={{color:"#fe1929"}}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} ></ListItemText>
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
          backgroundColor: "#000000", //424242  424F60  4f372d
          color: "common.white",
          width: 280,
        },
      }}
    >
      {drawer}
    </Drawer>
  );
}
