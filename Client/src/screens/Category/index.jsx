import { Badge, Grid } from '@material-ui/core';
import {  HeadsetMicRounded, PersonOutline, ShoppingCartOutlined } from '@material-ui/icons';
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import Announcement from '../../components/Announcement';
import Footer from '../../components/Footer';
import FooterMobile from '../../components/FooterMobile';
import { MenuItem } from '../../components/Navbar/styles';
import ProductCard from '../../components/ProductCard';
import SearchBar from '../../components/SearchBar';
import SideBar from '../../components/Sidebar';
import { GlobalContext } from '../../context/GlobalState';
import { ColumnRight, ContainerSearchBar, Flex, Icons, Left, Right, TitleSearch } from './styles';

function Category() {

  const {categorySelect, setCategorySelect } = useContext(GlobalContext)
  console.log('category', categorySelect)
  const [searchedString, setSearchedString] = useState('');
  const [categoryList, setCategoryList] = useState('');
  const [productsList, setProductsList] = useState('');

  const onChangeHandler = (e) => {
    setSearchedString(e.target.value);
}

const getProducts =()=>{
  axios.get(`http://localhost:3003/product/products`)
    .then(res => setProductsList(res.data.trips))
    .catch(err => console.log(err))
    }   
    useEffect(()=>{
      getProducts()
    },[])
    console.log("allProducts", productsList)

    return (
    <>
              <Announcement/>
              <ContainerSearchBar>
              <Link to="/" style={{color:"var(--black)", textDecoration:"none"}}>
              <TitleSearch>
                LAMA.
              </TitleSearch>
              </Link>
              <ColumnRight>
              <SearchBar customPlaceholder=''
                        onChangeHandler={onChangeHandler}
                        searchedString={searchedString}
                        setSearchedString={setSearchedString}/>
              </ColumnRight>

              <Icons>

              <Link to="/user" style={{color:"var(--black)"}}>
              <MenuItem>
              <Badge color="primary">
              <PersonOutline/>
              </Badge>
              </MenuItem>
              </Link>

              <Link to="/cart" style={{color:"var(--black)"}}>
              <MenuItem>
              <Badge color="primary">
              <ShoppingCartOutlined />
              </Badge>
              </MenuItem>
              </Link>

              <MenuItem>
              <Badge color="primary">
              <HeadsetMicRounded />
              </Badge>
              </MenuItem>
              </Icons>

              </ContainerSearchBar>
              <Flex>
              <Left>
                <SideBar/>
              </Left>

              <Right>
                <Grid container spacing={2}>
                <ProductCard/>
                <ProductCard />
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                </Grid>
              </Right>
              </Flex>
    <Footer/>
    <FooterMobile/>

    </>
  )} 
  
export default Category;