import styled from 'styled-components'

export const Container = styled.div`
 display: flex;
 height: 100vh;
 align-items: center;
 justify-content: center;

 background-color: #DDDDDD;
`
export const ContainerRegister = styled.div`
 /* display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;  */
 border-radius: 16px;

 width: 500px;
 height: 205px;  

 background-color: #ffffff;

 form {
   display: flex;
   flex-direction: column;
   justify-content: center;
   gap: 1em;
   margin: 2em;

   @media (max-width: 480px) {
    gap: 0.5em;
  }
 }

 input {
   border: 1px solid #777777;
   border-radius: 8px;  
   height: 30px;
   padding-left: 10px;
   outline: none;

   ::placeholder {
    color: #CCCCCC;
   }
 }
`

export const Button = styled.button`
    outline: none;
    font-size: 18px;
    border: none;
    width: 111px;
    height: 30px;
    color: #ffffff;
    border-radius: 8px;
    margin-left: auto;
    background-color: ${props => props.disabled ? 'gray' : '#7695EC'};
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};

    :hover {
      opacity: 0.6;
      transition: opacity 0.5s ease-in-out;
    }
`