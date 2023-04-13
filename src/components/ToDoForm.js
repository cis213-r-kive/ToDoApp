import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function ToDoForm(userInput, setUserInput, todos, setTodos) {
    // code goes here

    function userInputHandler(event){
        setUserInput(event.target.value);
    }

    function submitToDoFormHandler(event){
        event.preventDefault();
        setTodos([...todos, {
            id: uuidv4(),
            title: {userInput},
            onComplete: false,
            dateAdded: new Date()
        }])
        // empty text box
        setUserInput("")
    }

    return (
        <div>
            <header className='pro-form1'>
                <form  onSumbit={submitToDoFormHandler}>
                    <input 
                    type="text" 
                    placeholder="New To-Do Item..." className="form1-input"
                    value={userInput}
                    onChange={userInputHandler}></input>
                    <button 
                    id="btnAdd" 
                    type="submit">ADD</button>
                </form>
            </header>
        </div>
    );
} 

export default ToDoForm;