import styled from "styled-components";
import { mobile } from "../../styles/responsive";

export const Container = styled.div`
  display: flex;
  align-items:center;
  justify-content:space-around;
  height: 100vh;
  background-color: var(--red);
  h2{
    margin-bottom:26px;
    color: #ffffff
  },
  h4, h3{
    color: var(--background);
  }
  ${mobile`
    flex-direction: column;
    align-items: center;
  `}

`;

export const Lama = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 800px;
  min-height: 450px;
  margin-left: 60px;
  background-color: none;
  border-radius: 4px;
  padding: 32px;
  text-align: center;
  a{
    color: #ffffff;
  }

  img {
    width: 200px;
  }

  ${mobile`
    display: none;
  `}
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  width: 100%;
  min-height: 450px;
  max-height: 650px;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  padding: 32px;
  margin: auto;

  ${mobile`
    width: 80vw;
  `}
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 24px;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  font-size: 16px;
  padding: 12px;
  border: none;
  width:360px;
  border-radius: 4px;
  background-color: #f4f4f4;
  transition: background-color 0.3s ease;

  &:hover,
  &:focus {
    background-color: #e6e6e6;
  }
`;

export const ErrorMessage = styled.span`
  color: #ff0000e0;
  font-size: 14px;
  font-weight: 700;
  margin-top: 8px;
`;


export const SwitchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  width: 100%;
`;

export const SwitchText = styled.span`
  font-size: 14px;
  font-weight: 500;
`;


