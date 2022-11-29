import styled from 'styled-components';
import { mobile } from "../../responsive";

export const ContainerSearchBar = styled.div`
height: 60px;
margin-right: 30px;
margin-left: 30px;
padding: 10px 20px;
display: flex;
align-items: center;
padding-top:10px;
justify-content: space-between;
${mobile({ height: "50px", padding: "10px 0px", marginTop:'16px' })}
`

export const TitleSearch = styled.h1`
font-weight: bold;
${mobile({ fontSize: "24px" })}
`

export const ColumnRight = styled.div`
display:flex;
align-items:center;
`

export const ButtonModal = styled.button`
display:flex;
align-items:center;
justify-content:center;
cursor:pointer;
border:none;
background: transparent;
border: 1px solid #FF4C00;
border-radius: 8px;
font-weight: 700;
font-size: 12px;
color: #080808;
width: 157px;
height: 48px;
`

export const Left = styled.div`
`

export const Right = styled.div`
display:flex;
${mobile({ marginLeft: "26px", marginTop:"30px"})}
`


export const Flex = styled.div`
display:flex;
`

export const Icons = styled.div`
display:flex;
${mobile({ display: "none"})}

`