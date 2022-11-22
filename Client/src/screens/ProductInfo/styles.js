import styled from 'styled-components';
import { mobile } from "../../responsive";

export const Container = styled.div`
display: flex;
align-items: center;
justify-content:start;
margin:10px;
`

export const Left = styled.div`
display: flex;
align-items: center;
width:50%;
`

export const Right = styled.div`
width:50%;

`

export const BackButton = styled.button`
margin-top: 30px;
margin-left:60px;
display:flex;
justify-content: flex-end;
flex-direction: row;
background: transparent;
`