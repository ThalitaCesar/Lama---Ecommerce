import React from "react";
import { Send } from "@material-ui/icons";
import { 
    Button, 
    Container, 
    Desc, 
    Input, 
    InputContainer, 
    Title 
} from "./styles";

const Newsletter = () => {
    return (
      <Container>
        <Title>Newsletter</Title>
        <Desc>Receba emails de nossas novidades e de seus produtos favoritos.</Desc>
        <InputContainer>
          <Input placeholder="Seu email" />
          <Button>
            <Send />
          </Button>
        </InputContainer>
      </Container>
    );
  };
  
  export default Newsletter;