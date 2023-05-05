import styled from "styled-components";
import { mobile } from "../../../../styles/responsive";

export const Card = styled.div`
 display:flex;
 justify-content:start;
 flex-direction: row;
 margin:30px;
 align-items:start;
 background: var(--grey);
 ${mobile({flexDirection: "column", alignItems:"start"})}
`;

export const ImgContainer = styled.div`
height: 170px;
width:110px;
margin-right:30px;
border: 1px solid #f4f4f4;
background: url("${(props) => props.background}");
background-size: cover;
${mobile({height: "200px", width:"150px", alignSelf:"center"})}
`;

export const NameProduct = styled.p`
 max-width:300px;
 font-size:16px;
 margin-top:20px;
 margin-bottom:10px;
`;

export const Tam = styled.p`
font-size:14px;
font-weight:400;
`

export const Quantity = styled.p`
font-size:14px;
height:100%;
font-weight:400;
`

export const Value = styled.p`
font-size:14px;
font-weight:400;
`