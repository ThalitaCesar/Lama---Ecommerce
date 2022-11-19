import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
height: 60px;
margin-right: 30px;
margin-left: 30px;

${mobile({ height: "50px" })}
`;

export const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({ padding: "10px 0px" })}
`;

export const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`;

export const Language = styled.span`
font-size: 14px;
cursor: pointer;
${mobile({ display: "none" })}
`;

export const SearchContainer = styled.div`
border: 2px solid var(--grey);
border-radius:20px;
display: flex;
background-color: var(--grey);
justify-content: space-between;
align-items: space-between;
margin-left: 25px;
padding: 5px;
`;

export const Input = styled.input`
border: none;
background-color: var(--grey);
&:focus, select:focus {
    outline: 0;
}
${mobile({ width: "50px" })}
`;

export const Center = styled.div`
display:flex;
flex-direction:row;
text-align: center;
font-size: 35px;

`;

export const Logo = styled.h1`
font-weight: bold;
${mobile({ fontSize: "24px" })}
`;
export const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({ flex: 2, justifyContent: "center" })}
`;

export const MenuItem = styled.div`
font-size: 18px;
cursor: pointer;
margin-left: 25px;
&:hover{
    color:#e61919;
   
}
${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;