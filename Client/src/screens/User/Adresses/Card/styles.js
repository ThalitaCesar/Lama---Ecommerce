import styled from 'styled-components';
import { mobile } from '../../../../styles/responsive';

export const TextTitle = styled.p`
font-size: 16px;
`

export const FlexContent = styled.div`
display:flex;
flex-direction:row;
background: var(--grey);
padding:15px;
height: 100%;
${mobile({flexDirection: "column"})}
`

export const IconContent = styled.button`
border:none;
boder-box:0;
color: #FFFFFF;
background: var(--red);
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:80px;
&:hover {
    cursor: pointer;
  }
`

export const FlexItem = styled.div`
display:flex;
border-radius: 16px;
margin:35px;
max-width: 80vw;
text-decoration:none;
@media(max-width: 900px) {
  width: 320px;
  height: 100%;
  margin-right:0px;
  margin-bottom:35px;
  justify-content:center;
 }
`

export const FlexCard = styled.div`
display:flex;
margin-top:40px;
align-items:center;
@media(max-width: 900px) {
flex-direction:column;
 }

`

export const Text = styled.p`
font-size: 14px;
margin-top:5px;
`
export const Title= styled.h2`
   margin: 30px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 600px;
  margin: 0 auto;
  margin-top:20px;
`;

export const Label = styled.label`
  color: var(--black);
  font-size: 14px;
  font-style: normal;
`;

export const Input = styled.input`
background-color: white;
border: none;
box-shadow: 0px 2px 0px var(--red);
padding: 12px;
width: 100%;
`;
