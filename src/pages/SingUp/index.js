import React, { useState } from 'react'
import * as C from './styles'

import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'


export const SingUp = () => {
  const [inputValue, setInputValue] = useState('')
  const { register, handleSubmit } = useForm()

  const history = useHistory()

  const handleInputChange = event => {
    setInputValue(event.target.value)
  }

  const onSubmit = clientData => {
    try {
        if(clientData.name === ''){
          toast.error('Please enter a username')
        }else{
          localStorage.setItem('AppInfo:username', JSON.stringify(clientData.name))

          setInputValue(inputValue)
          setTimeout(() => {
            history.push('/')
          }, 1000)
        }
    } catch (err) {
      toast.error('Error in the sistem')
    }
  }

  return (
    <C.Container>
      <C.ContainerRegister>
        <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Welcome to CodeLeap network!</h3>
        <p>Please enter your username</p>
        <input
          autocomplete="off"
          {...register("name")}
          placeholder='John doe...'
          type="text" value={inputValue} 
          onChange={handleInputChange}
        />
        <C.Button disabled={!inputValue}>ENTER</C.Button>
        </form>
      </C.ContainerRegister>
    </C.Container>
  )
}
