import React, { useContext } from "react";
import { Container, MenuContainer, ContainerDashboard } from './styles';
import { useState } from "react";
import { Chip, Divider } from "@material-ui/core";
import Adresses from "../Adresses";
import PersonalData from "../PersonalData";
import Request from "../Requests";
import { GlobalContext } from "../../../context/GlobalState";


const SidebarMobile = () => {

  const [selected, setSelected] = useState(<Request/>);
  console.log("select", selected)
  const {tokenLogin, setTokenLogin} = useContext(GlobalContext)
  console.log("token", tokenLogin)

  const outLocalStorage =() =>{
    setTokenLogin("")
  }

  return (
<>

<Container>
<MenuContainer>


      <Chip style={{margin:"7px"}} label="Dados Pessoais"onClick={() => { setSelected(<PersonalData/>)}} />
      <Chip style={{margin:"7px"}}  label="Meus Pedidos" onClick={() => { setSelected(<Request/>)}}/>
      <Chip style={{margin:"7px"}}  label="Meus Endereços" onClick={() => { setSelected(<Adresses/>)}}/>
      <Chip style={{margin:"7px"}}  label="Sair" onClick={outLocalStorage}/>

</MenuContainer>

      <ContainerDashboard>
    {selected}
      </ContainerDashboard>

</Container>
</>
)}
export default SidebarMobile;
