import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

//component imports here
import Header from './components/Header';
import ToDoForm from './components/ToDoForm';
import FilterForm from './components/FilterForm';
import ToDoList from './components/ToDoList';


function App() {

// these are the useStates
// use state for input
const [userInput, setUserInput] = useState("");

// use state for the the current list and to add
const [todos, setTodos] = useState([INITIAL_TODO])

// inital items on todo
const INITIAL_TODO = [
  {id: uuidv4(), title: 'Read a book', isCompleted: false, dateAdded: new Date()},
  {id: uuidv4(), title: 'Cook food', isCompleted: false, dateAdded: new Date()},
  {id: uuidv4(), title: 'Finish code', isCompleted: false, dateAdded: new Date()}
]

  return (
    <div className="App">

      <div>
        <Header />
      </div>
      <div className='forms'>
        <ToDoForm 
            userInput={userInput}
            setUserInput={setUserInput}
            todos={todos}
            setTodos={setTodos}s
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
