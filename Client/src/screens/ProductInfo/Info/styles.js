import styled from "styled-components";
import { mobile } from "../../../styles/responsive";

export const Container = styled.div`
width:550px;
${mobile({ width: "100%", marginBottom:"60px"})}
`

export const NameProduct = styled.h3`
color:var(--black);
margin-bottom:6px;
`

export const Offer = styled.button`
background:var(--grey);
color: var(--red);
border:none;
height:30px;
font-size: 14px;
margin-bottom:16px;
align-items:center;
padding: 6px;
`

export const Price = styled.h1`
color: var(--red);
display:flex;
align-items:center;
`
export const OldPrice = styled.p`
color: var(--black);
margin-left:7px;
margin-right:7px;
font-size:18px;
font-style:none;
padding: 8px;
`

export const Percentual = styled.button`
background: var(--red);
color: white;
font-size:12px;
height:40px;
align-items:center;
padding: 6px;
margin-left: 8px;
`

export const SixX = styled.div`
color: var(--black);
background: var(--grey);
width:150px;
font-size:11px;
margin-top:4px;
margin-bottom:7px;
padding: 6px;
`

export const Tam = styled.div`
display:flex;
flex-wrap: wrap;

`

export const TamTitle = styled.h4`
margin-top:25px;
margin-bottom:16px;
`

export const ButtonTam = styled.button`
background:var(--grey);
color:var(--black);
border-radius:20px;
margin-right:10px;
padding:10px;
align-items:center;
height:40px;
&:focus{
    background:var(--black);
    color: var(--grey)
};
&:select{
    background:var(--black);
    color: var(--grey)
};
&:hover{
    background:var(--black);
    color: var(--grey)
}
`

export const A = styled.a`
display:flex;
align-items:center;
font-size:14px;
margin-top:16px;
margin-bottom:16px;
cursor:pointer;
`

export const Frete = styled.div`
background: var(--grey);
color: var(--black);
width:410px;
margin-top:4px;
margin-bottom:7px;
align-items:center;
display:flex;
padding: 6px;
${mobile({ width: "90%" })}
`

export const Description = styled.p`
font-size:12px;
margin-top:16px;
text-align: justify;
margin-bottom:30px;
${mobile({ width: "90%" })}
`
