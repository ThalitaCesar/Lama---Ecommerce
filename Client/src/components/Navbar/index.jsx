import React, { useContext, useEffect, useState } from "react";
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
  VerifiedUserOutlined,
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
  Wrapper,
} from "./styles";
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";

const Navbar = () => {
  const { orderQuantity } = useContext(GlobalContext);
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();
  const [cartQuantity, setCartQuantity] = useState(orderQuantity);

  useEffect(() => {
    setCartQuantity(orderQuantity);
  }, [orderQuantity]);

  const handleSearch = () => {
    if (searchTerm.length >= 3) {
      history.push(`/search?term=${searchTerm}`);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Link
            to="/"
            style={{
              color: "var(--black)",
              textDecoration: "none",
            }}
          >
            <Logo>LAMA.</Logo>
          </Link>
        </Left>
        <Center>
          <SearchBox>
            <input
              className="search-input"
              type="text"
              name=""
              placeholder="Pesquise"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />
            <a href="#" className="search-btn" onClick={handleSearch}>
              <Search
                size={28}
                style={{
                  color: "var(--black)",
                }}
              />
            </a>
          </SearchBox>
        </Center>

        <NotMobile>
          <Right>
            <Link
              to="/user"
              style={{
                color: "var(--black)",
              }}
            >
              <MenuItem>
                <Badge color="primary">
                  <PersonOutline />
                </Badge>
              </MenuItem>
            </Link>
            <Link
              to="/cart"
              style={{
                color: "var(--black)",
              }}
            >
              <MenuItem>
                <Badge badgeContent={cartQuantity} color="primary">
                  <ShoppingCartOutlined />
                </Badge>
              </MenuItem>
            </Link>
            <Link
              to="/help"
              style={{
                color: "var(--black)",
              }}
            >
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
