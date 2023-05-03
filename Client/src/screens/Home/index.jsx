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
import {GlobalContext} from '../../context/GlobalState';

function Home() {

    const {userId} = useContext(GlobalContext)
    const {tokenLogin} = useContext(GlobalContext)
    console.log('userid', userId)

    useEffect(() => {}, [tokenLogin, userId])
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