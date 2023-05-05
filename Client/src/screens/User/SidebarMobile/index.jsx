import React from "react";
import { Container, MenuContainer, ContainerDashboard } from './styles';
import { useState } from "react";
import { Chip } from "@material-ui/core";
import Adresses from "../Adresses";
import PersonalData from "../PersonalData";
import Request from "../Requests";
import { useAuth } from "../../../context/isAutenticated";

const SidebarMobile = () => {
  const [selected, setSelected] = useState(<Request />);
  const { logout } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("meu_token");
    logout();
  };

  return (
    <>
      <Container>
        <MenuContainer>
          <Chip
            style={{ margin: "7px" }}
            label="Dados Pessoais"
            onClick={() => setSelected(<PersonalData/>)}
          />
          <Chip
            style={{ margin: "7px" }}
            label="Meus Pedidos"
            onClick={() => setSelected(<Request />)}
          />
          <Chip
            style={{ margin: "7px" }}
            label="Meus Endereços"
            onClick={() => setSelected(<Adresses />)}
          />
          <Chip
            style={{ margin: "7px" }}
            label="Sair"
            onClick={handleLogout}
          />
        </MenuContainer>

        <ContainerDashboard>{selected}</ContainerDashboard>
      </Container>
    </>
  );
};

export default SidebarMobile;
