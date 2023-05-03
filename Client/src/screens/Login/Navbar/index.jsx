import React from "react";
import {Container, Logo} from "./styles";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <Container>
            <Link
                to="/"
                style={{
                color: "var(--black)",
                textDecoration: "none"
            }}>
                <Logo>LAMA.</Logo>
            </Link>
        </Container>
    );
};

export default Navbar;