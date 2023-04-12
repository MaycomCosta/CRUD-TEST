import React from 'react';
import axios from "axios"
import * as C from './styles'


const DeleteItemModal = ({isOpen, closeModal, item}) => {

  const  handleDelete = async (item) => {
    // Lógica para excluir o item selecionado
    console.log(item)
   const response =  await axios.delete(`https://dev.codeleap.co.uk/careers/${item}/`)
   console.log(response)
   closeModal()
  }

  return (
    <C.StyledModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Excluir item"
    >
      <C.ModalContent>
      <h2 className="modalTitle">Are you sure you want to delete this item?</h2>
      <div>
        <button className="cancelButton" onClick={closeModal}>Cancel</button>
        <button 
          type='submit' 
          className="confirmButton" 
          onClick={() => handleDelete(item)}
        >Delete</button>
      </div>
      </C.ModalContent>
    </C.StyledModal>
  );
}

export default DeleteItemModal;