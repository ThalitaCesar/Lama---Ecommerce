import { Grid } from "@material-ui/core";
import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { categories } from "../../data";
import CategoryItem from "../CategoryItem";
import { CategoriesDiv, Container, Flex, Title } from "./styles";


const Categories = () => {

    return (
      <CategoriesDiv>
      <Title>NAVEGUE POR CATEGORIAS</Title>
      <Container>
      
      <Grid container>

        {categories.map((item) => (
          <Flex>
          <CategoryItem item={item} key={item.id}  />
          </Flex>
        ))}
  
      </Grid>
      </Container>
      </CategoriesDiv>
     
    );
  };
  
  export default Categories;