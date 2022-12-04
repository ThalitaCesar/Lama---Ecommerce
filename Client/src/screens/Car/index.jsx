import React from 'react'
import Footer from '../../components/Footer';
import FooterMobile from '../../components/FooterMobile';
import Navbar from '../../components/Navbar';
import CardRequest from './CardRequest';
import { Container, TableRequest } from './styles';

function Cart() {

    return (
<>
<Navbar/>
<Container>
  <TableRequest>
  <CardRequest/>
  </TableRequest>
</Container>
<Footer/>
<FooterMobile/>
</>
  )} 
  
export default Cart;