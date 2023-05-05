import React, { useContext } from "react";
import { Container, MenuContainer, MenuItem, NavLink, ContainerDashboard } from './styles';
import { useState } from "react";
import { Divider } from "@material-ui/core";
import { CardGiftcard, ExitToApp, Face, Payment, PersonPinCircle } from "@material-ui/icons";
import Adresses from "../Adresses";
import PersonalData from "../PersonalData";
import Request from "../Requests";
import { AuthContext } from "../../../context/isAutenticated";

const SideBar = () => {

  const [selected, setSelected] = useState(<Request />);
  const { token, logout } = useContext(AuthContext);

  const outLocalStorage = () => {
    logout();
  }

  const { userId } = useContext(AuthContext);
  const [adressesByUser, setAdressesByUser] = useState()

  const getAdressesByUser = () => {
    axios
      .get(`http://localhost:3003/adresses/getadresses/${userId}`)
      .then(response => {
        console.log(response);
        setAdressesByUser(response.data.result)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <Container>
        <MenuContainer>
          <MenuItem onClick={() => { setSelected(<PersonalData />) }}>
            <NavLink to="/user/personaldata" style={{ display: "flex", alignItems: "center" }}>
              <Face size={25} style={{ marginRight: "16px" }} />
              Dados Pessoais
            </NavLink>
          </MenuItem>

          <Divider />

          <MenuItem onClick={() => { setSelected(<Request />) }}>
            <NavLink to="/user/request" style={{ display: "flex", alignItems: "center" }}>
              <CardGiftcard size={25} style={{ marginRight: "16px" }} />
              Meus Pedidos
            </NavLink>
          </MenuItem>

          <Divider />

          <MenuItem onClick={() => { setSelected(<Adresses />) }}>
            <NavLink to="/user/adresses" style={{ display: "flex", alignItems: "center" }}>
              <PersonPinCircle size={25} style={{ marginRight: "16px" }} />
              Meus Endereços
            </NavLink>
          </MenuItem>

          <Divider />

          <MenuItem onClick={outLocalStorage}>
            <NavLink style={{ display: "flex", alignItems: "center" }}>
              <ExitToApp size={25} style={{ marginRight: "16px" }} />
              Sair
            </NavLink>
          </MenuItem>

        </MenuContainer>

        <ContainerDashboard>
          {selected}
        </ContainerDashboard>

      </Container>
    </>
  )
}

export default SideBar;
