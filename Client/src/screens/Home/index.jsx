import React, {useContext, useEffect} from 'react'
import Announcement from '../../components/Announcement';
import AppCard from '../../components/App';
import Categories from '../../components/Categories';
import Footer from '../../components/Footer';
import FooterMobile from '../../components/FooterMobile';
import Marks from '../../components/Marks';
import Navbar from '../../components/Navbar';
import Newsletter from '../../components/Newsletter';
import Slider from '../../components/Slider';
import { getToken, getUserId } from '../../context/isAutenticated';

function Home() {

    useEffect(() => {
    }, 
    [getToken(), getUserId()])
    console.log("userId", getUserId())
    return ( 
    <> 
    
    <Announcement/> 
    <Navbar /> 
    <Slider/> 
    <Marks /> 
    <Categories/> 
    <AppCard /> 
    <Newsletter/> 
    <Footer /> 
    <FooterMobile/> 
    </>
  )} 

export default Home;