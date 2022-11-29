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
 margin-left:120px;
 margin-bottom:120px;
 display:flex;
 align-items:center;
 justify-content:center;
 ${mobile({ 
    marginLeft: "30px", 
    marginRignt:"0",
 })}
 `;

export const CategoriesDiv = styled.div`

`;