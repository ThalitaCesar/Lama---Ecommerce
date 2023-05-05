import styled from "styled-components";
import { mobile } from "../../styles/responsive";

export const ContainerFlex = styled.div`
max-width: 800px; 
margin-left: auto;
margin-right: auto; 
margin-top: 60px;
margin-bottom: 60px;

  ${mobile({display:"none"})}
`;

export const ImgMarks = styled.img`
  width: 95px;
  object-fit: cover;
  margin: 10px;
`;

