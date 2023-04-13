import React from 'react';
import axios from "axios"
import * as C from './styles'
import { toast } from 'react-toastify'

const DeleteItemModal = ({isOpen, closeModal, item}) => {

  const  handleDelete = async (item) => {
    try {
      const { status } = await axios.delete(`https://dev.codeleap.co.uk/careers/${item}/`, { validateStatus: () => true })
      closeModal()
      if (status === 204) {
        toast.success('Post deleted')
      }else {
        throw new Error()
      }
    } catch (err) {
      toast.error('Error in the sistem')
    }
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