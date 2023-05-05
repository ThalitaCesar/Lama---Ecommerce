import { Box, Button } from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useModalContext } from '../../../../context/ModalContext';
import { FlexContent, FlexItem, Form, IconContent, Input, Label, Text, TextTitle } from './styles';

function Card({adresses}) {
  const { openModal } = useModalContext();
  const editModal = () => openModal({ message: <MessageEdit/> });
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
      number: number,
      state: state,
      complement: complement,
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
 <Box>
      <Form>
        <Label>
        Cep:
        <Input
          type="text" 
          value={cep}
          placeholder={cep}
          onChange={(e)=>setCep(e.target.value)}
      />
        </Label>

        <Label>
        Rua:
        <Input
          type="text" 
          value={street}
          placeholder={street}
          onChange={(e)=>setStreet(e.target.value)}
        />
        </Label>

        <Label>
        Número:
        <Input
        type="text" 
          value={number}
          placeholder={number}
          onChange={(e)=>setNumber(e.target.value)}
        />
        </Label>
        
        <Label>
        Complemento:
        <Input
        type="text" 
          value={complement}
          placeholder={complement}
          onChange={(e)=>setComplement(e.target.value)}
        />
        </Label> 

        <Label>
        Bairro:
        <Input
          type="text" 
          value={district}
          placeholder={district}
          onChange={(e)=>setDistrict(e.target.value)}
        />
        </Label> 
        
        <Label>
        Cidade:
        <Input
          type="text" 
          value={city}
          placeholder={city}
          onChange={(e)=>setCity(e.target.value)}
        />
        </Label> 

        <Label>
        Estado:
        <Input
        type="text" 
          value={state}
          placeholder={state}
          onChange={(e)=>setState(e.target.value)}
        />
        </Label> 

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
    style={{marginTop:"10px"}}>
        Salvar 
    </Button> 
    </Form>
    </Box>
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