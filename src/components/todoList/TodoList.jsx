import React from 'react'
import TodoListItem from '../todoListItem/todoListItem'

const TodoList = (props) => {
  console.log(props.todoData);
  const elements=props.todoData.map(el=>{
    return(
      <li className='list-group-item' key={el.id}>
        <TodoListItem title={el.title} id={el.id} importand={el.importand} delBtn={props.delBtn} toggleTodo={props.toggleTodo}/>
        </li>
    )
  })
  return (
    <ul className='list-group'>
        {elements}
    </ul>
  )
}

export default TodoList
