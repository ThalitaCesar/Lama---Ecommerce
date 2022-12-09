import { ArrowRight, CardGiftcard, MoveToInbox, PaymentOutlined} from '@material-ui/icons';
import React from 'react'
import { useModalContext } from '../../../../context/ModalContext';
import { Div, TableStyle } from './styles';
import { Box, Step, StepLabel, Stepper } from '@material-ui/core';



function Table() {
  const { openModal } = useModalContext();
  const requestModal = () => openModal({ message: <MessageRequest/> });


  const steps = [
    'Pago',
    'Enviado',
    'Recebido',
  ];

  const MessageRequest =()=>{
    return <>
    <Box style={{marginTop:'30px'}}>
    <Stepper activeStep={2} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
    <CardOrder/>
</>}
    return (
<>
<TableStyle>
  <tr>
    <th>Nº do pedido</th>
    <th>Data</th>
    <th>Status</th>
    <th></th>
  </tr>
  <tr onClick={requestModal} style={{cursor:"pointer"}}>
    <td>52221485555555</td>
    <td>27/11/2022</td>
    <td>Enviado</td>
    <td > <ArrowRight/> </td>
  </tr>
</TableStyle>
</>
  )} 
  
export default Table;