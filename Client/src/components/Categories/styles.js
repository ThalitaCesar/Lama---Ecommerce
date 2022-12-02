import styled from "styled-components";
import { mobile } from "../../responsive";

export const Flex = styled.div`
   display:flex;
 justify-content:space-between;
 flex-direction: row;
 ${mobile({flexDirection: "column"})}
`;


export const Title = styled.h1`
 text-align:center;
 margin:60px;
 font-size: 30px;

 ${mobile({ 
 margin: "10px", 
 fontSize: "20px",
 marginLeft:"30px",
 textAlign:"start", 
 marginTop:"60px"})}
`;

export const Container = styled.div`
 margin-right:100px;
 margin-left:100px;
 margin-bottom:120px;
 display:flex;
 align-items:center;
 justify-content:center;
 ${mobile({ 
    marginLeft: "7px", 
    marginRight:"7px",
 })}
 `;

export const CategoriesDiv = styled.div`
margin-left:60px;
${mobile({display: "none"})}
`;

export const CategoriesMobile = styled.div`
display: none;
margin-left:20px;
${mobile({display: "block"})};
.swiper {
   width: 100%;
   height: 100%;
 }
 
 .swiper-slide {
   text-align: center;
   font-size: 18px;
   background: #fff;
   color: var(--black)

 
   /* Center slide text vertically */
   display: -webkit-box;
   display: -ms-flexbox;
   display: -webkit-flex;
   display: flex;
   -webkit-box-pack: center;
   -ms-flex-pack: center;
   -webkit-justify-content: center;
   justify-content: center;
   -webkit-box-align: center;
   -ms-flex-align: center;
   -webkit-align-items: center;
   align-items: center;
 }
 

`;