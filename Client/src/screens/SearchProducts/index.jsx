import React, { useContext, useEffect, useState, useRef } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { GlobalContext } from "../../context/GlobalState";
import axios from "axios";
import {
  Pagination,
  SearchError,
} from "./styles";
import ProductCard from "../Category/ProductCard";
import Navbar from "../../components/Navbar";
import Announcement from "../../components/Announcement";

function SearchProducts() {
  const location = useLocation();
  const searchTerm = new URLSearchParams(location.search).get("term");
  const [productsList, setProductsList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [perPage, setPerPage] = useState(8);
  const [isMounted, setIsMounted] = useState(true);
  const didMountRef = useRef(false);

  const getProducts = (page, perPage) => {
    axios
  .get(`http://localhost:3003/product/getproducts?page=${page}&perPage=${perPage}&query=${searchTerm.toLowerCase()}`)
      .then(function (response) {
        if (isMounted) {
          setProductsList(response.data.Result);
          setTotalPages(Math.ceil(response.data.TotalCount / perPage));
          console.log(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    if (didMountRef.current) {
      setIsMounted(true);
    } else {
      didMountRef.current = true;
    }

    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    getProducts(currentPage, 8);
  }, [currentPage, searchTerm]);

  const handlePageChange = (direction) => {
    if (direction === "previous" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (direction === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
console.log(productsList)



    return (
      <>
        <Announcement/>
        <Navbar/>
        {productsList.length >= 1 ? (
          <>
      
        <Grid container spacing={2}>
          {productsList.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={6} lg={3} xl={3}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
        {totalPages >= 1 && (
         <Pagination>
          <button onClick={() => handlePageChange("previous")}>&#60;</button>
          <button>{currentPage}</button>
          <button onClick={() => handlePageChange("next")}>&#62;</button>
        </Pagination>
        )}
        </>
        ):(
          <SearchError>
          <p>Nenhum produto encontrado.</p>
          </SearchError>
        )}
      </>
    );
  }
  
  export default SearchProducts;
