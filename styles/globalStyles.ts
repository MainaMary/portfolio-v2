import styled from "styled-components";
export const Button = styled.button`
  flex: 1 1 auto;

  padding: 30px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  background-image: linear-gradient(
    to right,
    #fbc2eb 0%,
    #e91e63 51%,
    #fbc2eb 100%
  );
  &:hover {
    background-position: right center;
  }
`;
