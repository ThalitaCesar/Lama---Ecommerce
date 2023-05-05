import styled from "styled-components";
import { mobile } from "../../../styles/responsive";


export const Container = styled.div`
height: 60px;
margin-right: 30px;
margin-left: 30px;
padding:10px;
display:flex; 
align-items:center;
justify-content:start;
${mobile({ height: "50px" })}
`;


export const Logo = styled.h1`
font-weight: bold;
${mobile({ fontSize: "24px" })}
`;


