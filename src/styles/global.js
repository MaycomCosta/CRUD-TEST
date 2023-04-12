import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
 body {
    width: 100%;
    height: 100%;
    font-family: 'Inter', sans-serif;
    font-family: 'Montserrat', sans-serif;
    font-family: 'Poppins', sans-serif;
 }
`
export default GlobalStyle