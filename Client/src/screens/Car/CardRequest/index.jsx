import { Button, IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import React from 'react'
import { useState } from 'react';
import { Card, ImgContainer, NameProduct, Quantity, Tam, Value } from './styles';

function CardRequest() {
const [quantity, setQuantity] = useState(0)


const handleIncrease=()=>{
  setQuantity(quantity + 1);
};

//decrease counter
const handleDecrease = () => {
  if(quantity > 1){
  setQuantity(quantity - 1)
}
};

//reset counter 
const handleReset = () =>{
  setQuantity(0)
}


    return (
<>
<Card>
<div>
  <ImgContainer background={'https://img.ltwebstatic.com/images3_pi/2021/11/19/1637284725d9569a24e6f415912bb191d03569ac78_thumbnail_600x.webp'}/>
  </div>
  <NameProduct>Vestido V Vita Rosa</NameProduct>
  <Tam> P</Tam>
  <Quantity>
    <Button onClick={handleDecrease}>-</Button>
   {quantity}
    <Button onClick={handleIncrease}>+</Button>
  </Quantity>
  <Value> R$ 299,90</Value>
  <IconButton onClick={handleReset}><Delete/></IconButton>
</Card>
</>
  )} 
  
export default CardRequest;