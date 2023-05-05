import React from 'react'
import { Card, ImgContainer, NameProduct, Quantity, Tam, Value } from './styles';

function CardOrder() {

    return (
<>
<Card>
<div>
  <ImgContainer background={'https://img.ltwebstatic.com/images3_pi/2021/11/19/1637284725d9569a24e6f415912bb191d03569ac78_thumbnail_600x.webp'}/>
  </div>
  <div>
  <NameProduct>Vestido V Vita Rosa</NameProduct>
  <Tam>Código: Q65656453BR</Tam>
  <Tam>Tamanho: P</Tam>
  <Quantity>
    Quantidade: 2
  </Quantity>
  <Value>Valor Total: <span style={{color:" var(--red)", fontSize:"20px"}}> R$ 299,90</span></Value>
  </div>
</Card>
</>
  )} 
  
export default CardOrder;