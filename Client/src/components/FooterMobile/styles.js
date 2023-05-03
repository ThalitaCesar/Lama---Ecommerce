import styled from "styled-components";
import {mobile} from "../../responsive";

export const FooterStyle = styled.footer `
bottom: 0;
display:flex;
justify-content:center;
align-items:center;
position: fixed;
margin-top:40px;
background-color:white;
padding-bottom:16px;
padding-left:26px;
overflow-x:hidden;
max-width:100%;
display:none;
${mobile({display: "flex"})}
`