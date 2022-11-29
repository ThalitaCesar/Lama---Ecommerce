import styled, { keyframes } from "styled-components";
import { mobile } from "../../../responsive";

export const Container = styled.div`
    display:none;
    ${mobile({ display: "block"})};
`

export const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #fff7f7;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${(props) => props.direction === "left" && "10px"};
right: ${(props) => props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
opacity: 0.5;
z-index: 2;
`;

export const Wrapper = styled.div`
display: flex;
transition: all 1.5s ease;
transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

export const Slide = styled.div`
display: flex;
align-items: start;
justify-content:start;
`;

export const ImgContainer = styled.div`
display:flex;
align-items: center;
justify-content:center;
`;

export const Image = styled.img`
width: 80vw;
`;
