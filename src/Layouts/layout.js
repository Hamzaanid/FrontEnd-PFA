import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Appbar from "./AppBar.js";
import SideBar from "./Side-bar.js";
import { Outlet, useNavigate } from "react-router-dom";
const drawerWidth = 240;

export default function ResponsiveDrawer() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const navigate = useNavigate();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    return (
        <Box sx={{ display: 'flex' }}>
            {/* Box App Bar */}
            <Appbar drawerwidth={drawerWidth} handleDrawerToggle={handleDrawerToggle}>
            </Appbar>
                
            {/* Box Side Bar */}
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth, xs:0 } }}
                aria-label="mailbox folders"
            >
                <SideBar
                    drawerWidth={drawerWidth}
                    handleDrawerToggle={handleDrawerToggle}
                    navigate={navigate}
                    mobileOpen={mobileOpen}
                    display={{ xs: 'block', sm: 'none' }}
                    variant="temporary"
                />
                <SideBar
                    drawerWidth={drawerWidth}
                    handleDrawerToggle={handleDrawerToggle}
                    navigate={navigate}
                    mobileOpen={mobileOpen}
                    display={{ xs: 'none', sm: 'block' }}
                    variant="permanent"
                />
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    p:1,
                    // backgroundColor: "#f4f6f8",
                    height: '100%'
                }}
            >
                <Toolbar />
                <Outlet/>

            </Box>
        </Box>
    );
}