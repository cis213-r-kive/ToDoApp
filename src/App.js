import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import React from 'react'

//component imports here
import Header from './components/Header';
import ToDoForm from './components/ToDoForm';
import FilterForm from './components/FilterForm';
import ToDoList from './components/ToDoList';


function App() {

// these are the useStates
// use state for input
const [userInput, setUserInput] = useState("");



// inital items on todo
const INITIAL_TODO = [
  {id: uuidv4(), title: 'Read a book', isCompleted: false, dateAdded: new Date()},
  {id: uuidv4(), title: 'Cook food', isCompleted: false, dateAdded: new Date()},
  {id: uuidv4(), title: 'Finish code', isCompleted: false, dateAdded: new Date()}
]

// use state for the the current list and to add
const [todos, setTodos] = useState([INITIAL_TODO])

  return (
    <div className="App">
      <Header />

      <div className='forms'>
        <ToDoForm 
            userInput={userInput}
            setUserInput={setUserInput}
            todos={todos}
            setTodos={setTodos}
        />
        <FilterForm />
      </div>

      <div>
        <ToDoList 
          todos={todos}
          setTodos={setTodos}
        />
      </div>

    </div>
  );
}

export default App;
