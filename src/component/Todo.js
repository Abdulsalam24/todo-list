
import { useState } from 'react'
import Input from './Input.jsx'
import Note from './Note.jsx'

const Todo = () => {
    const [text , setText] = useState('')
    const [todos , setTodos] = useState([])
    const [filter , setFilter] = useState([])

    const handleChange = (e) => {
        setText(e)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text !== ''){
          setTodos([ ...todos , {text : text , qty : todos.length , check : true }])
          setText('')
          
        }else{
          setTodos(todos)
          alert('You have not input any text ;)')
        }
    }

  return (
    <div>
        <Input 
        handleChange={handleChange} 
        text={text} 
        handleSubmit={handleSubmit}
        />
        <Note 
        setTodos={setTodos} 
        todos={todos}
        />
    </div>
  )
}

export default Todo