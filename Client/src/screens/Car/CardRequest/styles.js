import styled from "styled-components";
import { mobile } from "../../../responsive";

export const Card = styled.div`
 display:flex;
 justify-content:start;
 flex-direction: row;
 margin:30px;
 align-items:center;
 width:80vw;
 border: 1px solid var(--grey);
 justify-content: space-between;
 ${mobile({flexDirection: "column", justifyContent:"center"})}
`;

export const ImgContainer = styled.div`
height: 170px;
width:130px;
margin-right:30px;
border: 1px solid #f4f4f4;
background: url("${(props) => props.background}");
background-size: cover;
${mobile({height: "200px", width:"150px", alignSelf:"center"})}
`;

export const NameProduct = styled.p`
 max-width:300px;
 font-size:14px;
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
font-size:16px;
`