import {Button, Chip, MenuItem, Select} from '@material-ui/core';
import {Divider} from 'antd';
import React from 'react'
import Footer from '../../components/Footer';
import FooterMobile from '../../components/FooterMobile';
import Navbar from '../../components/Navbar';
import Card from '../User/Adresses/Card';
import CardAdresses from './CardAdresses';
import CardRequest from './CardRequest';
import {
    Container,
    TableRequest,
} from './styles';

function Cart() {

    return ( 
        <> 
        <Navbar/> 
        <Container> 
        <TableRequest>
        <CardAdresses/>
        <CardRequest/>
        </TableRequest> 
    </Container>
    <Footer/> 
    <FooterMobile/> 
  </>
  )} 
  
export default Cart;
