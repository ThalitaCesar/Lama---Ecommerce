
import { Backdrop } from '@material-ui/core';
import { ArrowBackIosOutlined } from '@material-ui/icons';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import Announcement from '../../components/Announcement';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Info from './Info';
import Slider from './Slider';
import { BackButton, Container, Left, Right } from './styles';

function ProductInfo() {

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

        <Slider
        images={[
          {
            id: 1,
            src:
              "https://img.ltwebstatic.com/images3_pi/2021/11/19/16372847220483d3fc5f5320a781c5ebd34333ff84_thumbnail_600x.webp"
          },
          {
            id: 2,
            src:
              "https://img.ltwebstatic.com/images3_pi/2021/11/19/1637284725d9569a24e6f415912bb191d03569ac78_thumbnail_600x.webp"
          },
          {
            id: 3,
            src:
              "https://img.ltwebstatic.com/images3_pi/2021/11/19/1637284727afe8c41215207c9f58c78df2bf3e4da2_thumbnail_600x.webp"
          },
          {
            id: 4,
            src:
              "https://img.ltwebstatic.com/images3_pi/2021/11/19/1637284729855dd0c2030f19a7c48b8e0ba6e7694f_thumbnail_600x.webp"
          },
          {
            id: 5,
            src:
              "https://img.ltwebstatic.com/images3_pi/2021/11/19/1637284726d84f00501ca36f7197380ab18e1907b4_thumbnail_600x.webp"
          }
        ]}
      />
  
           
        </Left>
        <Right>
          <Info/>
        </Right>
      </Container>
      <Footer/>
      </>
  )} 
  
export default ProductInfo;