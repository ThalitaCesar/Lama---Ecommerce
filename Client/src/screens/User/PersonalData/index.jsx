import { Box, Button, ButtonGroup, Divider, TextField } from '@material-ui/core';
import React from 'react'
import { useModalContext } from '../../../context/ModalContext';
import { Title } from '../Requests/styles';

function PersonalData() {

  const { openModal } = useModalContext();
  const testModal = () => openModal({ message: <Message/> });

  const Message =()=>{
    return <>
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >

      <div>
        <TextField
          required
          id="standard-required"
          label="Senha antiga"
          type="password"
          defaultValue=""
          variant="standard"
          style={{marginTop:"7px"}}
        />

        <TextField
          required
          id="standard-required"
          label="Nova senha"
          type="password"
          defaultValue=""
          variant="standard"
          style={{marginBottom:"7px"}}
        />

        <TextField
          required
          id="standard-required"
          label="Confirmar nova senha"
          type="password"
          defaultValue=""
          variant="standard"
          style={{marginBottom:"7px"}}
        />

        
      </div>
    </Box>
     
    <Button variant="contained" color="primary" size="large" style={{marginTop:"30px"}}>
        Salvar Alterações
    </Button> 

    </>
  }

    return (
<>
<Title>Dados Pessoais</Title>
<Divider/>

<Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      style={{margin:"30px"}}
    >

      <div>
        <TextField
          required
          id="standard-required"
          label="Nome"
          defaultValue="João Lucas"
          variant="standard"
          style={{margin:"7px"}}
        />
        <TextField
          required
          id="standard-required"
          label="Sobrenome"
          defaultValue="Campello"
          variant="standard"
          style={{margin:"7px"}}
        />

        <TextField
          required
          id="standard-required"
          label="CPF"
          defaultValue="104.254.258-05"
          variant="standard"
          style={{margin:"7px"}}
        />
       <TextField
          required
          id="standard-required"
          label="Data de nascimento"
          type="date"
          defaultValue="30-03-1993"
          variant="standard" 
          style={{margin:"7px"}}
        />
        <TextField
          required
          id="standard-required"
          label="Email"
          type="email"
          defaultValue="joao@gmail.com"
          variant="standard"
          style={{margin:"7px"}}
        />

        
      </div>
    </Box>
      <ButtonGroup>
      <Button 
      variant="contained" 
      color="primary" 
      size="large" 
      style={{margin:"30px", marginRight:"0"}}
      onClick={testModal}>
        Mudar Senha
    </Button> 
    <Button 
    variant="contained" 
    color="primary" 
    size="large" 
    style={{margin:"30px"}}>
        Salvar Alterações
    </Button> 
      </ButtonGroup>
     

</>
  )} 
  
export default PersonalData;