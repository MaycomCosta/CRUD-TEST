import styled from 'styled-components'

export const Container = styled.div`
 display: flex;
 height: 100%;
 justify-content: center;

 background-color: #DDDDDD;
`
export const ContainerSocial = styled.div`
 display: flex;
 flex-direction: column;
 height: 100%;
 align-items: center;

 background-color: #FFFFFF;

  @media (max-width: 768px) {
  width: 30rem;
 }
 @media (max-width: 480px) {
  width: 25rem;
 }
 .Header {
  background: #7695EC;
  color: #ffffff;

  width: 800px;
  height: 80px;

  display: flex;
  align-items: center;
  padding-left: 2em;

  @media (max-width: 768px) {
  width: 30rem;
 }
 @media (max-width: 480px) {
  width: 25rem;
 }
 }
`
export const ContainerPost = styled.div`
 border-radius: 16px;
 border: 1px solid #999999;

 width: 95%;
 height: 20em;  

 margin: 20px;

 background-color: #ffffff;

 /* @media (max-width: 768px) {
  width: 30em;
 } */

`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2em;

  @media (max-width: 768px) {
   gap: 0;
 }

 label {
    margin: 25px 0 5px 0;
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

 .inputContent {
  height: 70px;
  padding-bottom: 3em;
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
    margin-top: 25px;
    background-color: ${props => props.disabled ? 'gray' : '#7695EC'};
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};

    :hover {
      opacity: 0.6;
      transition: opacity 0.5s ease-in-out;
    }
`