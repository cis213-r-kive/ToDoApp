import React from 'react';

function ToDoForm() {
// code goes here
    return (
        <div>
            <header className='pro-form1'>
                <form>
                    <input type="text" placeholder="New To-Do Item..." className="form1-input"></input>
                </form>
                <button id="btnAdd" type="submit">ADD</button>
            </header>
        </div>
    );
}

export default ToDoForm;