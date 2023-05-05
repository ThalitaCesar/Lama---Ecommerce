import styled from "styled-components";
import { mobile } from "../../styles/responsive";

export const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
overflow: hidden;
${mobile({ height: "100%", marginTop:"30px"})}
`;
