import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mobile } from '../../../responsive';


export const MenuContainer = styled.section`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 30px 40px;
    width: 25vw;
    margin-top:60px;
    margin-bottom:60px;
    ${mobile({ display:"none"})}
`


export const MenuItem = styled.div`
    display: flex;
    justify-content: flex-start;
    cursor: pointer;
    box-sizing: border-box;
    padding: 23px 0;
    align-items: center;
    font-weight: normal;
    color:#A6A6A6;
}
`
export const NavLink = styled(Link)`
    text-decoration: none;
    margin-left: 10px;
    color: #3D3D3D;
    font-size: 14px;
    :hover{
      text-decoration: none;
    }
    :focus {
      color:  var(--red);
      font-weight: bold;
    }
    .icon{
      color: #A6A6A6;
    }`

export const Icon = styled.span`
    :focus {
      color:  #080808;
      font-weight: bold;
    }
    `
export const Container = styled.div`
    display: flex;
    overflow-x:hidden
    ${mobile({ display:"none"})}
}
`

export const ContainerDashboard = styled.div`
height: 100%;
width: 70vw;
margin-top:40px;
margin-bottom:50px;
background-color: #fff;
${mobile({ display:"none"})}
`