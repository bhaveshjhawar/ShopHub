"use client"
import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Box,
  ListItem
  ,Switch, Link

} from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LoginIcon from '@mui/icons-material/Login';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
// import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import StorefrontIcon from '@mui/icons-material/Storefront';
// import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import Brightness3Icon from '@mui/icons-material/Brightness3';


// import Icon from '@mui/icons-material';
// import Icon from "@material-ui/core/material-icons";


import WidgetsIcon from "@mui/icons-material/Widgets";
// const pages = [{name:"About",link:"/cart",icon:"NavigateNextIcon"}, {name:"Pricing",link:"/cart",icon:"NavigateNextIcon"}, {name:"Docs",link:"/cart",icon:"NavigateNextIcon"}];
const pages = [{name:"Home",link:"/cart",icon:<HomeIcon/>}, {name:"About",link:"/cart",icon:<StorefrontIcon/>},{name:"Contact Us",link:"/cart",icon:< AlternateEmailIcon/>},{name:"Seller",link:"/cart",icon:< PeopleAltIcon/>},{name:"Rewards",link:"/cart",icon:<MonetizationOnIcon/>},{name:"Log In",link:"/cart",icon:<LoginIcon/>},{name:"Sign Up",link:"/cart",icon:<PersonAddIcon/>},{name:"Cart",link:"/cart",icon:<ShoppingCartCheckoutIcon/>}];

const DrawerComp = () => { 
  // Open Drawer Value State
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer
      anchor='left'
        open={openDrawer}
        onClose={() => {
          setOpenDrawer(false);
        }}
      >
       

        <Box  display='inline' flex={1} p={2} >
      <Box >
      <List >
      {pages.map((page, index) => (
        <ListItem key ={index}>
        <ListItemButton key={index} onClick={() => {
          setOpenDrawer(false);
        }} component='a' href='/home'>
          <ListItemIcon>
        {page.icon}
          </ListItemIcon>
          <Link
            href={page.link}
            variant="body1"
            underline="hover"
            color="inherit"
          >
          <ListItemText>{page.name}</ListItemText>
          </Link>
        </ListItemButton>
        </ListItem>
      ))} 
     

      <ListItem>
      <ListItemButton>
          <ListItemIcon>
              <Brightness3Icon/>
          </ListItemIcon>
          <Switch color='secondary' onChange={e=>setMode(mode==="light"?"dark":"light")}/> 
          </ListItemButton>
      </ListItem>


      </List>
      
        
      </Box>

      </Box>
            </Drawer>
      <IconButton
        onClick={() => {
          setOpenDrawer(!openDrawer);
        }}
        color="inherit"
      >
        <WidgetsIcon sx={{ color: "white" }} />
      </IconButton>
    </>
  );
};
export default DrawerComp;
