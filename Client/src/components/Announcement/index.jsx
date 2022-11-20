import { LocalShippingOutlined } from "@material-ui/icons";
import React from "react";
import { Container, Strong, TextCursor } from "./styles";

const Announcement = () => {
    return (
        <>
        <Container>
            
            <TextCursor>
         <LocalShippingOutlined style={{margin:"7px"}}/> 
        Frete <Strong>GRÁTIS</Strong> para pedidos acima de <Strong>R$120,00 !</Strong> ✨
            </TextCursor>
        </Container>
        </>
    )
  };
  
  export default Announcement;