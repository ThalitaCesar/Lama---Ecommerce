import { Button, FormLabel } from '@material-ui/core';
import { Label, LocalShippingOutlined, ShoppingCartOutlined, StraightenOutlined } from '@material-ui/icons';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../../context/GlobalState';
import { A, ButtonTam, Container, Description, Frete, NameProduct, Offer, OldPrice, Percentual, Price, SixX, Tam, TamTitle } from './styles';

function Info() {

    const {productSelect} = useContext(GlobalContext)
    const [product, setProduct] = useState([])
    const [sizes, setSizes] = useState([])
    console.log("productSelect", productSelect)
  
    const getProductById =()=>{
      axios.get(`http://localhost:3003/product/product/${productSelect}`)
      .then(function (response) {
        setProduct(response.data.Result)
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
    }

    const getSizes =()=>{
        axios.get(`http://localhost:3003/product/getAllSizesByProduct/${productSelect}`)
        .then(function (response) {
          setSizes(response.data.Result)
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        })
      }
    
        useEffect(()=>{
        getProductById(),
        getSizes()
        },[productSelect])
  
  console.log("product", product)

    return (
      
<Container>

{product.map((product)=>(
    <>
    <NameProduct>
     {product.name}
    </NameProduct>
    <Offer>
        Oferta de Natal
    </Offer>
    <Price>
    {product.price}
    <Percentual>-11%</Percentual>
    </Price>
    <SixX>ou 6x no cartão s/ juros</SixX>

    <TamTitle>Tamanhos</TamTitle>
    <Tam>
        {sizes.map((size)=>(
        <ButtonTam key={size.id}>{size.sizes}</ButtonTam>
        ))}
    </Tam>
    <A> <StraightenOutlined style={{marginRight:"7px"}}/>Guia de tamanhos</A>
    <Frete>
    <LocalShippingOutlined style={{margin:"7px"}}/>  Frete grátis em pedidos acima de R$120,00
    </Frete>
    <TamTitle>Descrição</TamTitle>
    <Description>
   {product.description}
    </Description>
    <Button variant="contained" color="primary" size="large">
    Adicionar ao Carrinho <ShoppingCartOutlined style={{marginLeft:"10px"}}/>
    </Button>   
    </>
   ))}
  
</Container>
  )} 
  
export default Info;