import React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function Appbar({ drawerwidth, handleDrawerToggle }) {



    return (
        <Box sx={{ bg: "#fafafa" }}>
            <AppBar
                elevation={0}
                position="fixed"
                sx={{
                    width: {sm: `calc(100% - ${drawerwidth}px)`},
                    ml: { sm: `${drawerwidth}px` },
                    backgroundColor: "#cc2a36", //B51A2B E4665C
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        To Do App
                    </Typography>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>

                </Toolbar>
            </AppBar>
        </Box>)
}

