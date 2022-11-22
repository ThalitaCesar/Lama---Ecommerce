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

 ${mobile({ margin: "10px", fontSize: "18px", textAlign:"start", marginTop:"60px"})}
`;

export const Container = styled.div`
margin-right:100px;
 margin-left:120px;
 margin-bottom:120px;
 display:flex;
 align-items:center;
 justify-content:center;
 ${mobile({ display: "none" })}
`;

export const CategoriesDiv = styled.div`

 ${mobile({ display: "none" })}
`;