import styled from 'styled-components';

export const Title= styled.h2`
   margin: 30px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 600px;
  margin: 0 auto;
  margin-top:20px;
`;

export const Label = styled.label`
  color: var(--black);
  font-size: 14px;
  font-style: normal;
`;

export const Input = styled.input`
background-color: white;
border: none;
box-shadow: 0px 2px 0px var(--red);
padding: 12px;
width: 100%;
color: var(--black)
`;

export const SubmitButton = styled.button`
  background-color: var(--red);
  color: white;
  &:hover {
    background-color: var(--red);
  }
`;