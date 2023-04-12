import React, { useEffect, useState } from 'react'
import * as C from './styles'

import axios from "axios"
import moment from 'moment'

import { FaRegEdit, FaTrashAlt } from 'react-icons/fa'
import DeleteItemModal from '../DeleteItemModal'
import EditItemModal from '../EditItemModal'


const baseURL = "https://dev.codeleap.co.uk/careers/?limit=1000&sort=-created_datetime"

export const Posts = ({ username }) => {
  const [post, setPost] = useState(null)
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  useEffect(() => {
    const intervalId = setInterval(() => {
      axios.get(baseURL).then((response) => {
        setPost(response.data.results)
      })
    }, 2000)

    return () => clearInterval(intervalId)
  }, [])

  if (!post) return null

  const timesAgo = (post) => {
  const postDate = post.created_datetime

  const currentDate = moment()

  const diffInMinutes = currentDate.diff(moment(postDate), 'minutes')

  const timeAgo = diffInMinutes < 1 ? `right now` : diffInMinutes < 60 ? `${diffInMinutes} minutes ago` : moment(postDate).fromNow()
  return timeAgo
  }

  const handleDeletePost = (postId) => {
    setSelectedItem(postId);
    console.log(postId)
    setDeleteModalIsOpen(true);
  };
  
  const handleEditPost = (post) => {
    setSelectedItem(post);
    setEditModalIsOpen(true);
    console.log(post.id)
  };
  

  return (
    <C.Container>
        {post&& post.map(post => {
        return (
          <C.Posts key={post.id}>
            <div className='postHeader'>
            <h3 className='postTitle'>{post.title}</h3>
            {post.username === username && (
              <div>
                <button className='icons' onClick={() => handleDeletePost(post.id)}><FaTrashAlt /></button>
                <button className='icons' onClick={() => handleEditPost(post)}><FaRegEdit /></button>
              </div>
              )}
            </div>
          <div className='UserTimeContent'>
          <div className='nameAndTime'>
          <p className='userName'>@{post.username}</p>
          <p className='timeAgo'>{timesAgo(post)}</p>
          </div>
          <p className='postContent'>{post.content}</p>
          </div>
          </C.Posts>
            )
          })}
          <DeleteItemModal isOpen={deleteModalIsOpen} closeModal={() => setDeleteModalIsOpen(false)} item={selectedItem} />
          <EditItemModal isOpen={editModalIsOpen} closeModal={() => setEditModalIsOpen(false)} item={selectedItem} />
    </C.Container>
  )
}