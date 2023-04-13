import React from 'react';

function ToDoList(todos) {
    // code goes here

    return (
        <div>
            {todos.map((item) => (
                console.log(todos),
                <li className="listItem" key ={item.id}> 
                    <input 
                        type="checkbox"
                        value={item.title}
                        className="list"
                        onChange={(event) => event.preventDefault()}
                    />
                </li>
            ))}
        </div>
    );
}

export default ToDoList;