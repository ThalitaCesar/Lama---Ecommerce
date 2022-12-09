
import React from 'react'
import { useModalContext } from '../../../context/ModalContext';
import {  FlexItem} from './styles';


function CardAdresses() {
  const { openModal } = useModalContext();
  const editChange = () => openModal({ message: "" });

    return (
<>
    <FlexItem>
    <p> <strong>Rua Treze de Maio, 5842, </strong>
    Alecrim, Natal-RN. CEP: 59000-000</p>
    <a>Trocar</a>
    </FlexItem>

</>
  )} 
  
export default CardAdresses;