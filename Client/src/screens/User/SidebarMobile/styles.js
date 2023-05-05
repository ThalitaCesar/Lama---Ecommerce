import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mobile } from '../../../styles/responsive';


export const MenuContainer = styled.section`
    display:flex;
    height: 100%;
    flex-direction: row;
    justify-content:center;
    margin: 20px 20px;
    flex-wrap:wrap
`


export const MenuItem = styled.div`
color:var(--black);
border-radius:20px;
margin-right:10px;
padding:16px;
width:120px;
align-items:center;
height:40px;
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
    display: none;
    overflow-x:hidden;
    flex-direction:column;
    ${mobile({ display:"flex"})}

}
`

export const ContainerDashboard = styled.div`
height: 100%;
width: 70vw;
margin-top:0px;
margin-bottom:50px;
background-color: #fff;
${mobile({ width:"100%"})}
`