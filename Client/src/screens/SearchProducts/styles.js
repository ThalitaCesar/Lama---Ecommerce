import styled from 'styled-components';
import { mobile } from "../../responsive";

export const ContainerSearchBar = styled.div`
height: 60px;
margin-right: 30px;
margin-left: 30px;
margin-top: 20px;
padding: 10px 20px;
display: flex;
align-items: center;
padding-top:10px;
overflow:hidden;
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
overflow-x:hidden;
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
overflow-x:hidden;
${mobile({ marginLeft: "26px", marginTop:"30px"})}
`


export const Flex = styled.div`
display:flex;
margin: 60px;
overflow-x:hidden;
${mobile({ margin: "20px"})}
`

export const Icons = styled.div`
display:flex;
${mobile({ display: "none"})}

`

export const Pagination = styled.div`
display:flex;
justify-content: center;
align-item:center;
overflow-x:hidden;
button{
    font-size: 30px;
    margin: 16px;
    cursor: pointer;
    background: none;
}
`

export const SearchBox = styled.div`
    position: absolute;
    margin-top:30px;
    left: 50%;
    transform: translate(-50%,-50%);
    border: 2px solid var(--grey);
    border-radius:20px;
    background-color: var(--grey);
    height:40px;
    overflow-x:hidden;
    overflow-y:hidden;
  .search-btn {
    float: right;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 2s;
  }
  
  
  .search-input {
    border: none;
    background: none;
    outline: none;
    float: left;
    padding: 5px;
    font-size: 19px;
    margin-left:15px;
    transition: 0.4s;
    line-height: 50px;
    width: 0;
  }
  
  &:hover > .search-input {
    width: 250px;
    padding: 0 7px;
    ${mobile({ width: "80px" })}

  }
`