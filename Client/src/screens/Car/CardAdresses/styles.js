import styled from 'styled-components';
import { mobile } from '../../../responsive';

export const FlexItem = styled.div`
display:flex;
width: 80vw;
height:50px;
flex-direction:row;
justify-content:space-between;
padding:16px;
background: var(--grey);
align-items:center;
${mobile({ height: "100%" })};
a{
    color: #e61919;
    cursor:pointer;
}
`



