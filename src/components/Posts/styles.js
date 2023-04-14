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

 @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`

export const Posts = styled.div`

 border-radius: 16px;
 border: 1px solid #999999;

 width: 95%;
 height: 100%;  
 margin: 20px;

 background-color: #ffffff;

 word-wrap: break-word;

 @media screen and (max-width: 768px) {
    max-width: 100%;
  }

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

    .postContent{
      font-size: 16px;
      line-height: 1.4;

      @media screen and (max-width: 768px) {
        font-size: 14px;
      }
    }
   }

   .postTitle {
    font-size: 24px;
    line-height: 1.2;

    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
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

    @media screen and (max-width: 768px) {
    font-size: 12px;
  }
   }

   .timeAgo {
    color: #777777;

    @media screen and (max-width: 768px) {
    font-size: 10px;
  }
   }
 }
 }
`
export const ReadMore = styled.button`
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    color: hsl(205deg 77% 60%);
    font-size: 1rem;
    cursor: pointer;
    padding-left: 0.25rem;
`
