import { Divider } from '@material-ui/core';
import { ArrowRight } from '@material-ui/icons';
import React from 'react'
import { TableStyle } from './styles';

function Table() {

    return (
<>
<TableStyle>
  <tr>
    <th>Nº do pedido</th>
    <th>Data</th>
    <th>Status</th>
    <th></th>
  </tr>
  <tr>
    <td>52221485555555</td>
    <td>20/11/2011</td>
    <td>Entregue</td>
    <td> <ArrowRight/> </td>
  </tr>
</TableStyle>
</>
  )} 
  
export default Table;