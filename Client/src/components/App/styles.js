import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
height: 60vh;
display: flex;
align-items: center;
justify-content: space-around;
flex-direction: row;
margin: 60px;
margin-top:260px;
margin-bottom:260px;
${mobile({ 
    borderRadius:"16px",  
    flexDirection:"column",
    marginTop:"180px"
 })}
`;

export const Img = styled.img`
height:620px;
${mobile({ height: "400px" })}
`;

export const Buttons = styled.div`
margin-top:30px;
display:flex;
${mobile({ 
    flexDirection:"column",
    marginBottom:"30px" })}
`;

export const ImgButton = styled.img`
width: 194px;
height: 61px;
margin-right:30px;
cursor: pointer;
${mobile({ margin:"10px" })}
`;

export const H1 = styled.h1`
${mobile({ display:"none" })}
`;

export const H1Mobile = styled.h2`
display:none;
${mobile({ display:"block" })}
`;