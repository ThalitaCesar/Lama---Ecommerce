import React from "react";
import { Avatar, Badge } from "@material-ui/core";
import { 
  AirlineSeatIndividualSuiteSharp,
    HeadsetMicRounded,
    Language, 
    Person, 
    PersonOutline, 
    PortableWifiOffOutlined, 
    Search, 
    ShoppingCartOutlined, 
    VerifiedUserOutlined
} from "@material-ui/icons";
import { 
    Center, 
    Container, 
    Input, 
    Left, 
    Logo, 
    MenuItem, 
    NotMobile, 
    Right, 
    SearchBox, 
    SearchContainer, 
    Wrapper 
} from "./styles";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <Container>
        <Wrapper>
          <Left>
          <Link to="/" style={{color:"var(--black)", textDecoration:"none"}}>
          <Logo>LAMA.</Logo>
          </Link>
          </Left>
          <Center>        
            <SearchBox>
            <input class="search-input" type="text" name="" placeholder="Pesquise"/>
            <a href="#" class="search-btn">
            <Search  size={28} style={{ color: "var(--black)" }} />
            </a>     
            </SearchBox>
          </Center>
        
          <NotMobile>
          <Right>
            <Link to="/user" style={{color:"var(--black)"}}>
            <MenuItem>
            <Badge color="primary">
                <PersonOutline/>
            </Badge>
            </MenuItem>
            </Link>
            <Link to="/cart" style={{color:"var(--black)"}}>
            <MenuItem>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
           </Link>
            <Link to="/help" style={{color:"var(--black)"}}>
            <MenuItem>
              <Badge color="primary">
                <HeadsetMicRounded />
              </Badge>
            </MenuItem>
            </Link>
          </Right>
          </NotMobile>
        </Wrapper>
      </Container>
    );
  };
  
  export default Navbar;