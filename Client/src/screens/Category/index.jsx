import React, {useContext, useEffect, useState} from 'react'
import Announcement from '../../components/Announcement';
import Footer from '../../components/Footer';
import FooterMobile from '../../components/FooterMobile';
import ProductCard from './ProductCard';
import {GlobalContext} from '../../context/GlobalState';
import axios from 'axios'
import {
    Flex, PaginationStyled,
} from './styles';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Navbar from '../../components/Navbar';
import { Grid } from '@material-ui/core';

function Category() {
  const { cat} = useParams();
  const [productsList, setProductsList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [perPage, setPerPage] = useState(8);

  const getProducts = (page, perPage) => {
    let apiUrl = `http://localhost:3003/product/getproducts/${cat}?page=${page}&perPage=${perPage}`;
    axios
      .get(apiUrl)
      .then(function (response) {
        setProductsList(response.data.Result);
        setTotalPages(Math.ceil(response.data.TotalCount / perPage));
        const totalQuantity = response.data.Result.reduce((total, product) => {
          return total + product.quantity;
        }, 0);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
    
  useEffect(() => {
    getProducts(currentPage, perPage);
  }, [currentPage, cat, perPage]);

  const handlePageChange = (direction) => {
    if (direction === "previous" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (direction === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };


    
  return (
    <> 
      <Announcement/> 
      <Navbar/>
      <Flex> 
        <Grid container spacing={2}>
          {productsList.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={6} lg={3} xl={3}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Flex > 
      {totalPages > 1 &&(
      <PaginationStyled>
        <button disabled={currentPage === 1} onClick={() => handlePageChange("previous")}>&#9666;</button>
        <button>{currentPage}</button>
        <button disabled={currentPage === totalPages} onClick={() => handlePageChange("next")}>&#9656;</button>
      </PaginationStyled>
      )}
      <Footer/> 
      <FooterMobile/> 
    </>
  )
}

export default Category;
