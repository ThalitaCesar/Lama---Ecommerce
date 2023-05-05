import styled from "styled-components";
import { mobile } from "../../../responsive";

 export const Lama = styled.div`
    width: 500px;
    min-height: 450px;
    display: flex;
    text-align:center;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    margin-left:60px;
    img{
    width: 200px;
    };
    ${mobile({ display: "none"})}
 `
export const Container = styled.div`
display:flex;
background: var(--red);
height: 100vh;
justify-content:center;
align-items:center;
${mobile({ flexDirection: "column", width:"100vw", alignItems:"center"})}
  .signin {
    width: 700px;
    min-height: 550px;
    max-height: 950px;
    border-radius: 3px;

    ${mobile({ width: "80vw"})}
  }
  
  .signin_wrapper {
    background: white;
  }
  
  .signin_success {
    background: #005baa;
  }
  .signin_success h1 {
    letter-spacing: 1px;
  }
  .signin_success p {
    margin-top: 15px;
    letter-spacing: 1px;
    ${mobile({ marginTop: "0px"})}
  }
  
  form {
    padding: 20px 50px;
    
  }
  
  h2 {
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    margin: 25px;
  }
  
  div.textField {
    width: 100%;
    margin: 12px 10px;
  }
  
  div.textField input {
    font-size: 20px;
  }
  div.textField svg {
    font-size: 25px;
  }
  
  button {
    background: var(--red);
    width: 100%;
    line-height: 35px;
    margin: 14px 9px;
    color: white;
    font-size: 14px;
    padding: 5px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .error_msg {
    color: #ff0000e0;
    font-size: 17px;
    font-weight: 700;
    margin: 0px;
    padding: 0px;
    text-align: center;
  }
  
  span.signup {
    cursor: pointer;
    color:var(--background);
  }
  
  h4 {
    text-align: center;
    margin-top: 15px;
  }
`