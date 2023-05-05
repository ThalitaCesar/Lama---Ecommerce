import styled from "styled-components";
import { mobile } from "../../styles/responsive";

export const Container = styled.div`
  height: 40vh;
  width : 38vh;
  position: relative;
  cursor: pointer;
  align-items:center;
  &:hover{
    background:var(--red);
  };
  ${mobile({marginBottom:"20px", marginLeft:"10px" })}
`;

export const Image = styled.img`
  width: 80px;
  object-fit: cover;
`;

export const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;

export const Title = styled.h1`
    margin-bottom: 20px;
    font-size: 25px;
    color: var(--black)
    &:hover{
      color: #ffffff;
    };
`;

export const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: transparent;
    cursor: pointer;
    font-weight: 600;
    transition: filter 0.2;
   &:hover{
   filter: brightness(0.9)
   }
`;