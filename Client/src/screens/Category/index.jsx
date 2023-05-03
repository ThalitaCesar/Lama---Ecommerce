import {Badge, Grid} from '@material-ui/core';
import {HeadsetMicRounded, PersonOutline, Search, ShoppingCartOutlined} from '@material-ui/icons';
import React, {useContext, useEffect, useState} from 'react'
import {Link} from 'react-router-dom';
import Announcement from '../../components/Announcement';
import Footer from '../../components/Footer';
import FooterMobile from '../../components/FooterMobile';
import {MenuItem, SearchBox} from '../../components/Navbar/styles';
import ProductCard from './ProductCard';
import SearchBar from '../../components/SearchBar';
import SideBar from '../../components/Sidebar';
import {GlobalContext} from '../../context/GlobalState';
import axios from 'axios'
import {
    ColumnRight,
    ContainerSearchBar,
    Flex,
    Icons,
    Left,
    Pagination,
    Right,
    TitleSearch
} from './styles';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Category() {

    const {categorySelect, setCategorySelect} = useContext(GlobalContext)
    console.log('category', categorySelect)
    const [productsList,
        setProductsList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const {orderQuantity} = useContext(GlobalContext);
    const [searchTerm, setSearchTerm] = useState("");
    const history = useHistory();
  
    const handleSearch = () => {
      if (searchTerm.length >= 3) {
        history.push(`/search?term=${searchTerm}`);
      }
    };

    const onChangeHandler = (e) => {
        setSearchedString(e.target.value);
    }

    const getProducts = (page, perPage) => {
        axios
          .get(`http://localhost:3003/product/getproducts?page=${page}&perPage=${perPage}`)
          .then(function (response) {
            setProductsList(response.data.Result);
            setTotalPages(Math.ceil(response.data.TotalCount / perPage));
            console.log(response.data);
            const totalQuantity = response.data.Result.reduce((total, product) => {
              return total + product.quantity;
            }, 0);
          })
          .catch(function (error) {
            console.log(error);
          });
      };
      
      useEffect(() => {
        getProducts(currentPage, 8);
      }, [currentPage]);
      
      useEffect(() => {
        getProducts();
      }, []);

    useEffect(() => {
        getProducts()
    }, [productsList, orderQuantity]);

    useEffect(() => {
      }, [orderQuantity]);

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
const result = productsList.slice(start, end).filter(product => product.category == categorySelect);

    console.log("result", result)
    return (
       <> 
       <Announcement/> 
       <ContainerSearchBar> 
       <Link
        to="/"
        style={{
        color: "var(--black)",
        textDecoration: "none"
    }}>
        <TitleSearch>
            LAMA.
        </TitleSearch>
    </Link> 
    <ColumnRight> 
    <SearchBox style={{marginTop:"30px"}}>
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

    <Icons>
      <Link to="/user " style={{color:"var(--black)"}}>
        <MenuItem > 
          <Badge color="primary">
            <PersonOutline/>
          </Badge> 
        </MenuItem>
      </Link > 
      
      <Link to="/cart" style={{color: "var(--black)"}}>
        <MenuItem>
            <Badge badgeContent={orderQuantity} color="primary">
                <ShoppingCartOutlined/>
            </Badge>
        </MenuItem>
    </Link> 

        <MenuItem> 
            <Badge color="primary">
              <HeadsetMicRounded/>
            </Badge> 
        </MenuItem>
    </Icons > 
    </ContainerSearchBar> 
    <Flex> 
    < Right > 
    <Grid container spacing={3}>
    {result.map((product) => (
     <ProductCard key={product.id} product={product} />
    ))}
    </Grid>
    </Right>
    </Flex > 
    <Pagination>
    <button disabled={currentPage === 1} onClick={() => handlePageChange("previous")}>&#9666;</button>
    <button>{currentPage}</button>
    <button disabled={currentPage === totalPages} onClick={() => handlePageChange("next")}>&#9656;</button>

    </Pagination>
    <Footer/> 
    <FooterMobile/> 
    </>
    )
}

export default Category;