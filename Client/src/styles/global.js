import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
:root{
    --background: #8B0000;
    --grey:#f0f0f0;
    --green: #95d0ad;
    --black:#1e1c1c ;
    --background-card: #d1dcd4;
}

 *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Poppins', sans-serif;
 }
 input::placeholder {
   color: var(--grey);
 }
html{
    @media(max-width: 1000px){
        font-size: 93.75%
    }
    @media(max-width: 720px){
        font-size: 87.05%
    }
}
 body{
    background: #fffff;
 }
 body, input, textarea, button{
    font-weight: 400;
    color: var(--black);
 }
 h1,h2,h3,h4,h5,h6,strong{
    font-weight: 600;
    color: var(--black);
 }
 a{
    font-weight: 400;
    color: blue; 
 }
 a:hover{
    color: var(--black);
    text-decoration: underline;
    }

 button{
    cursor:pointer;
    border-style:none;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    display:flex ;
    justify-content:space-between;
 }
[disable]{
    visable:0.6;
    cursor: not-allowed;
}
`