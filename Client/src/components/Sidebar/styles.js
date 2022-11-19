
import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
height: 100%;
display: flex;
flex-direction: column;
padding: 30px 40px;
width: 20vw;
border-right: 2px solid var(--grey);
${mobile({ height: "100%"})}
`;

export const Title = styled.h5`
margin-top: 16px;
margin-bottom: 5px;
text-align:center;
`;

export const TitleFilter = styled.h3`
margin-bottom: 5px;
text-align:center;
`;