import { Button, IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { GlobalContext } from '../../../context/GlobalState';
import { Card, ImgContainer, NameProduct, Quantity, Tam, Value } from './styles';

function CardRequest() {

const [quantity, setQuantity] = useState(1)
const [order, setOrder] = useState([]);
const [subTotal, setSubTotal] = useState();
const {userId} = useContext(GlobalContext)

const getOrders =()=>{
  axios.get(`http://localhost:3003/order/getorderbyuser/${userId}`)
  .then(function (response) {
    setOrder(response.data.Result)
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  })
}

useEffect(()=>{
  getOrders()
},[order])

const handleIncrease=()=>{
  setQuantity(quantity + 1);
};

//decrease counter
const handleDecrease = () => {
  if(quantity > 1){
  setQuantity(quantity - 1)
}
};

//reset order 
const handleReset = (order) =>{
  axios.delete(`http://localhost:3003/order/deleteorder/${order.id}`)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  })
}

console.log("order", order)

    return (
<>
{order.map((order)=>(
<Card key={order.id}>
<div>
  <ImgContainer background={order.folder}/>
  </div>
  <NameProduct>{order.name}</NameProduct>
  <Tam>{order.size}</Tam>
  <Quantity>
    <Button onClick={handleDecrease}>-</Button>
   {quantity}
    <Button onClick={handleIncrease}>+</Button>
  </Quantity>
  <Value >R${parseFloat(order.price.substring(2).replace(',', '.'))*quantity}</Value>
  <IconButton onClick={()=>handleReset(order)}><Delete/></IconButton>
</Card>
))}
</>
  )} 
  
export default CardRequest;