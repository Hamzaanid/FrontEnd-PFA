import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useLocation } from 'react-router-dom';
// import useAuth from "../Compenents/Auth/auth";

export default function SideBar({handleDrawerToggle,item,navigate}){
    const location = useLocation();
  return (
          
        item && 
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
    
  );
}
