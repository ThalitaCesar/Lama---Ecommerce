import React from "react";
import { Button, Container, Image, Info, Title } from "./styles";
import { useHistory } from "react-router-dom";

const CategoryItem = ({ item }) => {
  const history = useHistory();

  const handleCategory = () => {
        history.push(`/category/${item.cat}`);
  };

  return (
    <Container bg={item.bg} onClick={handleCategory}>
      <Info>
        <Image src={item.img} />
        <Button>
          <Title>{item.title}</Title>
        </Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
