import { Button, Divider } from '@material-ui/core';
import { AddCircleOutline } from '@material-ui/icons';
import React from 'react'
import { Title } from '../Requests/styles';
import Card from './Card';

function Adresses() {

    return (
<>
<Title>Meus Endereços</Title>
<Divider/>
<Card/>
<Button variant="contained" color="primary" size="large" style={{margin:"30px"}}>
    Adicionar endereço <AddCircleOutline style={{marginLeft:"10px"}}/>
    </Button>  
</>
  )} 
  
export default Adresses;