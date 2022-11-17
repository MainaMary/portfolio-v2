import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 html{
  scroll-behavior: smooth;
  transition: all .4s;
 },
  body {
    margin: 0;
    padding: 0;
    background: #ECF0F3;
    font-family: 'Montserrat', sans-serif;
    font-family: 'Poppins', sans-serif;
    font-family: 'Roboto', sans-serif;
    
  }
 
`;
export default GlobalStyle;

//color: ${(props) => (props.darkMode ? "white" : "black")};
