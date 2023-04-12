import React, { useState } from 'react'
import * as C from './styles'

import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'


export const SingUp = () => {
  const [inputValue, setInputValue] = useState('')

  const history = useHistory()

  const handleInputChange = event => {
    setInputValue(event.target.value)
  }

  const handleClick = () => {

    setInputValue(inputValue)
    setTimeout(() => {
      history.push('/')
    }, 1000)
  }

  const onSubmit = clientData => {
    try {

      localStorage.setItem('AppInfo:username', JSON.stringify(clientData.name))

      console.log(clientData.name)
      
    } catch (err) {
      toast.error('Error in the sistem')
    }
  }

  const { register, handleSubmit } = useForm()

  return (
    <C.Container>
      <C.ContainerRegister>
        <form onSubmit={handleSubmit(onSubmit)} onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}>
        <h3>Welcome to CodeLeap network!</h3>
        <p>Please enter your username</p>
        <input
          {...register("name")}
          placeholder='John doe...'
          type="text" value={inputValue} 
          onChange={handleInputChange}
        />
        <C.Button onClick={handleClick} disabled={!inputValue}>ENTER</C.Button>
        </form>
      </C.ContainerRegister>
    </C.Container>
  )
}
