import React, {useState, useRef, useEffect} from 'react';
import TodoList from './pages/TodoList';
import { uuid } from 'uuidv4';
import './App.css';


function App() {
  const { uuid } = require('uuidv4');
  const todoNameRef= useRef();
  const todoDateRef = useRef();
  const [todos, setTodos] = useState([]);


  const TodoLogs = 'todoApp.tods'

  // Retrieving
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(TodoLogs)) 
    if (storedTodos) setTodos(storedTodos)
  }, [])

  // Storing
  useEffect(() => {
    localStorage.setItem(TodoLogs, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e) {
    e.preventDefault();

    const name = todoNameRef.current.value
    const date = todoDateRef.current.value
    if (name === '' || date === '') return
    // console.log(name)
    // alert(date)
    // console.log(date)
    setTodos(prevTodos => {
      return [...prevTodos, {
        id: uuid(),
        date: date,  
        name: name,
        complete: false
      }]
    })
    todoNameRef.current.value = null
    todoDateRef.current.value = null
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <div class="container">
      <div class='row'>
        <div class='col-lg-12'>
          <table class='table bg-light mx-auto mt-5 rounded-3 shadow'>
            <tr>
              <th colspan="2" class='text-center fs-4 p-4'>My Task</th>
            </tr>
            <tr>
              <td  ><input style={{height: '60px', backgroundColor: '#fcede8'}} class="form-control" ref={todoNameRef} type="text" placeholder="Add Task"/></td>
              <td style={{width: '50px',}}><input style={{height: '60px',}} class="form-control" type="date" ref={todoDateRef}></input></td>
            </tr>
            <tr style={{borderTop: 'none',}}>
              <td class="p-4 text-center " colspan="2">
                <button class="btn w-25 mx-2 text-dark" onClick={handleAddTodo} style={{backgroundColor: '#f1a7f1'}}>Save</button>
                <button class="btn w-25  text-dark mx-2" onClick={handleClearTodos} style={{backgroundColor: '#fad0c4'}}>Clear</button>
              </td>
            </tr>
            <tr>
            <td  colspan="2" class='text-center p-2'>{todos.filter(todo => !todo.complete).length} Left To Do</td>
            </tr>
            <tr>
              <td colspan="2" id='bgg'><TodoList todos={todos} toggleTodo={toggleTodo}/></td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    
  );
}

export default App;
