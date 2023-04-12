import styled from 'styled-components'
import Modal from 'react-modal'

export const StyledModal = styled(Modal)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(119, 119, 119, 0.8);
    z-index: 9999;

`

export const ModalContent = styled.div`

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 16px;    
    width: 660px;
    height: 146px;    
    max-width: 80%;
    padding: 32px;
    z-index: 10000;

  div {
      gap: 15px;
      display: flex;
      justify-content: end;
    }

    .modalTitle {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  button {
    border: none;
    font-size: 16px;
    cursor: pointer;
    margin-top: 20px;
    width: 120px;
    height: 32px;
    border-radius: 8px;

    :hover {
      opacity: 0.6;
      transition: opacity 0.5s ease-in-out;
    }
  }

  .confirmButton {
    background-color: red;
    color: #ffffff;
  }

  .cancelButton {
    background-color: #ffffff;
    color: black;
    border: 1px solid #999999;
  }
`