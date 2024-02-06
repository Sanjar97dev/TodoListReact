  import React, { useState } from 'react'
  import TodoHeader from './components/todoHeader/TodoHeader'
  import TodoList from './components/todoList/TodoList'
  import TodoSearch from './components/todoSearch/TodoSearch'
  import TodoAdd from './components/todoAdd/TodoAdd'
  import '../src/App.css'



  const App = () => {
    const [newTodo, setNewTodoTitle] = useState('');
    const [todoData, setTodo] = useState([
      {id: 1, title: 'Learn React', important:false, done: false},
      {id: 2, title: 'Learn JS', important:false, done: false},
      {id: 3, title: 'Learn Redux', important:false, done: false}
    ])

    const addTodo = (title)=> {
      const newTodo={
        id : todoData.length +1,
        title,
        important: false,
        done: false
      };
      setTodo([...todoData, newTodo])
      console.log([...todoData, newTodo])

    }



    const delBtn=(id)=>{
      const delTodos=todoData.filter(el=>el.id!==id);
      setTodo(delTodos)
      console.log(delTodos);
    }  

    const toggleTodo=(id)=>{
      const toggleMap=todoData.map(el =>el.id === id ? {...el, important : !important } : el);
      setNewTodoTitle(toggleMap)
    }

    const handleInput = (e) => {
      setNewTodoTitle(e.target.value);
    };

    const handleAddTodo = () => {
      if (newTodo.trim() !== '') {
        addTodo(newTodo);
        setNewTodoTitle('');
      }
    };


    return (
      <div style={{width: 400}} className='mx-auto'>
      <TodoHeader/>
      <TodoSearch addTodo={addTodo}
          handleInput={handleInput}
          handleAddTodo={handleAddTodo}
          newTodo={newTodo}/>
      <TodoList todoData={todoData} delBtn={delBtn} toggleTodo={toggleTodo}/>
      <TodoAdd/>
      </div>
    )
  }

  export default App

