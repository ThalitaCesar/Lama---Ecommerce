import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
height: 60vh;
background-color: #e61919;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
${mobile({ margin: "0", borderRadius:"16px", marginBottom:"30px" })}
`;
export const Title = styled.h1`
font-size: 60px;
margin-bottom: 20px;
`;

export const Desc = styled.div`
font-size: 18px;
font-weight: 300;
margin-bottom: 20px;
${mobile({ textAlign: "center" })}
`;

export const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border: 1px solid lightgray;
border-radius:20px;
${mobile({ width: "80%" })}
`;

export const Input = styled.input`
border: none;
flex: 8;
padding-left: 20px;
border-radius:20px;
&:focus, select:focus {
    outline: 0;
}
`;

export const Button = styled.button`
flex: 1;
border: none;
display:flex;
justify-content:center;
align-items: center;
background-color: var(--background);
color: white;
cursor: pointer;
transition: filter 0.2;
   &:hover{
   filter: brightness(0.9)
   }
`;

