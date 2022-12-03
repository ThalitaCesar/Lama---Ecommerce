import styled from 'styled-components';

export const TextTitle = styled.p`
font-size: 16px;
color: #FFFFFF;
`

export const FlexContent = styled.div`
display:flex;
flex-direction:column;
background: var(--grey);
padding:15px;
`

export const IconContent = styled.button`
border:none;
boder-box:0;
color: #FFFFFF;
background: #e61919;
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
height: 100%;
width: 400px;
text-decoration:none;
@media(max-width: 900px) {
  width: 320px;
  height: 90px;
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
