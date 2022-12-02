import React from 'react'
import Footer from '../../components/Footer';
import FooterMobile from '../../components/FooterMobile';
import Navbar from '../../components/Navbar';
import SideBar from './Sidebar';
import SidebarMobile from './SidebarMobile';
import { StyleContainer } from './styles';

function User() {

    return (
<>
<Navbar/>
<StyleContainer>
<SidebarMobile/>
<SideBar/>
</StyleContainer>
<Footer/>
<FooterMobile/>
</>
  )} 
  
export default User;