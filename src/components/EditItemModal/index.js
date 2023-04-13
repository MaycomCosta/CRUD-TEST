import React, { useState, useEffect } from 'react'
import * as C from './styles'


import axios from "axios"
import { toast } from 'react-toastify'

const EditItemModal = ({isOpen, closeModal, item}) => {
  const [editedItem, setEditedItem] = useState(item)

  useEffect(() => {
    setEditedItem(item)
  }, [item])

  const handleChange = (e) => {
    const { name, value } = e.target
    setEditedItem({ ...editedItem, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleEditItem(editedItem)
    closeModal()
  }

  const handleEditItem = async (editedItem) => {
    try {
      const { status } = await axios.patch(`https://dev.codeleap.co.uk/careers/${item.id}/`, {
        "title": editedItem.title,
        "content": editedItem.content
      })
      if (status === 201 || status === 200) {
        toast.success('Post edited')
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error('Error in the sistem')
    }
    closeModal()
  }

  return (
    <C.StyledModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Edit items"
    >
      <C.ModalContent>
      <h2>Edit Item</h2>
      <form onSubmit={handleSubmit} onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder='Hello world'
          value={editedItem.title}
          onChange={handleChange}
        />
        <label htmlFor="content">Content</label>
        <input
          id="content"
          name="content"
          placeholder='Content here'
          className='inputContent'
          value={editedItem.content}
          onChange={handleChange}
        />
        <div>
          <button className="cancelButton" onClick={closeModal}>Cancel</button>
          <button className="saveButton" type="submit">Save</button>
        </div>
      </form>
      </C.ModalContent>
    </C.StyledModal>
  )
}



export default EditItemModal
