import styled from 'styled-components';
import { mobile } from "../../styles/responsive";

export const Container = styled.div`
display: flex;
align-items: center;
justify-content:start;
margin:10px;
overflow-x:hidden;
${mobile({ flexDirection: "column" })}
`

export const Left = styled.div`
display: flex;
align-items: center;
width:50%;
${mobile({ width: "90%", marginBottom:"30px" })}
`

export const Right = styled.div`
width:50%;
${mobile({ width: "90%" })}
`

export const BackButton = styled.button`
margin-top: 30px;
margin-left:60px;
display:flex;
justify-content: flex-end;
flex-direction: row;
background: transparent;
overflow-x:hidden;
${mobile({ marginLeft: "20px" })}
`