
import { Box, Button, ButtonGroup, TextField } from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useModalContext } from '../../../../context/ModalContext';
import { FlexContent, FlexItem, IconContent, Text, TextTitle } from './styles';


function Card({adresses}) {
  const { openModal } = useModalContext();
  const editModal = () => openModal({ message: <MessageEdit/> });
  console.log("adressesCard", adresses)



  const MessageEdit =()=>{
  const [cep, setCep] = useState(adresses?.cep)
  const [street, setStreet]= useState(adresses?.street)
  const [number, setNumber]= useState(adresses?.number)
  const [district, setDistrict]= useState(adresses?.district)
  const [complement, setComplement]= useState(adresses?.complement)
  const [city, setCity]= useState(adresses?.city)
  const [state, setState]= useState(adresses?.state)
  const history = useHistory()

  const UpdateAdresses = () => {
    const body = {
      id: adresses?.id,
      cep: cep,
      street: street,
      district: district,
      city: city,
      complement: complement,
      state: state,
      number: number,
    }
    axios
    .put('http://localhost:3003/adresses/updateadresses', body)
    .then(response => {
      console.log(response);
       alert("Atualizações salvas com sucesso!")
       history.push('/user/adresses')

    })
    .catch((err)=>{
      console.log(err);
      alert("Aconteceu algum erro, veja se todos os campos foram preenchidos.")
    });
  }



  const DeleteAdresses = () => {
    axios
    .delete(`http://localhost:3003/adresses/deleteadresses/${adresses.id}`)
    .then(response => {
      console.log(response);
       alert("O endereço foi excluído com sucesso!")
       history.push('/user/adresses')

    })
    .catch((err)=>{
      console.log(err);
      alert("Aconteceu algum erro.")
    });
  }


    return <>
 
      <div>
        <TextField
          required
          id="standard-required"
          label="CEP"
          defaultValue={adresses?.cep}
          placeholder={adresses?.cep}
          onChange={(e)=>setCep(e.target.value)}
          variant="standard"
          style={{marginTop:"7px"}}
        />

        <TextField
          required
          id="standard-required"
          label="Rua"
          defaultValue={adresses?.street}
          placeholder={adresses?.street}
          onChange={(e)=>setStreet(e.target.value)}
          variant="standard"
          style={{marginBottom:"7px"}}
          />
          <TextField
          required
          id="standard-required"
          label="Número"
          defaultValue={adresses?.number}
          placeholder={adresses?.number}
          onChange={(e)=>setNumber(e.target.value)}
          variant="standard"
          style={{marginBottom:"7px"}}
        />

        <TextField
          id="standard-required"
          label="Complemento"
          defaultValue={adresses?.complement}
          placeholder={adresses?.complement}
          onChange={(e)=>setComplement(e.target.value)}
          variant="standard"
          style={{marginBottom:"7px"}}
        />
            <TextField
          required
          id="standard-required"
          label="Bairro"
          defaultValue={adresses?.district}
          placeholder={adresses?.district}
          onChange={(e)=>setDistrict(e.target.value)}
          variant="standard"
          style={{marginBottom:"7px"}}
          />
            <TextField
          required
          id="standard-required"
          label="Cidade"
          defaultValue={adresses?.city}
          placeholder={adresses?.city}
          onChange={(e)=>setCity(e.target.value)}
          variant="standard"
          style={{marginBottom:"7px"}}
          />

          <TextField
          required
          id="standard-required"
          label="Estado"
          defaultValue={adresses?.state}
          placeholder={adresses?.state}
          onChange={(e)=>setState(e.target.value)}
          variant="standard"
          style={{marginBottom:"7px"}}
        />
      </div>

      <ButtonGroup>
      <Button 
      variant="contained"
      color="primary" 
      size="large" 
      onClick={DeleteAdresses}
      style={{marginTop:"30px", marginRight:"7px"}}>
        Excluir endereço
    </Button> 
    <Button 
    variant="contained" 
    color="primary" 
    size="large" 
    onClick={UpdateAdresses}
    style={{marginTop:"30px"}}>
        Salvar 
    </Button> 
      </ButtonGroup>
    </>
  }


    return (
<>


<FlexItem>
      <FlexContent>
          <TextTitle>
            <strong>{adresses?.street}, {adresses?.number},</strong>
            <p> {adresses?.district}, {adresses?.city}-{adresses.state}. CEP: {adresses?.cep}</p>
          </TextTitle>
      
      </FlexContent>
      <IconContent onClick={editModal}>
      <Edit size={60} 
      style={{marginBottom:"10px"}} />
      </IconContent>
  </FlexItem>

</>
  )} 
  
export default Card;