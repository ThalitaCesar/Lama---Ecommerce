import React from 'react'
import Announcement from '../../components/Announcement';
import AppCard from '../../components/App';
import Categories from '../../components/Categories';
import Footer from '../../components/Footer';
import Marks from '../../components/Marks';
import Navbar from '../../components/Navbar';
import Newsletter from '../../components/Newsletter';
import Slider from '../../components/Slider';


function Home() {

    return (
<>
    <Announcement />
      <Navbar />
      <Slider />
      <Marks/>
      <Categories />
      <AppCard/>
      <Newsletter/>
      <Footer/>
</>
  )} 

export default Home;