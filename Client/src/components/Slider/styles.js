import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
overflow: hidden;
${mobile({ display: "none"})}
`;
