import React from "react";
import { Container, MenuContainer, MenuItem, NavLink, ContainerDashboard } from './styles';
import { useState } from "react";
import { Chip, Divider } from "@material-ui/core";
import { CardGiftcard, Face, Payment, PersonPinCircle } from "@material-ui/icons";
import Adresses from "../Adresses";
import PersonalData from "../PersonalData";
import Request from "../Requests";


const SidebarMobile = () => {

  const [selected, setSelected] = useState(<Request/>);
  console.log("select", selected)

  return (
<>

<Container>
<MenuContainer>


      <Chip label="Dados Pessoais"onClick={() => { setSelected(<PersonalData/>)}} />
      <Chip label="Meus Pedidos" onClick={() => { setSelected(<Request/>)}}/>
      <Chip label="Meus Endereços" onClick={() => { setSelected(<Adresses/>)}}/>

</MenuContainer>

      <ContainerDashboard>
    {selected}
      </ContainerDashboard>

</Container>
</>
)}
export default SidebarMobile;
