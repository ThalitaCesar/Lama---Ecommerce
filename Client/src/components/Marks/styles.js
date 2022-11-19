import styled from "styled-components";
import { mobile } from "../../responsive";

export const ContainerFlex = styled.div`
max-width: 800px; 
margin-left: auto;
margin-right: auto; 
margin-top: 60px;
margin-bottom: 60px;

  ${mobile({marginBottom:"20px", marginLeft:"10px" })}
`;

export const ImgMarks = styled.img`
  width: 95px;
  object-fit: cover;
  margin: 10px;
`;

