import { Badge, BottomNavigationAction, Box } from '@material-ui/core';
import { HeadsetMicRounded, HomeOutlined, PersonOutline, ShoppingCartOutlined } from '@material-ui/icons';
import * as React from 'react';
import { Link } from 'react-router-dom';
import {FooterStyle} from  "./styles";




function FooterMobile() {

  return (
  
      <FooterStyle>
    <Box sx={{ width: 420 }} >
     
        <Link to="/" style={{color:"var(--black)", textDecoration:"none"}}>
        <BottomNavigationAction 
        icon={<HomeOutlined />} />
        </Link>

        <Link to="/user" style={{color:"var(--black)"}}>
        <BottomNavigationAction 
        icon={<PersonOutline />} />
        </Link>

        <Link to="/cart" style={{color:"var(--black)"}}>   
        <BottomNavigationAction  badgeContent={4} 
        icon={<ShoppingCartOutlined />} />
        </Link>

        <Link to="/help" style={{color:"var(--black)"}}>
        <BottomNavigationAction 
        icon={<HeadsetMicRounded />} />
        </Link>

    </Box>
    </FooterStyle>
  
  );
}

export default FooterMobile;