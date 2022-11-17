import styled from "styled-components";
export const Button = styled.button`
  flex: 1 1 auto;
  padding: 12px 18px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background-image: linear-gradient(
    to right,
    #fbc2eb 0%,
    #e91e63 51%,
    #fbc2eb 100%
  );
`;
export const DefaultButton = styled.button.attrs(
  (props: { primary: boolean }) => props
)`
  padding: ${(props) => (props.primary ? "12px 18px;" : "12px 18px")};
  text-align: center;
  cursor: pinter;
  outline: none;
  font-size: 16px;
  color: ${(props) => (props.primary ? "#fff" : "#e91e63")};
  border-radius: 5px;
  background: ${(props) => (props.primary ? "#e91e63" : "#ecf0f3")};
  margin: 12px 0;
  font-weight: 500;
  width: 30%;
  cursor: pointer;
  border: 2px solid #e91e63;
  @media screen and (max-width: 768px) {
    width: ${(props) => (props.primary ? "100%" : "100%")};
  }
`;
export const RoundedButton = styled(DefaultButton)`
  border-radius: 50px;
`;
export const Text = styled.p`
font-weight: 500;
font-size: 16px;
letter-spacing:0.08;
line-height: 19.36'
`;
export const FloatingButton = styled.button`
  position: fixed;
  width: 40px;
  height: 40px;
  right: 0rem;
  bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px;
  text-align: center;
  padding: 5px;
  background-color: rgb(230, 205, 205);
  opacity: 0;
  transition: all 0.5s;
  pointer-events: none;
  cursor: pointer;
`;
