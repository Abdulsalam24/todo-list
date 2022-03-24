import React from 'react'

const Note = ({todos , handleDelete , handleCheck}) => {
  return (
    <div className='note'>
        {
          todos.map(todo => {
            return (
              <div className="todo-list" key={todo.qty}>
                <p className={todo.check ? 'checked' : ''}>{todo.text}</p>
                <span 
                className="check"
                onClick={() => handleCheck(todo.check)}
                >C</span>
                <button 
                className='del'
                onClick={() => handleDelete(todo.qty)}
                >del</button>

              </div>
            )
          })
        }
    </div>
  )
}
export default Note