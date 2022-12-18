import { Box, Button, Divider, TextField } from '@material-ui/core';
import { AddCircleOutline } from '@material-ui/icons';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../../context/GlobalState';
import { useModalContext } from '../../../context/ModalContext';
import { Title } from '../Requests/styles';
import Card from './Card';
import { DivCep } from './styles';

function Adresses() {

  const { openModal } = useModalContext();
  const createModal = () => openModal({ message: <MessageCreate/> });
  const {userId} = useContext(GlobalContext);
  const [adressesByUser, setAdressesByUser] = useState([])

  const getAdressesByUser = () => {
    axios
    .get(`http://localhost:3003/adresses/getadresses/${userId}`)
    .then(response => {
      console.log(response);
      setAdressesByUser(response?.data?.Result);
    })
    .catch((err)=>{
      console.log(err);
      });
  }
  useEffect(()=>{
    getAdressesByUser()
  },[])

  const results = adressesByUser

  console.log("adressesByUser", adressesByUser)

  const MessageCreate =()=>{

 
  const [userCep, setUserCep]= useState('')
  const [viaCep, setViaCep] = useState()
  const [street, setStreet]= useState('')
  const [district, setDistrict]= useState('')
  const [number, setNumber]= useState('')
  const [complement, setComplement]= useState('')
  const [city, setCity]= useState('')
  const [state, setState]= useState('')

  const handleChange = (event) => {
    const numberCep = event.target.value.replace(/\D/g, '');    
    setUserCep(numberCep);
  }

  const getCEP =()=>{
    axios.get('https://viacep.com.br/ws/'+userCep+'/json')
    .then(function (response) {
      setViaCep(response.data)
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  const PostAdresses = () => {

    const body = {
      cep: userCep,
      street: street,
      district: district,
      city: city,
      complement: complement,
      state: state,
      number: number,
      user_id: userId
    }
    axios
    .post('http://localhost:3003/adresses/postadresses/', body)
    .then(response => {
      console.log(response);
       alert("Endereço adicionado com sucesso!")
    })
    .catch((err)=>{
      console.log(err);
      alert("Aconteceu algum erro, veja se todos os campos foram preenchidos.")
    });
  }

  console.log(
    "Post", userCep, 
    "street", street, 
    "district", district,
    "city:", city,
    "complement:", complement,
    "state:", state,
    "number:", number,
    "user_id:", userId
    )

    return <>
    <Box
      component="form"
      noValidate
    >

      <div>

            <TextField placeholder='ex: 50820351'
            required
            label="CEP"
            variant="standard"
            style={{marginTop:"7px"}}
            defaultValue={userCep}
            onChange={handleChange}/>

          <TextField
          required
          id="standard-required"
          label="Rua"
          defaultValue=""
          variant="standard"
          style={{marginBottom:"7px"}}
          onChange={(e)=> setStreet(e.target.value)}
          />

          <TextField
          required
          id="standard-required"
          label="Número"
          defaultValue=""
          variant="standard"
          style={{marginBottom:"7px"}}
          onChange={(e)=> setNumber(e.target.value)}
          />


          <TextField
          required
          id="standard-required"
          label="Bairro"
          defaultValue=""
          variant="standard"
          style={{marginBottom:"7px"}}
          onChange={(e)=> setDistrict(e.target.value)}
          />

         <TextField
          id="standard-required"
          label="Complemento"
          defaultValue=""
          variant="standard"
          style={{marginBottom:"7px"}}
          onChange={(e)=> setComplement(e.target.value)}
         />

          <TextField
          required
          id="standard-required"
          label="Cidade"
          defaultValue=""
          variant="standard"
          style={{marginBottom:"7px"}}
          onChange={(e)=> setCity(e.target.value)}
          />

          <TextField
          required
          id="standard-required"
          label="UF"
          defaultValue=""
          variant="standard"
          style={{marginBottom:"7px"}}
          onChange={(e)=> setState(e.target.value)}
          />
          </div>
    </Box>
   
    <Button 
    variant="contained" 
    color="primary" 
    size="large" 
    onClick={PostAdresses}
    style={{marginTop:"30px"}}>
        Salvar Endereço
    </Button> 
    </>
  }


    return (
    <>
    <Title>Meus Endereços</Title>
    <Divider/>
    <div>
    {results.map((result) => (
                <Card adresses={result}/>
    ))}
    </div>
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