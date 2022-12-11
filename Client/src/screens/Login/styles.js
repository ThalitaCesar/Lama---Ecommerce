import styled from "styled-components";
import { mobile } from "../../responsive";

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
background: #e61919;
height: 100vh;
${mobile({ flexDirection: "column", width:"100vw", alignItems:"center"})}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  .container {
    background: #e61919;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({ alignItems: "start"})}
  }
  
  .signin {
    width: 700px;
    min-height: 450px;
    border-radius: 3px;
    box-shadow: 3px 3px 5px #001324dc;
    ${mobile({ width: "90vw"})}
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
    font-size: 45px;
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
    background: var(--background);
    width: 100%;
    line-height: 35px;
    margin: 20px 9px;
    color: white;
    font-size: 20px;
    font-weight: bold;
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