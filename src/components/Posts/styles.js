import styled from 'styled-components'

export const Container = styled.div`
 display: flex;
 flex-direction: column;
 height: 100vh;
 align-items: center;
 margin: 0 auto;

 width: 800px;
 height: 100%;

 background-color: #ffffff;
`

export const Posts = styled.div`

 border-radius: 16px;
 border: 1px solid #999999;

 width: 95%;
 height: 100%;  
 margin: 20px;

 background-color: #ffffff;

 .postHeader {
   margin: 0;

   background: #7695EC;
   color: #ffffff;
   font-weight: 700;
   font-size: 22px; 

   width: 100%;
   height: 3em;

   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 0 1em;
   border-radius: 16px 16px 0 0;

   div {
    display: flex;
    gap: 1em;
   }

   .postTitle {

  }

  .icons {
    outline: none;
    font-size: 25px;
    border: none;
    color: #ffffff;
    margin-left: auto;
    background-color: #7695EC;
    cursor: pointer;

    :hover {
      opacity: 0.6;
      transition: opacity 0.5s ease-in-out;
    }
  }
 }

 .UserTimeContent {
   margin: 20px;

 .nameAndTime {
   margin: 0;
   display: flex;
   justify-content: space-between;

   .userName {
    color: #777777;
    padding-bottom: 15px;
    font-weight: 700;
   }

   .timeAgo {
    color: #777777;
   }
 }
 }
`
