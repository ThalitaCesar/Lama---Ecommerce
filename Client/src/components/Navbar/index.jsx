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
    Right, 
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
          <SearchContainer>
              <Input placeholder="Search" />
              <Search style={{ color: "var(--black)", fontSize: 25 }} />
            </SearchContainer>
          </Center>
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
              <Badge color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
            </Link>
            <MenuItem>
              <Badge color="primary">
                <HeadsetMicRounded />
              </Badge>
            </MenuItem>
          </Right>
        </Wrapper>
      </Container>
    );
  };
  
  export default Navbar;