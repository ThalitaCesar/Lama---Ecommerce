import { Button, Chip, MenuItem, Select } from '@material-ui/core';
import { Divider } from 'antd';
import React from 'react'
import Footer from '../../components/Footer';
import FooterMobile from '../../components/FooterMobile';
import Navbar from '../../components/Navbar';
import Card from '../User/Adresses/Card';
import CardAdresses from './CardAdresses';
import CardRequest from './CardRequest';
import { CardValue, Container, Infos, P, TableRequest, Total } from './styles';

function Cart() {

    return (
<>
<Navbar/>
<Container>
  <TableRequest>
  <CardAdresses/>
  <CardRequest/>
  <Infos>
  <CardValue>
      <P>Subtotal:<span>R$: 299,90</span></P>
      <P>Frete: <span>R$ 20,00</span></P>
      <P>Modo de Pagamento: 
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
  >
    <MenuItem value={10}>Pix</MenuItem>
    <MenuItem value={20}>Cartão</MenuItem>
    <MenuItem value={30}>Boleto</MenuItem>
  </Select>
          </P>
      <P>Total: <Total>R$ 329,90</Total></P>
      <Button style={{marginTop:"16px"}} fullWidth variant="contained" color="primary" size="large">
    Confirmar 
    </Button>
  </CardValue>
  </Infos>
  </TableRequest>
</Container>
<Footer/>
<FooterMobile/>
</>
  )} 
  
export default Cart;