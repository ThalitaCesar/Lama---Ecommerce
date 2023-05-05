import {LocalShippingOutlined} from "@material-ui/icons";
import React from "react";
import {Container, Strong, TextCursor} from "./styles";

const Announcement = () => {
    return ( 
    <>
     <Container>

        <TextCursor>
            <LocalShippingOutlined style={{
                margin: "7px"
            }}/>
            Frete único
            <Strong> R$ 20,00
            </Strong>
            para todos os
            <Strong> pedidos! </Strong>
            ✨
        </TextCursor>
    </Container> 
    </>
    )
  };
  
  export default Announcement;