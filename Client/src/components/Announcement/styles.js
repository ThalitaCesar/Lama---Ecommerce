
import styled, { keyframes } from 'styled-components'

export const blinkTextCursor = keyframes`
0%{
  opacity: 0;
}
50%{
  opacity: 0.7;
}
100%{
  opacity: 0;
}
`;

  export const Container = styled.div`
  height: 40px;
  background: var(--black);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
`;

export const TextCursor = styled.p`
  display:flex;
  align-items:center;
  text-align:center;
  animation: animate 1.5s linear infinite;
  @keyframes animate{
    0%{
      opacity: 0.4;
    }
    50%{
      opacity: 1;
    }
    100%{
      opacity: 0.4;
    }
  }
`;

export const Strong = styled.span`
  font-size: 20px;
  font-weight: 500;
  margin:5px;
  font-weight: bold;
  color: #e61919;
`;
