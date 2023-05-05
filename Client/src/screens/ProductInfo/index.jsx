
import { Backdrop } from '@material-ui/core';
import { ArrowBackIosOutlined } from '@material-ui/icons';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import Announcement from '../../components/Announcement';
import Footer from '../../components/Footer';
import FooterMobile from '../../components/FooterMobile';
import Navbar from '../../components/Navbar';
import { GlobalContext } from '../../context/GlobalState';
import Info from './Info';
import Slider from './Slider';
import SliderMobile from './SliderMobile';
import { BackButton, Container, Left, Right } from './styles';
import { useParams } from 'react-router-dom';


function ProductInfo() {

  const [photos, setPhotos] = useState([])
  const { id} = useParams();
  console.log("id: ", id)

  const getPhotos =()=>{
    axios.get(`http://localhost:3003/product/getAllImagesByProduct/${id}`)
    .then(function (response) {
      setPhotos(response.data.Result)
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  
      useEffect(()=>{
        getPhotos()
      },[])

  console.log("images", photos)
  const history = useHistory();
    return (
    <>
    <Announcement/>
    <Navbar/>

    <BackButton onClick={() => { history.goBack()}}>
      <Backdrop/> 
        <ArrowBackIosOutlined/> 
          Voltar
    </BackButton>
      
    <Container>
      <Left>
        <SliderMobile/>
        <Slider/>  
        </Left>
      <Right>
        <Info/>
      </Right>
    </Container>
    <Footer/>
    <FooterMobile/>
    </>
  )} 
  
export default ProductInfo;