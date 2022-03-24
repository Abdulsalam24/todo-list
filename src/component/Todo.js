import React, { useState } from 'react'
import Input from './Input.jsx'
import Note from './Note.jsx'

const Todo = () => {
    const [text , setText] = useState('')
    const [todos , setTodos] = useState([])



    const handleChange = (e) => {
        setText(e)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('sumited')
        setTodos([ ...todos , {text : text , qty : todos.length , check : false }])
        setText('')
    }

    const handleDelete = (e) => {
        const exist = todos.some(todo => todo.qty === e)
        if(exist){
            const filter = todos.filter(todo => todo.qty !== e)
            setTodos(filter)
        }else{
            return setTodos(todos)
        }
    }

    const handleCheck = (e) => {
        setTodos([...todos , { check : !e }])
    }



  return (
    <>
        <Input handleChange={handleChange} text={text} handleSubmit={handleSubmit}/>
        <Note todos={todos} handleCheck={handleCheck} handleDelete={handleDelete}/>

    </>
  )
}

export default Todo