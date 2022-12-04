import styled from 'styled-components';

export const TableStyle = styled.table`
width: 65vw;
border-collapse: collapse;
margin: 30px;
td, th {
    text-align: left;
    padding: 8px;
  };
  td{
    background: var(--grey);
    border: 1px solid var(--grey);
  }
  
`

export const Div =styled.div`
.custome-step .ant-steps-item-process {
  color: red !important;
}
`