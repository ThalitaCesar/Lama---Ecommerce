import React, { useContext } from "react";
import {  Link} from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import { Button, Container, Image, Info, Title } from "./styles";

const CategoryItem = ({ item }) => {
  const {categorySelect, setCategorySelect } = useContext(GlobalContext)

  console.log("categoria",categorySelect)

    return (
      <Container bg={item.bg} 
      onMouseDown={() => setCategorySelect(item.cat)}
       >
        <Link to={'/category'}> 
        <Info>
        <Image src={item.img} />    
          <Button>
          <Title>{item.title}</Title>
          </Button>
        </Info>
        </Link>
      </Container>
    );
  };
  
  export default CategoryItem;