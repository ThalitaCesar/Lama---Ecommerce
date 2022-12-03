
import { Box, Button, ButtonGroup, TextField } from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import React from 'react'
import { useModalContext } from '../../../../context/ModalContext';
import { FlexContent, FlexItem, IconContent, Text, TextTitle } from './styles';


function Card() {
  const { openModal } = useModalContext();
  const editModal = () => openModal({ message: <MessageEdit/> });


   const MessageEdit =()=>{
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
      <ButtonGroup>
      <Button 
      variant="contained"
      color="primary" 
      size="large" 
      style={{marginTop:"30px", marginRight:"7px"}}>
        Excluir endereço
    </Button> 
    <Button 
    variant="contained" 
    color="primary" 
    size="large" 
    style={{marginTop:"30px"}}>
        Salvar 
    </Button> 
      </ButtonGroup>
    </>
  }


    return (
<>
<FlexItem>
      <IconContent onClick={editModal}>
      <Edit size={60} 
      style={{marginBottom:"10px"}} />
      <small>Editar</small>
      </IconContent>
      <FlexContent>
          <TextTitle>
            <strong>Rua Treze de Maio, 5842,</strong>
          </TextTitle>
          <Text>
            <p>Alecrim, Natal-RN</p>
            <p>CEP: 59000-000</p>
          </Text>
      </FlexContent>
  </FlexItem>

</>
  )} 
  
export default Card;