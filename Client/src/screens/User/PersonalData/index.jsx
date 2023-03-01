import { Box, Button, ButtonGroup, Divider, TextField } from '@material-ui/core';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../../context/GlobalState';
import { useModalContext } from '../../../context/ModalContext';
import { Title } from '../Requests/styles';

function PersonalData() {
  const {userId} = useContext(GlobalContext)
  const { openModal } = useModalContext();
  const testModal = () => openModal({ message: <Message/> });
  const [dataUser, setDataUser] = useState('')

  const getDataUser = () => {
    axios
    .get(`http://localhost:3003/user/profile/${userId}`)
    .then(response => {
      console.log(response);
      setDataUser(response?.data?.result);
    })
    .catch((err)=>{
      console.log(err);
      });
  }
  useEffect(()=>{
    getDataUser()
  },[])


  const results = dataUser
  console.log("results", results)
  const [name, setName] = useState(results?.name)
  const [cpf, setCpf]= useState(results?.cpf)
  const [birthDate, setBirthDate]= useState(results?.data);
  const [email, setEmail]= useState(results?.email);

  const UpdateUser = () => {
    const body = {
      id: userId,
      name: name, 
      cpf: cpf,
      data: birthDate,
      email: email    
    }
    axios
    .put('http://localhost:3003/user/updateuser', body)
    .then(response => {
      console.log(response);
       alert("Atualizações salvas com sucesso!")
    })
    .catch((err)=>{
      console.log(err);
      alert("Aconteceu algum erro, veja se todos os campos foram preenchidos.")
    });
  }

  console.log(
    "id:", userId,
    "name:", name, 
    "cpf:", cpf,
    "data:", birthDate,
    "email:", email 
  )

  const Message =()=>{
  const [newPassword, setNewPassword]= useState('');
  const [passwordConfirm, setPasswordConfirm]= useState('');
  const {userId} = useContext(GlobalContext)

  const UpdatePassword = () => {
    const body = {
      id: userId,
      password: newPassword,
    }
    if(newPassword === passwordConfirm){
      axios
      .put(`http://localhost:3003/user/updatepassword/${userId}`, body)
      .then(response => {
        console.log(response);
         alert("Atualizações salvas com sucesso!")
      })
      .catch((err)=>{
        console.log(err);
        alert("Não foi possível alterar sua senha, tente novamente.")
      });
    }
   else{
    alert("As senhas não coincidem.")
    }
  }

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
          label="Nova senha"
          type="password"
          defaultValue=""
          variant="standard"
          onChange={(e)=>setNewPassword(e.target.value)}
          style={{marginBottom:"7px"}}
        />

        <TextField
          required
          id="standard-required"
          label="Confirmar nova senha"
          type="password"
          defaultValue=""
          variant="standard"
          onChange={(e)=>setPasswordConfirm(e.target.value)}
          style={{marginBottom:"7px"}}
        />

        
      </div>
    </Box>
     
    <Button 
     variant="contained"
     color="primary" 
     size="large" 
     style={{marginTop:"30px"}}
     onClick={UpdatePassword}
     >
     Salvar Alterações
    </Button> 
    </>
  }

    return (
<>
<Title>Dados Pessoais</Title>
<Divider/>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Nome"
          variant="standard"
          defaultValue={results?.name} 
          placeholder={results?.name}
          onChange={(e)=>setName(e.target.value)}
          style={{margin:"7px"}}
        />
        <TextField
          required
          id="outlined-required"
          label="CPF"
          defaultValue={results?.cpf}
          placeholder={results?.cpf}
          onChange={(e)=>setCpf(e.target.value)}
          variant="standard"
          style={{margin:"7px"}}
        />
       <TextField
          required
          id="outlined-required"
          label="Data de nascimento"
          type="date"
          variant="standard" 
          defaultValue={results?.data}
          placeholder={results?.data}
          onChange={(e)=>setBirthDate(e.target.value)}
          style={{margin:"7px"}}
        />
        <TextField
          required
          id="outlined-required"
          label="Email"
          defaultValue={results?.email}
          placeholder={results?.email}
          onChange={(e)=>setEmail(e.target.value)}
          variant="standard"
          style={{margin:"7px"}}
        />

        
      </div>
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
    onClick={UpdateUser}
    style={{margin:"30px"}}>
        Salvar Alterações
    </Button> 
      </ButtonGroup>
     

</>
  )} 
  
export default PersonalData;