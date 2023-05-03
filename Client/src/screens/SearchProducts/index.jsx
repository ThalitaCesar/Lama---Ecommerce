import React, { useContext, useEffect, useState, useRef } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { GlobalContext } from "../../context/GlobalState";
import axios from "axios";
import {
  ColumnRight,
  ContainerSearchBar,
  Pagination,
  Right,
  TitleSearch,
} from "./styles";
import { Link } from "react-router-dom";
import ProductCard from "../Category/ProductCard";
import { Search } from "@material-ui/icons";
import { SearchBox } from "./styles";

function SearchProducts() {
  const location = useLocation();
  const searchTerm = new URLSearchParams(location.search).get("term");
  const { orderQuantity } = useContext(GlobalContext);
  const [productsList, setProductsList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isMounted, setIsMounted] = useState(true);
  const history = useHistory();
  const didMountRef = useRef(false);

  const handleSearch = () => {
    if (searchTerm.length >= 3) {
      history.push(`/search?term=${searchTerm}`);
    }
  };

  const getProducts = (page, perPage) => {
    axios
      .get(`http://localhost:3003/product/getproducts?page=${page}&perPage=${perPage}`)
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
  }, [currentPage]);

  const handlePageChange = (direction) => {
    if (direction === "previous" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (direction === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const start = (currentPage - 1) * 8;
  const end = start + 8;
  const result = productsList
    .slice(start, end)
    .filter((product) => product.name.includes(searchTerm));

    return (
      <>
        <ContainerSearchBar>
          <Link to="/" style={{ color: "var(--black)", textDecoration: "none" }}>
            <TitleSearch>LAMA.</TitleSearch>
          </Link>
          <ColumnRight>
          <SearchBox>
            <input
              className="search-input"
              type="text"
              name=""
              placeholder="Pesquise"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />
            <a href="#" className="search-btn" onClick={handleSearch}>
              <Search
                size={28}
                style={{
                  color: "var(--black)",
                }}
              />
            </a>
            </SearchBox>
          </ColumnRight>
        </ContainerSearchBar>
        <Grid container spacing={3}>
          {result.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
        <Pagination>
          <button onClick={() => handlePageChange("previous")}>&#60;</button>
          <button>{currentPage}</button>
          <button onClick={() => handlePageChange("next")}>&#62;</button>
        </Pagination>
      </>
    );
  }
  
  export default SearchProducts;
  ``
  