import { Button, Chip, FormLabel } from '@material-ui/core';
import { Label, LocalShippingOutlined, ShoppingCartOutlined, StraightenOutlined } from '@material-ui/icons';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../../context/GlobalState';
import { A, ButtonTam, Container, Description, Frete, NameProduct, Offer, OldPrice, Percentual, Price, SixX, Tam, TamTitle } from './styles';
import { getUserId } from '../../../context/isAutenticated';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

function Info() {

    const { id} = useParams();
    const [product, setProduct] = useState([])
    const [sizes, setSizes] = useState([])
    const [sizeSelected, setSizeSelected] = useState('')
  
    const getProductById =()=>{
      axios.get(`http://localhost:3003/product/product/${id}`)
      .then(function (response) {
        setProduct(response.data.Result)
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
    }

    const getSizes =()=>{
        axios.get(`http://localhost:3003/product/getAllSizesByProduct/${id}`)
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
        },[])
  

  const CreateOrder = (product) => {
    const body = {
      name: product.name,
      folder:product.folder,
      size: sizeSelected,
      price: product.price,
      user_id: getUserId()
    }
      axios
      .post(`http://localhost:3003/order/postorder`, body)
      .then(response => {
        console.log(response);
         alert("Pedido Adicionado ao Carrinho!")
      })
      .catch((err)=>{
        console.log(err);
        alert("Não foi possível adicionar o produto ao carrinho.")});
    }
    console.log(
     " name:" , product.name,
      "folder:", product.folder,
      "size:", sizeSelected,
      "price:", product.price
    )
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
          <Chip  key={size.id} label={size.sizes} onClick={()=>setSizeSelected(size.sizes)} />
        ))}
    </Tam>
    <A> <StraightenOutlined style={{marginRight:"7px"}}/>
    Guia de tamanhos</A>
    <Frete>
    <LocalShippingOutlined style={{margin:"7px"}}/>  
    Frete grátis em pedidos acima de R$120,00
    </Frete>
    <TamTitle>Descrição</TamTitle>
    <Description>
   {product.description}
    </Description>
    <Button 
    variant="contained" 
    color="primary" 
    size="large"
    onClick={CreateOrder}>
    Adicionar ao Carrinho 
    <ShoppingCartOutlined style={{marginLeft:"10px"}}/>
    </Button>   
    </>
    ))}
  
</Container>
  )} 
  
export default Info;