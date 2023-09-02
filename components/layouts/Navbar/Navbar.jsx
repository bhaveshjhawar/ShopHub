"use client"
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    // Stack,
    Button,
    Tabs,Tab,
    useMediaQuery,
    useTheme, Link
    
    } from '@mui/material'
    
    import React,{useContext, useState} from 'react'

    // To access the number of items in cart from cart context
    import CartContext from "@/context/CartContext"

    // import Link from 'next/link';
    
    import DrawerComp from './DrawerComp';
    
    import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
    import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
    // import HomeIcon from '@mui/icons-material/Home';
    // import InfoIcon from '@mui/icons-material/Info';
    // import ArticleIcon from '@mui/icons-material/Article';
    import LoginIcon from '@mui/icons-material/Login';
    import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Search from './Search';
    
    // Array for services 
    const pages=['About','Contact Us','Seller','Rewards',]
    
    const MuiNavbar=()=>{
    
        // Tabs Underline Working
        const [tabValue,setTabValue]=useState()
    
        // For getting hold of the view points of the screen
        const theme = useTheme();
        const isMatch = useMediaQuery(theme.breakpoints.down("md"))
    
    
        // Cart Items number 
        const {cart }= useContext(CartContext)
        const cartItems =  cart?.cartItems?.length
        return(
            <>
            <AppBar position='static' sx={{backgroundColor:"#001C30"}}> 
            <Toolbar>
                <IconButton size='large' color='inherit' edge='start'>
                <Link
                  href="/"
                  variant="body1"
                  color="inherit"
                  
                >
                <ShoppingCartIcon/>
                </Link>
                </IconButton>
    
                {/* Conditions for view points */}
                {
                    isMatch ? (
                        <>
                        <Typography variant='h6' component='div' sx={{flexGrow:1}}>ShopHub</Typography>
                        <DrawerComp />
                        </>
                    ):
                    (
                        <>
                                    <Tabs textColor='inherit' value={tabValue} onChange={(event,value)=>{setTabValue(value)}} indicatorColor='secondary' >
                                        {
                                            pages.map((page,index)=>(
                                                <Link href={`/${page}`}>
                                                <Tab sx={{color:'white'}} label={page} key={index}></Tab>
                                                </Link>
                                            ))
                                        }
                    
                                        </Tabs>
                                        <Search/>
                
    
                    <Button variant='outlined' sx={{marginLeft:'auto'}} color='inherit' startIcon={<LoginIcon/>} >Login</Button>
                    <Button variant='outlined' sx={{marginLeft:'1vw'}} color='inherit' startIcon={<PersonAddIcon/>} >Sign Up</Button>
                    <Link
                  href="/cart"
                  variant="body1"
                  color="inherit"
                  
                >
                    <Button variant='outlined' sx={{marginLeft:'1vw'}} color='inherit' startIcon={<ShoppingCartCheckoutIcon/>} >{`Cart(${cartItems || 0})`}</Button>
                </Link>
                        </>
                    )
                }
    
    
            
            </Toolbar>
            
            
            </AppBar>
            </>
        )
    }
    
    export default MuiNavbar