import React, { useEffect, useState } from 'react'
import * as C from './styles'
import axios from "axios"

import { Posts } from '../../components/index'
import { toast } from 'react-toastify'
import { useForm } from "react-hook-form"


const baseURL = "https://dev.codeleap.co.uk/careers/"

 
export const Home = () => {
  const { register, handleSubmit, reset } = useForm()
  const [username, setUsername] = useState({})

  useEffect(() => {
    const loadData = () => {
      const clientInfo = localStorage.getItem('AppInfo:username')
  
      if (clientInfo) {
        const name = JSON.parse(clientInfo)
        setUsername(name)
      }
    }
    loadData()
  },[])
  
  console.log(username)
  const onSubmit = async clientData => {

    try {
      const { status } = await axios.post(baseURL, {
        "username": username,
        "title": clientData.TitlePost,
        "content": clientData.ContentPost
      },
      { validateStatus: () => true }
      )
      if (status === 201 || status === 200) {
        toast.success('Post sent!')
      } else if (status === 400) {
        toast.error(`Title and content are required`)
      }
       else {
        throw new Error()
      }
      console.log(status)
    } catch (err) {
      toast.error('Error in the sistem')
    }
    reset()
  }

  return (
    <C.Container>
      <C.ContainerSocial>
      <div className='Header'>
        <h3>CodeLeap Network</h3>
      </div>
      <C.ContainerPost>
        <C.Form onSubmit={handleSubmit(onSubmit)}>
        <h3>What's on your mind?</h3>
        <label>Title</label>
        <input 
        placeholder='Hello world'
        {...register("TitlePost")}/>
        <label>Content</label>
        <input 
        className='inputContent' 
        placeholder='Content here' 
        {...register("ContentPost")}/>
        <C.Button>Create</C.Button>
        </C.Form>
      </C.ContainerPost>
      <Posts username={username}/>
      </C.ContainerSocial>
    </C.Container>
  )
}
