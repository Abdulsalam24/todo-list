import React from 'react'
import TodoList from './TodoList'

const Note = ({setTodos ,todos}) => {


  return (
    
    <div className='note'>
        {
          todos.map(todo => 
          <TodoList 
            key={todo.qty}
            todo={todo}
            setTodos={setTodos}
            todos={todos}
          />
          )
        }
    </div>
  )
}
export default Note