import { Box, Button, Divider, TextField } from '@material-ui/core';
import { AddCircleOutline } from '@material-ui/icons';
import React from 'react'
import { useModalContext } from '../../../context/ModalContext';
import { Title } from '../Requests/styles';
import Card from './Card';

function Adresses() {

  const { openModal } = useModalContext();
  const createModal = () => openModal({ message: <MessageCreate/> });

  const MessageCreate =()=>{
    return <>
    <Box
      component="form"
      noValidate
    >

      <div>
        <TextField
          required
          id="standard-required"
          label="CEP"
          defaultValue=""
          variant="standard"
          style={{marginTop:"7px"}}
        />

        <TextField
          required
          id="standard-required"
          label="Logadouro"
          defaultValue=""
          variant="standard"
          style={{marginBottom:"7px"}}
          />
              <TextField
          required
          id="standard-required"
          label="Número"
          defaultValue=""
          type="number"
          variant="standard"
          style={{marginBottom:"7px"}}
        />

        <TextField
          required
          id="standard-required"
          label="Complemento"
          defaultValue=""
          variant="standard"
          style={{marginBottom:"7px"}}
        />
            <TextField
          required
          id="standard-required"
          label="Bairro"
          defaultValue=""
          variant="standard"
          style={{marginBottom:"7px"}}
          />
            <TextField
          required
          id="standard-required"
          label="Cidade"
          defaultValue=""
          variant="standard"
          style={{marginBottom:"7px"}}
          />

          <TextField
          required
          id="standard-required"
          label="Estado"
          defaultValue=""
          variant="standard"
          style={{marginBottom:"7px"}}
        />


        
      </div>
    </Box>
   
    <Button 
    variant="contained" 
    color="primary" 
    size="large" 
    style={{marginTop:"30px"}}>
        Salvar Endereço
    </Button> 
    </>
  }

    return (
<>
<Title>Meus Endereços</Title>
<Divider/>
<Card/>
<Button 
variant="contained" 
color="primary" 
size="large" 
style={{margin:"30px"}}
onClick={createModal}>
    Adicionar endereço 
    <AddCircleOutline 
    style={{marginLeft:"10px"}}/>
    </Button>  
</>
  )} 
  
export default Adresses;