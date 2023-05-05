import { Button } from '@material-ui/core';
import { LocalShippingOutlined, ShoppingCartOutlined, StraightenOutlined } from '@material-ui/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { A, ButtonTam, Container, Description, Frete, NameProduct, Offer, Percentual, Price, SixX, Tam, TamTitle } from './styles';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { getUserId } from '../../../context/isAutenticated';

function Info() {

    const {id} = useParams();
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
        },[id])


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
              alert("Não foi possível adicionar o produto ao carrinho, selecione o tamanho e tente novamente.")
            });
          }

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
        <ButtonTam key={size.id} onClick={()=>setSizeSelected(size.sizes)}>{size.sizes}</ButtonTam>
        ))}
    </Tam>
    <A> <StraightenOutlined style={{marginRight:"7px"}}/>Guia de tamanhos</A>
    <Frete>
    <LocalShippingOutlined style={{margin:"7px"}}/>  Frete com valor único de R$20,00 para todos os pedidos e localidades!
    </Frete>
    <TamTitle>Descrição</TamTitle>
    <Description>
   {product.description}
    </Description>
    <Button variant="contained" color="primary" size="large"
    onClick={()=>CreateOrder(product)}>
    Adicionar ao Carrinho <ShoppingCartOutlined style={{marginLeft:"10px"}}/>
    </Button>   
    </>
   ))}
  
</Container>
  )} 
  
export default Info;