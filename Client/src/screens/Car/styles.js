import styled from 'styled-components';
import { mobile } from "../../responsive";

export const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:start;
align-items:center;
margin-top:20px;
background-color:var(--grey);
`

export const TableRequest = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin:60px;
background-color:white;
width:90vw;
padding:30px;
`

export const Infos = styled.div`
display:flex;
justify-content:flex-end;
width:80vw;
margin:30px;
`

export const P = styled.div`
display:flex;
justify-content:space-between;
width:400px;
${mobile({ width: "300px" })}
span{
    font-size: 18px;
}

`

export const Total = styled.p`
font-size: 30px;
color: var(--red);
`

export const CardValue = styled.div``