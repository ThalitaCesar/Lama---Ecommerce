import { ArrowRight, CardGiftcard, MoveToInbox, PaymentOutlined} from '@material-ui/icons';
import React from 'react'
import { useModalContext } from '../../../../context/ModalContext';
import { TableStyle } from './styles';
import { Steps } from 'antd';
import { Box } from '@material-ui/core';


function Table() {
  const { openModal } = useModalContext();
  const requestModal = () => openModal({ message: <MessageRequest/> });
  const dataRequest = '27/11/2022';
  const dataSend = '30/11/2022'
  const dataReceived = '';

  const MessageRequest =()=>{
    return <>
    <Box style={{marginTop:'30px'}}>
      <Steps
    current={1}
    status="error"
    items={[
      {
        title: 'Pago',
        status: 'finish',
        icon: <PaymentOutlined />,
        description: '27/11/2022',
      },
      {
        title: 'Enviado',
        status: 'process',
        icon:  <CardGiftcard/>,
        description: '30/11/2022',
      },
      {
        title: ' Recebido',
        status: 'wait',
        icon:  <MoveToInbox/>,
        description: '',
      }
    ]}
  />
    </Box>
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