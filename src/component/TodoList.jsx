import React from 'react'

const TodoList = ({todos, setTodos, todo}) => {
    // const [todoList , setTodoList] = useState(todo)

    const handleDelete = (e) => {
      const exist = todos.some(todo => todo.qty === e)
      if(exist){
          const filter = todos.filter(todo => todo.qty !== e)
          setTodos(filter)
      }else{
          return setTodos(todos)
      }
    }
  
    const handleCheck = () => {
      setTodos(todos.map((item) => {
          if(item.qty === todo.qty){
            return ({
              ...item , check : !item.check
            })
          }
          return item
      }))
    }
        
  console.log(todos)
  return (
    <div className="todo-list" key={todo.qty}>
        <p className={todo.check ?  'text' : 'checked'}>{todo.text}</p>

        <button 
        className='del'
        onClick={() => handleDelete(todo.qty)}
        >del</button>

        {todo.check === true ? (<span 
        className="check"
        onClick={() => handleCheck(todo)}>C</span>) : <span 
        className="check"
        onClick={() => handleCheck(todo)}>A</span>}
    </div>
  )
}

export default TodoList