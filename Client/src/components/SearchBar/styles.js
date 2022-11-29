import styled from 'styled-components';
import { mobile } from "../../responsive";

export const SearchInput = styled.div`
border: 2px solid var(--grey);
border-radius:20px;
display: flex;
background-color: var(--grey);
justify-content: space-between;
align-items: space-between;
margin-left: 25px;
padding: 5px;
${mobile({ width:"120px"})}
`

export const Input = styled.input`
background-color: transparent;
outline: none;
color: #080808;
border: none;
margin-left: 15px;
font-size: 0.9rem;
width: 180px;
${mobile({ width:"90px"})}
`